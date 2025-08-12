import { html } from "lit-html";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

// Register GSAP plugins
gsap.registerPlugin(TextPlugin);

export interface AboutProps {
    isVisible: boolean;
    isHorizontal: boolean;
}

// Text content for the terminal
const TERMINAL_COMMAND = "cat README.md";
const README_PARAGRAPHS = [
    "# Hello World!",
    "I'm a software dev who also loves design.",
    "I have experience with full-stack, machine learning, and game development.",
    "Like this website? View this and more on my GitHub!",
];

/**
 * Runs the animation for terminal command and paragraphs
 */
const animateTerminalContent = () => {
    // Create the animation timeline
    const timeline = gsap.timeline({ delay: 0.3 });

    // Type the command (after the static prompt)
    timeline.to("#terminal-command", {
        duration: 0.8,
        text: TERMINAL_COMMAND,
        ease: "expo.out",
    });

    // Small pause after command is typed
    timeline.to({}, { duration: 0.2 });

    // Animate each paragraph with fade + y transform
    README_PARAGRAPHS.forEach((_, index) => {
        timeline.to(
            `#paragraph-${index}`,
            {
                duration: 1.0,
                opacity: 1,
                y: 0,
                ease: "expo.out",
            },
            "-=0.7"
        ); // Faster overlap for smoother sequence
    });

    // Fade in the social links at the end
    timeline.to(
        "#social-links",
        {
            duration: 1.5,
            opacity: 1,
            y: 0,
            ease: "expo.out",
        },
        "-=0.9"
    );

    return timeline;
};

/**
 * Renders the About Me section styled like a terminal
 * @param props Component properties
 * @returns Lit-html template
 */
