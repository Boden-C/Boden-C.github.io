import { render } from "lit-html";
import { Layout } from "./components/Layout";
import { debounce, isHorizontalLayout, announceToScreenReader, animateGlossyText } from "./utils";
import * as THREE from "three";
import { gsap } from "gsap";

// --- Application State ---
interface AppState {
    isLoaded: boolean;
    isHorizontal: boolean;
    areExtraDivsVisible: boolean;
    mouseX: number;
    mouseY: number;
    backgroundEffect: {
        scene?: THREE.Scene;
        camera?: THREE.PerspectiveCamera;
        renderer?: THREE.WebGLRenderer;
        particles?: THREE.Points;
        animationFrame?: number;
    };
    textAnimation?: {
        animationFrame?: number;
    };
}

const state: AppState = {
    isLoaded: false,
    isHorizontal: isHorizontalLayout(),
    areExtraDivsVisible: false,
    mouseX: 0,
    mouseY: 0,
    backgroundEffect: {},
    textAnimation: {},
};

// --- DOM References ---
const appElement = document.getElementById("app") as HTMLElement;

// --- Rendering ---
const renderApp = () => {
    if (!appElement) {
        console.error("App container not found");
        return;
    }

    render(Layout(state), appElement);
};

// --- Event Handlers ---

/**
 * Handle title transition end event
 */
const handleTitleTransition = (event: TransitionEvent) => {
    // Only respond to the transform property ending
    if (event.propertyName === "transform" && !state.areExtraDivsVisible) {
        console.log("Title transition finished.");
        showExtraDivs();
    }
};

/**
 * Show the extra divs (About and Projects sections)
 */
const showExtraDivs = () => {
    if (!state.areExtraDivsVisible) {
        console.log("Showing extra divs...");
        state.areExtraDivsVisible = true;
        renderApp();

        // Announce to screen readers that content is now visible
        announceToScreenReader("Additional content is now available.");
    }
};

/**
 * Update layout based on screen orientation
 */
const updateLayout = () => {
    console.log("Updating layout...");

    const wasHorizontal = state.isHorizontal;
    state.isHorizontal = isHorizontalLayout();

    // Only re-render if orientation actually changed
    if (wasHorizontal !== state.isHorizontal) {
        renderApp();
        announceToScreenReader(`Layout changed to ${state.isHorizontal ? "horizontal" : "vertical"} mode.`);
    }
};

/**
 * Initialize the 3D background effect
 */
