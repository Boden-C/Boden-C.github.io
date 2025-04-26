import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export class ModelViewer {
    private container: HTMLElement;
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private renderer: THREE.WebGLRenderer;
    private particles: THREE.Points | null = null;
    private animationFrame: number | null = null;

    constructor(containerId: string) {
        // Get the container element
        this.container = document.getElementById(containerId) as HTMLElement;
        if (!this.container) {
            throw new Error(`Container element with id "${containerId}" not found`);
        }

        // Create scene, camera, and renderer
        this.scene = new THREE.Scene();
        // Make scene transparent to show the CSS gradient background
        this.scene.background = null;
        
        // Create fog that extends further but is less dense
        this.scene.fog = new THREE.FogExp2(0x000000, 0.0001);

        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
        this.renderer = new THREE.WebGLRenderer({ 
            alpha: true, // Enable transparency
            antialias: true 
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        // Make clear color transparent
        this.renderer.setClearColor(0x000000, 0);

        // Add the renderer to the container
        this.container.appendChild(this.renderer.domElement);

        // Setup camera position to see further down
        this.camera.position.z = 15;
        this.camera.position.y = -5; // Position camera slightly lower to see more of the scene below

        // Initialize animation
        this.animate();

        // Handle resize events
        window.addEventListener("resize", this.handleResize.bind(this));
        
        // Add scroll event to adjust camera
        window.addEventListener("scroll", this.handleScroll.bind(this));
    }

    private handleResize(): void {
        // Update camera
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        
        // Update renderer
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    private handleScroll(): void {
        // Calculate how far down the page we've scrolled
        const scrollY = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const scrollFraction = Math.min(scrollY / maxScroll, 1);
        
        // Adjust camera position based on scroll
        if (this.camera) {
            // Tilt camera down as user scrolls
            this.camera.rotation.x = -scrollFraction * 0.5;
            
            // Move camera position based on scroll - follow the radial gradient
            this.camera.position.y = -5 - (scrollFraction * 20);
            
            // Gradually move camera toward the bottom right (where the radial gradient is centered)
            if (scrollFraction > 0.3) {
                const rightwardMovement = (scrollFraction - 0.3) * 10;
                this.camera.position.x = Math.min(rightwardMovement, 7);
            }
        }
    }

    private animate(): void {
        this.animationFrame = requestAnimationFrame(this.animate.bind(this));
        
        // Animate particles if they exist
        if (this.particles) {
            this.particles.rotation.y += 0.0005;
            
            // Create subtle wave motion
            const positions = (this.particles.geometry as THREE.BufferGeometry).getAttribute('position');
            const time = Date.now() * 0.0001;
            
            for (let i = 0; i < positions.count; i++) {
                const x = positions.getX(i);
                const y = positions.getY(i);
                
                // Create gentle wave effect
                const z = positions.getZ(i);
                const newZ = z + Math.sin(time + x * 0.05 + y * 0.05) * 0.5;
                
                positions.setZ(i, newZ);
            }
            
            positions.needsUpdate = true;
        }
        
        this.renderer.render(this.scene, this.camera);
    }

    public dispose(): void {
        // Clean up resources
        if (this.animationFrame !== null) {
            cancelAnimationFrame(this.animationFrame);
        }
        
        // Remove event listeners
        window.removeEventListener("resize", this.handleResize.bind(this));
        window.removeEventListener("scroll", this.handleScroll.bind(this));
    }

    // Method to add content to the scene
    public loadContent(): void {
        // Create a deeper space effect with particles
        this.createParticleField();
        
        // Create a simple geometry to visualize the 3D space
        // Position geometry toward the bottom right to align with the radial gradient
        const geometry = new THREE.IcosahedronGeometry(2, 0);
        const material = new THREE.MeshNormalMaterial({ wireframe: true });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(7, -15, -10); // Position toward bottom right
        this.scene.add(mesh);

        // Animation for the mesh
        gsap.to(mesh.rotation, {
            x: Math.PI * 2,
            y: Math.PI * 2,
            duration: 10,
            repeat: -1,
            ease: "none"
        });
    }
    
    private createParticleField(): void {
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 4000; // Moderate particle count
        
        const positions = new Float32Array(particlesCount * 3);
        const colors = new Float32Array(particlesCount * 3);
        
        // Create particle texture for better looking particles
        const particleTexture = new THREE.Texture(this.createParticleTexture());
        particleTexture.needsUpdate = true;
        
        // Create a field that concentrates more particles toward the bottom right
        // to complement the radial gradient there
        for (let i = 0; i < particlesCount; i++) {
            // Get random values for positioning
            const theta = Math.random() * Math.PI * 2;
            let radius, y;
            
            // Distribute particles with bias toward bottom right (75% 90% in CSS)
            if (Math.random() < 0.6) {
                // 60% of particles concentrated toward bottom right
                radius = 5 + Math.random() * 30;
                const rightBias = Math.random() * 10; // Bias toward right side
                positions[i * 3] = radius * Math.cos(theta) + rightBias; // x with right bias
                
                y = -10 - Math.random() * 40; // Lower position for bottom bias
            } else {
                // 40% of particles scattered throughout
                radius = 5 + Math.random() * 50;
                positions[i * 3] = radius * Math.cos(theta); // x
                
                y = -Math.random() * 80; // General distribution lower
            }
            
            positions[i * 3 + 1] = y; // y
            positions[i * 3 + 2] = radius * Math.sin(theta); // z
            
            // Color - create subtle blue variations that complement the radial gradient
            // Bottom right particles are brighter
            let brightness;
            if (positions[i * 3] > 0 && positions[i * 3 + 1] < -20) {
                // Brighter for particles in bottom right
                brightness = 0.7 + Math.random() * 0.3;
            } else {
                // Dimmer for particles elsewhere
                brightness = 0.4 + Math.random() * 0.3;
            }
            
            colors[i * 3] = brightness * 0.8; // r
            colors[i * 3 + 1] = brightness * 0.9; // g
            colors[i * 3 + 2] = brightness; // b - full brightness for blue tint
        }
        
        particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
        
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.6,
            sizeAttenuation: true,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            map: particleTexture,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });
        
        this.particles = new THREE.Points(particlesGeometry, particlesMaterial);
        this.scene.add(this.particles);
    }
    
    private createParticleTexture(): HTMLCanvasElement {
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
        gradient.addColorStop(0.3, "rgba(255, 255, 255, 0.9)");
        gradient.addColorStop(0.7, "rgba(255, 255, 255, 0.5)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        
        context.fillStyle = gradient;
        context.fillRect(0, 0, canvas.width, canvas.height);
        
        return canvas;
    }
}