export const About = (props: AboutProps) => {
    const { isVisible, isHorizontal } = props;

    // Determine CSS classes based on state
    const baseClasses = "about-container absolute p-4 text-white font-mono";
    const visibilityClasses = isVisible ? "opacity-100" : "opacity-0";
    const layoutClasses = isHorizontal ? "loaded-horizontal" : "loaded-vertical";

    // Apply the appropriate classes based on state
    const classes = `${baseClasses} ${visibilityClasses} ${layoutClasses}`;

    // Run the animations when the component becomes visible
    if (isVisible) {
        // Use setTimeout to ensure DOM is ready
        setTimeout(() => {
            animateTerminalContent(); // Setup blinking cursor animation
            gsap.to("#cursor", {
                opacity: 0,
                repeat: -1,
                yoyo: true,
                duration: 0.8,
            });

            // Floating animation for all social icons (reduced frequency)
            gsap.to(".social-icon", {
                y: -3,
                duration: 4.5,
                ease: "power2.inOut",
                yoyo: true,
                repeat: -1,
                stagger: 0.6,
            }); // Setup optimized vanilla CSS hover animations for social icons
            const socialIcons = document.querySelectorAll(".social-icon");
            socialIcons.forEach((icon: Element) => {
                const iconEl = icon as HTMLElement;
                const svg = icon.querySelector("svg") as SVGElement;
                const label = icon.querySelector("span") as HTMLSpanElement;

                // Enable hardware acceleration
                iconEl.style.willChange = "transform";
                if (svg) svg.style.willChange = "transform";
                if (label) label.style.willChange = "transform";

                // Apply performance optimizations
                iconEl.style.backfaceVisibility = "hidden";
                iconEl.style.perspective = "1000px";
                iconEl.style.transformStyle = "preserve-3d";

                // Set up smooth transitions
                iconEl.style.transition = "transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
                if (svg) svg.style.transition = "transform 0.28s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
                if (label) label.style.transition = "transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)";

                iconEl.addEventListener("mouseenter", () => {
                    // Vanilla CSS transforms for maximum performance
                    iconEl.style.transform = "scale(1.08) translateY(-2px)";
                    if (svg) svg.style.transform = "scale(1.12)";
                    if (label) label.style.transform = "scale(1.04) translateY(-1px)";
                });

                iconEl.addEventListener("mouseleave", () => {
                    iconEl.style.transform = "scale(1) translateY(0)";
                    if (svg) svg.style.transform = "scale(1)";
                    if (label) label.style.transform = "scale(1) translateY(0)";
                });
            });
        }, 100);
    }
    return html`
        <style>
            @keyframes gradientFlow {
                0%,
                100% {
                    background-position: 0% 50%;
                }
                50% {
                    background-position: 100% 50%;
                }
            }

            @keyframes purpleGradientFlow {
                0%,
                100% {
                    background-position: 0% 50%;
                }
                50% {
                    background-position: 100% 50%;
                }
            }

            @keyframes blueGradientFlow {
                0%,
                100% {
                    background-position: 20% 50%;
                }
                50% {
                    background-position: 80% 50%;
                }
            }

            @keyframes greenGradientFlow {
                0%,
                100% {
                    background-position: 10% 50%;
                }
                50% {
                    background-position: 90% 50%;
                }
            }

            @keyframes accentGradientFlow {
                0%,
                100% {
                    background-position: 0% 50%;
                }
                50% {
                    background-position: 100% 50%;
                }
            } /* Social icon performance optimizations */
            .social-icon {
                will-change: transform;
                backface-visibility: hidden;
                transform-style: preserve-3d;
                transition: transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                width: 80px;
                height: 80px;
            }

            .social-icon svg {
                will-change: transform, filter;
                transition:
                    transform 0.28s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                    filter 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            }

            .social-icon span {
                will-change: transform;
                transition: transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            } /* Animated glowing effects for each social icon */
            @keyframes purpleGlow {
                0% {
                    filter: drop-shadow(0 0 8px rgba(168, 85, 247, 0.6)) drop-shadow(0 0 16px rgba(168, 85, 247, 0.3));
                }
                20% {
                    filter: drop-shadow(0 0 12px rgba(147, 51, 234, 0.7)) drop-shadow(0 0 20px rgba(196, 125, 255, 0.4));
                }
                40% {
                    filter: drop-shadow(0 0 16px rgba(236, 72, 153, 0.8)) drop-shadow(0 0 24px rgba(219, 39, 119, 0.5));
                }
                60% {
                    filter: drop-shadow(0 0 20px rgba(192, 38, 211, 0.9)) drop-shadow(0 0 30px rgba(168, 85, 247, 0.6));
                }
                80% {
                    filter: drop-shadow(0 0 18px rgba(139, 92, 246, 0.8)) drop-shadow(0 0 28px rgba(124, 58, 237, 0.5));
                }
                100% {
                    filter: drop-shadow(0 0 8px rgba(168, 85, 247, 0.6)) drop-shadow(0 0 16px rgba(168, 85, 247, 0.3));
                }
            }

            @keyframes blueGlow {
                0% {
                    filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.6)) drop-shadow(0 0 16px rgba(59, 130, 246, 0.3));
                }
                25% {
                    filter: drop-shadow(0 0 12px rgba(37, 99, 235, 0.7)) drop-shadow(0 0 20px rgba(96, 165, 250, 0.4));
                }
                50% {
                    filter: drop-shadow(0 0 16px rgba(6, 182, 212, 0.8)) drop-shadow(0 0 24px rgba(14, 165, 233, 0.5));
                }
                75% {
                    filter: drop-shadow(0 0 14px rgba(8, 145, 178, 0.7)) drop-shadow(0 0 22px rgba(56, 189, 248, 0.4));
                }
                100% {
                    filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.6)) drop-shadow(0 0 16px rgba(59, 130, 246, 0.3));
                }
            }

            @keyframes greenGlow {
                0% {
                    filter: drop-shadow(0 0 8px rgba(34, 197, 94, 0.6)) drop-shadow(0 0 16px rgba(34, 197, 94, 0.3));
                }
                25% {
                    filter: drop-shadow(0 0 12px rgba(21, 128, 61, 0.7)) drop-shadow(0 0 20px rgba(74, 222, 128, 0.4));
                }
                50% {
                    filter: drop-shadow(0 0 16px rgba(132, 204, 22, 0.8)) drop-shadow(0 0 24px rgba(163, 230, 53, 0.5));
                }
                75% {
                    filter: drop-shadow(0 0 14px rgba(5, 150, 105, 0.7)) drop-shadow(0 0 22px rgba(16, 185, 129, 0.4));
                }
                100% {
                    filter: drop-shadow(0 0 8px rgba(34, 197, 94, 0.6)) drop-shadow(0 0 16px rgba(34, 197, 94, 0.3));
                }
            }
            @keyframes githubPulse {
                0%,
                100% {
                    transform: scale(1) rotate(0deg);
                    filter: drop-shadow(0 0 8px rgba(168, 85, 247, 0.6)) drop-shadow(0 0 16px rgba(168, 85, 247, 0.3));
                }
                12% {
                    transform: scale(1.02) rotate(1deg);
                    filter: drop-shadow(0 0 12px rgba(147, 51, 234, 0.7)) drop-shadow(0 0 20px rgba(196, 125, 255, 0.4));
                }
                20% {
                    transform: scale(1.04) rotate(-1deg);
                    filter: drop-shadow(0 0 14px rgba(236, 72, 153, 0.75))
                        drop-shadow(0 0 22px rgba(219, 39, 119, 0.45));
                }
                30% {
                    transform: scale(1.06) rotate(2deg);
                    filter: drop-shadow(0 0 16px rgba(192, 38, 211, 0.8)) drop-shadow(0 0 26px rgba(168, 85, 247, 0.5));
                }
                40% {
                    transform: scale(1.08) rotate(-1.5deg);
                    filter: drop-shadow(0 0 18px rgba(139, 92, 246, 0.85))
                        drop-shadow(0 0 30px rgba(124, 58, 237, 0.55));
                }
                50% {
                    transform: scale(1.1) rotate(0deg);
                    filter: drop-shadow(0 0 20px rgba(168, 85, 247, 1)) drop-shadow(0 0 35px rgba(236, 72, 153, 0.7))
                        drop-shadow(0 0 50px rgba(139, 92, 246, 0.4));
                }
                60% {
                    transform: scale(1.08) rotate(1.5deg);
                    filter: drop-shadow(0 0 18px rgba(192, 38, 211, 0.85))
                        drop-shadow(0 0 30px rgba(147, 51, 234, 0.55));
                }
                70% {
                    transform: scale(1.06) rotate(-2deg);
                    filter: drop-shadow(0 0 16px rgba(124, 58, 237, 0.8)) drop-shadow(0 0 26px rgba(236, 72, 153, 0.5));
                }
                80% {
                    transform: scale(1.04) rotate(1deg);
                    filter: drop-shadow(0 0 14px rgba(168, 85, 247, 0.75))
                        drop-shadow(0 0 22px rgba(196, 125, 255, 0.45));
                }
                88% {
                    transform: scale(1.02) rotate(-1deg);
                    filter: drop-shadow(0 0 12px rgba(139, 92, 246, 0.7)) drop-shadow(0 0 20px rgba(147, 51, 234, 0.4));
                }
            }

            .social-icon.github svg {
                animation: githubPulse 3s ease-in-out infinite;
            }

            .social-icon.linkedin svg {
                animation: blueGlow 4s ease-in-out infinite;
            }

            .social-icon.resume svg {
                animation: greenGlow 5s ease-in-out infinite;
            }

            /* Hover state enhancements */
            .social-icon:hover {
                transform: scale(1.08) translateY(-2px);
            }

            .social-icon:hover svg {
                transform: scale(1.12);
            }

            .social-icon:hover span {
                transform: scale(1.04) translateY(-1px);
            }
        </style>
        <section id="about-section" class="${classes}" aria-hidden="${!isVisible}" aria-labelledby="terminal-header">
            <div class="terminal-container text-left">
                <!-- Terminal header with static prompt and animated command -->
                <div class="terminal-header flex items-center text-green-400">
                    <span class="font-bold">guest$ </span>
                    <span id="terminal-command"></span>
                    <span id="cursor" class="ml-1 inline-block w-2 h-4 bg-green-400"></span>
                </div>

                <!-- Terminal content (paragraphs with animations) -->
                <div class="mt-4 text-gray-200">
                    <!-- First paragraph as header with different styling -->
                    <p
                        id="paragraph-0"
                        class="mb-4 opacity-0 transform translate-y-4 text-3xl font-bold glossy-text"
                        style="
                            transition: opacity 0.3s, transform 0.3s;
                            background: linear-gradient(90deg, #A389F4, #6F6EF6, #55A2F2, #7AD1F5, #A389F4);
                            background-size: 400% 100%;
                            background-clip: text;
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            animation: accentGradientFlow 4s ease-in-out infinite;
                        "
                    >
                        ${README_PARAGRAPHS[0]}
                    </p>

                    <!-- Rest of the paragraphs -->
                    ${README_PARAGRAPHS.slice(1).map(
                        (paragraph, index) => html`
                            <p
                                id="paragraph-${index + 1}"
                                class="mb-3 opacity-0 text-gray-300 transform translate-y-4 text-lg font-sans"
                                style="transition: opacity 0.3s, transform 0.3s"
                            >
                                ${paragraph}
                            </p>
                        `
                    )}
                </div>
                <!-- Social links -->
                <div
                    id="social-links"
                    class="mt-6 flex items-center justify-center flex-wrap opacity-0 transform translate-y-4"
                    style="gap: 2rem;"
                >
                    <a
                        href="https://github.com/Boden-C"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="social-icon github text-white hover:text-purple-300 transition-all duration-300 flex flex-col items-center justify-center group relative overflow-hidden rounded-lg backdrop-blur-sm"
                        style="transform-style: preserve-3d;"
                        aria-label="Visit my GitHub profile"
                    >
                        <div
                            class="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-500/10 to-pink-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        ></div>
                        <svg
                            id="github-icon"
                            class="w-10 h-10 inline transition-all duration-500 filter drop-shadow-lg relative z-10 group-hover:drop-shadow-xl"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 496 512"
                            fill="currentColor"
                            style="filter: drop-shadow(0 0 8px rgba(168, 85, 247, 0.6)) drop-shadow(0 0 16px rgba(168, 85, 247, 0.3));"
                        >
                            <path
                                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                            />
                        </svg>
                        <span
                            class="text-sm mt-1 relative z-10 group-hover:text-purple-200 transition-colors duration-300"
                            >GitHub</span
                        >
                    </a>
                    <a
                        href="https://www.linkedin.com/in/boden-chen-7088462b3/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="social-icon linkedin text-white hover:text-blue-300 transition-all duration-300 flex flex-col items-center justify-center group relative overflow-hidden rounded-lg backdrop-blur-sm"
                        style="transform-style: preserve-3d;"
                        aria-label="Visit my LinkedIn profile"
                    >
                        <div
                            class="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-500/10 to-cyan-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        ></div>
                        <svg
                            class="w-10 h-10 inline transition-all duration-500 filter drop-shadow-lg relative z-10 group-hover:drop-shadow-xl"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            fill="currentColor"
                            style="filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.6)) drop-shadow(0 0 16px rgba(59, 130, 246, 0.3));"
                        >
                            <path
                                d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                            />
                        </svg>
                        <span
                            class="text-sm mt-1 relative z-10 group-hover:text-blue-200 transition-colors duration-300"
                            >LinkedIn</span
                        >
                    </a>
                    <a
                        href="../assets/Boden_Chen_resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="social-icon resume text-white hover:text-green-300 transition-all duration-300 flex flex-col items-center justify-center group relative overflow-hidden rounded-lg backdrop-blur-sm"
                        aria-label="View my resume"
                        style="transform-style: preserve-3d;"
                    >
                        <div
                            class="absolute inset-0 bg-gradient-to-r from-green-600/0 via-emerald-500/10 to-teal-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        ></div>
                        <svg
                            class="w-10 h-10 inline transition-all duration-500 filter drop-shadow-lg relative z-10 group-hover:drop-shadow-xl"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                            fill="currentColor"
                            style="filter: drop-shadow(0 0 8px rgba(34, 197, 94, 0.6)) drop-shadow(0 0 16px rgba(34, 197, 94, 0.3));"
                        >
                            <path
                                d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z"
                            />
                        </svg>
                        <span class="text-sm mt-1">Resume</span>
                    </a>
                </div>
            </div>
        </section>
    `;
};

export const init = (): Promise<void> => {
    return new Promise((resolve) => {
        const el = document.getElementById("about-section");
        if (!el) return resolve();
        // Use setTimeout to ensure DOM is ready
        setTimeout(() => {
            const tl = animateTerminalContent();
            tl.eventCallback("onStart", () => {
                window.dispatchEvent(new Event("about:ready"));
            });
            tl.eventCallback("onComplete", () => {
                window.dispatchEvent(new Event("about:finished"));
            });
            resolve();
        }, 0);
    });
};
