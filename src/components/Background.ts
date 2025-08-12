import * as THREE from "three";
import { gsap } from "gsap";

export class Background {
    private scene?: THREE.Scene;
    private camera?: THREE.PerspectiveCamera;
    private renderer?: THREE.WebGLRenderer;
    private particles?: THREE.Points;
    private animationFrame?: number;
    private mouseX: number = 0;
    private mouseY: number = 0;
    private readonly MIN_DISTANCE = 8; // Min distance from camera before particle is respawned

    /**
     * Initialize the 3D background effect
     */
    public init(): Promise<void> {
        return new Promise((resolve) => {
            if (!document.getElementById("background-canvas")) {
                const canvas = document.createElement("canvas");
                canvas.id = "background-canvas";
                canvas.style.position = "fixed";
                canvas.style.top = "0";
                canvas.style.left = "0";
                canvas.style.width = "100%";
                canvas.style.height = "100%";
                canvas.style.zIndex = "1";
                canvas.style.opacity = "0";
                document.body.prepend(canvas);
            }

            this.scene = new THREE.Scene();

            // Update background to deep navy to match accent palette
            const backgroundColor = new THREE.Color(0x0b1220);
            this.scene.background = backgroundColor;
            this.scene.fog = new THREE.FogExp2(0x0b1220, 0.00002);

            // Setup camera
            this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            this.camera.position.z = 50;

            // Setup renderer
            this.renderer = new THREE.WebGLRenderer({
                canvas: document.getElementById("background-canvas") as HTMLCanvasElement,
                alpha: true,
                antialias: true,
            });
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.renderer.setPixelRatio(window.devicePixelRatio);

            // Create particles
            const particlesGeometry = new THREE.BufferGeometry();
            const particlesCount = 5000;

            const positions = new Float32Array(particlesCount * 3);
            const colors = new Float32Array(particlesCount * 3);

            // Accent palette (blue -> violet -> purple)
            const palette = [
                new THREE.Color(0x3b82f6), // blue-500
                new THREE.Color(0x8b5cf6), // violet-500/600
                new THREE.Color(0xa855f7), // purple-500
            ];

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

                // Color - whiter with subtle accent tint
                const base = palette[Math.floor(Math.random() * palette.length)];
                const mix = 0.5 + Math.random() * 0.05; // 80-95% white mix
                const r = base.r * (1 - mix) + 1 * mix;
                const g = base.g * (1 - mix) + 1 * mix;
                const b = base.b * (1 - mix) + 1 * mix;
                const brightness = 0.96 + Math.random() * 0.08;
                colors[i * 3] = Math.min(1, r * brightness);
                colors[i * 3 + 1] = Math.min(1, g * brightness);
                colors[i * 3 + 2] = Math.min(1, b * brightness);
            }

            particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
            particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

            // Create a canvas texture for rounded particles
            const particleTexture = new THREE.Texture(this.createParticleTexture());
            particleTexture.needsUpdate = true;

            const particlesMaterial = new THREE.PointsMaterial({
                size: particleSize,
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

            // Handle window resize
            window.addEventListener("resize", this.handleResize.bind(this));

            // Handle mouse movement
            // Too laggy...but know I added it
            // window.addEventListener("mousemove", this.handleMouseMove.bind(this));

            // Animate the background effect
            this.animate();

            // Fade in the canvas and resolve once done
            gsap.to(document.getElementById("background-canvas")!, {
                opacity: 0.6,
                duration: 2,
                ease: "power2.inOut",
                delay: 0.5,
                onComplete: () => resolve(),
            });
        });
    }

    /**
     * Handle window resize
     */
    private handleResize(): void {
        if (this.camera && this.renderer) {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        }
    }

    /**
     * Handle mouse movement
     */
    private handleMouseMove(e: MouseEvent): void {
        this.mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        this.mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    }

    /**
     * Create a rounded particle texture
     */
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
        gradient.addColorStop(0.3, "rgba(255, 255, 255, 0.9)"); // Brighter middle region
        gradient.addColorStop(0.7, "rgba(255, 255, 255, 0.5)"); // Brighter outer region
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        context.fillStyle = gradient;
        context.fillRect(0, 0, canvas.width, canvas.height);

        return canvas;
    }

    /**
     * Animate the 3D background effect
     */
    private animate(): void {
        if (!this.scene || !this.camera || !this.renderer || !this.particles) return;

        this.animationFrame = requestAnimationFrame(this.animate.bind(this));

        const positions = (this.particles.geometry as THREE.BufferGeometry).getAttribute("position");
        const time = Date.now() * 0.0002; // Slower particle movement
        const camPos = this.camera.position;

        for (let i = 0; i < positions.count; i++) {
            const x = positions.getX(i);
            const y = positions.getY(i);
            const z = positions.getZ(i);

            // Wave effect with slower movement
            const newZ = z + Math.sin(time + x * 0.02 + y * 0.02) * 1.5;
            const mouseInfluence = 0.03;
            const adjustedZ = newZ + this.mouseX * mouseInfluence * x + this.mouseY * mouseInfluence * y;

            // Distance to camera (camera at (0,0,50))
            const dx = x - camPos.x;
            const dy = y - camPos.y;
            const dz = adjustedZ - camPos.z;
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist < this.MIN_DISTANCE) {
                // Respawn particle at a new random spherical position far away
                const radius = 40 + Math.random() * 60; // 40-100
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos(Math.random() * 2 - 1);
                const nx = radius * Math.sin(phi) * Math.cos(theta);
                const ny = radius * Math.sin(phi) * Math.sin(theta);
                const nz = radius * Math.cos(phi);
                positions.setXYZ(i, nx, ny, nz);
            } else {
                positions.setZ(i, adjustedZ);
            }
        }

        positions.needsUpdate = true;
        this.particles.rotation.y += 0.00005; // Slow rotation
        this.renderer.render(this.scene, this.camera);
    }

    /**
     * Clean up resources
     */
    public dispose(): void {
        window.removeEventListener("resize", this.handleResize.bind(this));
        window.removeEventListener("mousemove", this.handleMouseMove.bind(this));

        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
        }

        // Dispose of Three.js resources
        if (this.particles) {
            const geometry = this.particles.geometry;
            const material = this.particles.material as THREE.Material;

            geometry.dispose();
            material.dispose();
        }

        if (this.renderer) {
            this.renderer.dispose();
        }
    }
}
