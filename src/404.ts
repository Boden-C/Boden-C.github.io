import { gsap } from "gsap";

/**
 * 404 Error Page Animation Controller
 * Handles all animations and interactive effects for the error page
 */
class ErrorPageAnimator {
    private particles: HTMLElement[] = [];
    private animationFrameId?: number;
    private mouseX: number = 0;
    private mouseY: number = 0;
    private isInitialized: boolean = false;

    /**
     * Initialize all animations and effects
     */
    public async init(): Promise<void> {
        if (this.isInitialized) return;

        console.log("Initializing 404 page animations...");

        this.setupEventListeners();
        await this.createParticles();
        await this.animateBackground();
        await this.animateContent();
        await this.setupInteractiveEffects();

        this.isInitialized = true;
        this.startAnimationLoop();
    }

    /**
     * Setup event listeners for mouse tracking and interactions
     */
    private setupEventListeners(): void {
        document.addEventListener("mousemove", this.handleMouseMove.bind(this));

        // Keyboard accessibility
        document.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                const target = e.target as HTMLElement;
                if (target.classList.contains("error-btn")) {
                    target.click();
                }
            }
        });
    }

    /**
     * Handle mouse movement for interactive effects
     */
    private handleMouseMove(event: MouseEvent): void {
        this.mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    /**
     * Create floating particles with random positions and animations
     */
    private async createParticles(): Promise<void> {
        const particleContainer = document.querySelector(".error-particles") as HTMLElement;
        if (!particleContainer) return;

        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement("div");
            particle.className = "error-particle absolute rounded-full bg-white opacity-20";

            // Random size between 1-4px
            const size = Math.random() * 3 + 1;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;

            // Random position
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;

            // Random animation delay
            particle.style.animationDelay = `${Math.random() * 5}s`;

            particleContainer.appendChild(particle);
            this.particles.push(particle);

            // Animate particle appearance
            gsap.fromTo(
                particle,
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: Math.random() * 0.3 + 0.1,
                    duration: Math.random() * 2 + 1,
                    delay: Math.random() * 3,
                    ease: "power2.out",
                }
            );
        }
    }

    /**
     * Animate the background gradient
     */
    private async animateBackground(): Promise<void> {
        const bgGradient = document.querySelector(".error-bg-gradient") as HTMLElement;
        if (!bgGradient) return;

        // Set initial gradient
        bgGradient.style.background = `
            radial-gradient(
                circle at 30% 70%,
                rgba(45, 55, 75, 0.15) 0%,
                rgba(25, 35, 55, 0.1) 40%,
                rgba(15, 20, 35, 0.05) 70%,
                transparent 100%
            ),
            linear-gradient(
                135deg,
                rgba(30, 40, 60, 0.1) 0%,
                rgba(20, 25, 40, 0.08) 50%,
                rgba(10, 15, 25, 0.05) 100%
            )
        `;

        // Fade in background
        gsap.to(bgGradient, {
            opacity: 1,
            duration: 3,
            ease: "power2.inOut",
        });

        // Animate gradient position
        gsap.to(bgGradient, {
            backgroundPosition: "100% 30%",
            duration: 20,
            ease: "none",
            repeat: -1,
            yoyo: true,
        });
    }

    /**
     * Animate the main content elements
     */
    private async animateContent(): Promise<void> {
        const content = document.querySelector(".error-content") as HTMLElement;
        const number = document.querySelector(".error-number") as HTMLElement;
        const title = document.querySelector(".error-title") as HTMLElement;
        const description = document.querySelector(".error-description") as HTMLElement;
        const actions = document.querySelector(".error-actions") as HTMLElement;

        if (!content) return;

        // Main content container
        gsap.to(content, {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            delay: 0.5,
        });

        // Large 404 number with dramatic entrance
        if (number) {
            // Set initial styles for 404 number
            number.style.fontSize = "min(25vw, 15rem)";
            number.style.fontWeight = "700";
            number.style.lineHeight = "0.8";

            gsap.fromTo(
                number,
                {
                    scale: 0.3,
                    opacity: 0,
                    rotationY: 180,
                    filter: "blur(20px)",
                },
                {
                    scale: 1,
                    opacity: 1,
                    rotationY: 0,
                    filter: "blur(0px)",
                    duration: 2,
                    ease: "back.out(1.7)",
                    delay: 0.8,
                }
            );

            // Continuous subtle animation
            gsap.to(number, {
                rotationY: 5,
                duration: 4,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
            });
        }

        // Title animation
        if (title) {
            title.style.fontSize = "2rem";
            gsap.to(title, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                delay: 1.5,
            });
        }

        // Description animation
        if (description) {
            gsap.to(description, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                delay: 1.8,
            });
        }

        // Actions animation
        if (actions) {
            gsap.to(actions, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                delay: 2.1,
            });
        }

        // Animate decorative glows
        this.animateDecorativeElements();
    }

    /**
     * Animate decorative glow elements
     */
    private animateDecorativeElements(): void {
        const glows = document.querySelectorAll("[class^='error-glow-']") as NodeListOf<HTMLElement>;

        glows.forEach((glow, index) => {
            const size = Math.random() * 200 + 100;
            const x = Math.random() * 100;
            const y = Math.random() * 100;

            glow.style.width = `${size}px`;
            glow.style.height = `${size}px`;
            glow.style.left = `${x}%`;
            glow.style.top = `${y}%`;
            glow.style.background = `radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)`;
            glow.style.borderRadius = "50%";
            glow.style.filter = "blur(20px)";

            gsap.to(glow, {
                opacity: 0.5,
                duration: 3 + index,
                ease: "power2.inOut",
                delay: 2 + index * 0.5,
            });

            // Floating animation
            gsap.to(glow, {
                x: `${(Math.random() - 0.5) * 100}px`,
                y: `${(Math.random() - 0.5) * 100}px`,
                duration: 8 + index * 2,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
            });
        });
    }

    /**
     * Setup interactive hover and focus effects
     */
    private async setupInteractiveEffects(): Promise<void> {
        const buttons = document.querySelectorAll(".error-btn") as NodeListOf<HTMLElement>;

        buttons.forEach((button) => {
            // Set initial button styles
            if (button.classList.contains("error-btn-primary")) {
                button.style.background =
                    "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)";
                button.style.border = "1px solid rgba(255,255,255,0.2)";
                button.style.backdropFilter = "blur(10px)";
                button.style.color = "white";
            } else {
                button.style.background =
                    "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)";
                button.style.border = "1px solid rgba(255,255,255,0.1)";
                button.style.backdropFilter = "blur(10px)";
                button.style.color = "rgba(255,255,255,0.8)";
            }

            // Hover effects
            button.addEventListener("mouseenter", () => {
                gsap.to(button, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: "power2.out",
                });

                if (button.classList.contains("error-btn-primary")) {
                    gsap.to(button, {
                        background: "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)",
                        duration: 0.3,
                    });
                }
            });

            button.addEventListener("mouseleave", () => {
                gsap.to(button, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out",
                });

                if (button.classList.contains("error-btn-primary")) {
                    gsap.to(button, {
                        background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                        duration: 0.3,
                    });
                }
            });

            // Click effect
            button.addEventListener("click", () => {
                gsap.to(button, {
                    scale: 0.95,
                    duration: 0.1,
                    ease: "power2.out",
                    yoyo: true,
                    repeat: 1,
                });
            });
        });
    }

    /**
     * Main animation loop for continuous effects
     */
    private startAnimationLoop(): void {
        const animate = () => {
            this.updateParticles();
            this.updateMouseEffects();
            this.animationFrameId = requestAnimationFrame(animate);
        };

        animate();
    }

    /**
     * Update particle positions and animations
     */
    private updateParticles(): void {
        this.particles.forEach((particle, index) => {
            const time = Date.now() * 0.0001;
            const offset = index * 0.1;

            // Gentle floating motion
            const x = Math.sin(time + offset) * 20;
            const y = Math.cos(time * 0.7 + offset) * 15;

            particle.style.transform = `translate(${x}px, ${y}px)`;

            // Subtle opacity pulsing
            const opacity = 0.1 + Math.sin(time * 2 + offset) * 0.1;
            particle.style.opacity = opacity.toString();
        });
    }

    /**
     * Update mouse-based interactive effects
     */
    private updateMouseEffects(): void {
        const number = document.querySelector(".error-number") as HTMLElement;
        if (!number) return;

        // Subtle mouse following for the 404 number
        const targetX = 45 + this.mouseX * 10;
        const targetY = 50 + this.mouseY * 10;

        number.style.setProperty("--x", `${targetX}%`);
        number.style.setProperty("--y", `${targetY}%`);
    }

    /**
     * Clean up animations and event listeners
     */
    public dispose(): void {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }

        document.removeEventListener("mousemove", this.handleMouseMove);
        gsap.killTweensOf("*");
    }
}

// Initialize the error page animations when DOM is ready
document.addEventListener("DOMContentLoaded", async () => {
    const animator = new ErrorPageAnimator();
    await animator.init();

    // Cleanup on page unload
    window.addEventListener("beforeunload", () => {
        animator.dispose();
    });
});

// Announce page load to screen readers
setTimeout(() => {
    const announcer = document.getElementById("screen-reader-announcer");
    if (announcer) {
        announcer.textContent = "404 error page loaded. The page you were looking for could not be found.";
    }
}, 1000);