const initBackgroundEffect = () => {
    if (!document.getElementById("background-canvas")) {
        const canvas = document.createElement("canvas");
        canvas.id = "background-canvas";
        canvas.style.position = "fixed";
        canvas.style.top = "0";
        canvas.style.left = "0";
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.style.zIndex = "-1";
        canvas.style.opacity = "0";
        document.body.prepend(canvas);
    }

    const scene = new THREE.Scene();

    // Add gradient background
    const backgroundColor = new THREE.Color(0x000000);
    scene.background = backgroundColor;
    scene.fog = new THREE.FogExp2(0x000000, 0.001);

    // Setup camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;

    // Setup renderer
    const renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById("background-canvas") as HTMLCanvasElement,
        alpha: true,
        antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;

    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    const particleSize = 0.5;

    // Create better particle distribution using spherical coordinates
    for (let i = 0; i < particlesCount; i++) {
        // Use spherical distribution with randomness to prevent clumping
        const radius = 40 + Math.random() * 60; // Varied radius between 40-100
        const theta = Math.random() * Math.PI * 2; // Random angle around y-axis
        const phi = Math.acos(Math.random() * 2 - 1); // Random angle from top to bottom

        // Convert spherical to cartesian coordinates
        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta); // x
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta); // y
        positions[i * 3 + 2] = radius * Math.cos(phi); // z

        // Color - brighter white/blue variations
        colors[i * 3] = 0.9 + Math.random() * 0.1; // r - increased brightness
        colors[i * 3 + 1] = 0.9 + Math.random() * 0.1; // g - increased brightness
        colors[i * 3 + 2] = 1.0; // b - full brightness for blue
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Create a canvas texture for rounded particles
    const particleTexture = new THREE.Texture(createParticleTexture());
    particleTexture.needsUpdate = true;

    const particlesMaterial = new THREE.PointsMaterial({
        size: particleSize,
        sizeAttenuation: true,
        vertexColors: true,
        transparent: true,
        opacity: 0.8, // Increased opacity from 0.5 to 0.8
        map: particleTexture,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
    });

    // Function to create a rounded particle texture
    function createParticleTexture() {
        const canvas = document.createElement("canvas");
        canvas.width = 64;
        canvas.height = 64;

        const context = canvas.getContext("2d");
        if (!context) return canvas;

        // Draw a radial gradient for a soft circular particle
        const gradient = context.createRadialGradient(
            canvas.width / 2,
            canvas.height / 2,
            0,
            canvas.width / 2,
            canvas.height / 2,
            canvas.width / 2
        );

        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.3, "rgba(255, 255, 255, 0.9)"); // Brighter middle region
        gradient.addColorStop(0.7, "rgba(255, 255, 255, 0.5)"); // Brighter outer region
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        context.fillStyle = gradient;
        context.fillRect(0, 0, canvas.width, canvas.height);

        return canvas;
    }

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    state.backgroundEffect = {
        scene,
        camera,
        renderer,
        particles,
    };

    // Handle window resize
    window.addEventListener("resize", () => {
        const { camera, renderer } = state.backgroundEffect;
        if (camera && renderer) {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }
    });

    // Animate the background effect
    animateBackgroundEffect();

    // Fade in the canvas
    gsap.to(document.getElementById("background-canvas")!, {
        opacity: 0.6,
        duration: 2,
        ease: "power2.inOut",
        delay: 0.5,
    });
};

/**
 * Animate the 3D background effect
 */
const animateBackgroundEffect = () => {
    const { scene, camera, renderer, particles } = state.backgroundEffect;

    if (!scene || !camera || !renderer || !particles) return;

    state.backgroundEffect.animationFrame = requestAnimationFrame(animateBackgroundEffect);

    // Wave effect based on time and mouse position
    const positions = (particles.geometry as THREE.BufferGeometry).getAttribute("position");
    const time = Date.now() * 0.0004;

    for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        const z = positions.getZ(i);

        // Create wave effect
        const newZ = z + Math.sin(time + x * 0.03 + y * 0.03) * 2;

        // Subtle mouse interaction
        const mouseInfluence = 0.05;
        const adjustedZ = newZ + state.mouseX * mouseInfluence * x + state.mouseY * mouseInfluence * y;

        positions.setZ(i, adjustedZ);
    }

    positions.needsUpdate = true;

    // Rotate particles very slowly
    particles.rotation.y += 0.0001;

    renderer.render(scene, camera);
};

/**
 * Initialize the glossy text animation
 */
const initGlossyTextAnimation = () => {
    // Start the glossy text gradient animation
    state.textAnimation = {
        animationFrame: animateGlossyText(),
    };
};

/**
 * Handle content load completion
 */
const handleLoad = () => {
    console.log("Window loaded. Applying loaded state...");
    state.isLoaded = true;
    initBackgroundEffect();
    initGlossyTextAnimation();
    renderApp();
};

// --- Event Listeners ---
window.addEventListener("load", handleLoad);
window.addEventListener("resize", debounce(updateLayout, 100));
window.addEventListener("orientationchange", updateLayout);
window.addEventListener("mousemove", (e) => {
    state.mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    state.mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
});

// Listen for title transition end event using event delegation
document.addEventListener("transitionend", (e) => {
    const target = e.target as HTMLElement;
    if (target.id === "titleContainer") {
        handleTitleTransition(e as TransitionEvent);
    }
});

// Initial render
renderApp();
