import { html } from "lit-html";

export interface TitleProps {
    isLoaded: boolean;
    isHorizontal: boolean;
}

/**
 * Types and configuration for the title animation
 */
interface AnimationConfig {
    easing: number;
    directionChangeInterval: number;
    movementMagnitude: number;
    /** Influence factor of mouse velocity on gradient position */
    mouseInfluence: number;
}

interface AnimationState {
    randomOffsetX: number;
    randomOffsetY: number;
    targetRandomX: number;
    targetRandomY: number;
    prevX: number;
    prevY: number;
    lastMouseX: number;
    lastMouseY: number;
    velocityX: number;
    velocityY: number;
}

/**
 * Initialize the glossy text animation
 * @returns animation frame ID for cleanup
 */
export const initTitleAnimation = (): number => {
    const elements = document.querySelectorAll(".glossy-text");
    if (elements.length === 0) return 0;

    // Animation configuration
    const config: AnimationConfig = {
        easing: 0.06,
        directionChangeInterval: 150,
        movementMagnitude: 80,
        mouseInfluence: 25,
    };

    // Animation state
    const state: AnimationState = {
        randomOffsetX: 0,
        randomOffsetY: 0,
        targetRandomX: getRandomOffset(config.movementMagnitude),
        targetRandomY: getRandomOffset(config.movementMagnitude),
        prevX: 40,
        prevY: 45,
        lastMouseX: 0,
        lastMouseY: 0,
        velocityX: 0,
        velocityY: 0,
    };

    // track mouse velocity
    document.addEventListener("mousemove", (e) => {
        const dx = e.clientX - state.lastMouseX;
        const dy = e.clientY - state.lastMouseY;
        state.velocityX = (dx / window.innerWidth) * 100;
        state.velocityY = (dy / window.innerHeight) * 100;
        state.lastMouseX = e.clientX;
        state.lastMouseY = e.clientY;
    });

    setupRandomMovement(state, config);
    return startAnimationLoop(elements, state, config);
};

/**
 * Generates a random offset with given magnitude
 */
function getRandomOffset(magnitude: number): number {
    return (Math.random() - 0.5) * magnitude;
}

/**
 * Sets up periodic random movement updates
 */
function setupRandomMovement(state: AnimationState, config: AnimationConfig): void {
    const updateRandomTargets = () => {
        // Generate new random targets using magnitude from config
        state.targetRandomX = getRandomOffset(config.movementMagnitude);
        state.targetRandomY = getRandomOffset(config.movementMagnitude); // Schedule next update with varied timing
        setTimeout(updateRandomTargets, config.directionChangeInterval + Math.random() * 500);
    };

    // Start the random updates
    setTimeout(updateRandomTargets, config.directionChangeInterval);
}

/**
 * Starts the main animation loop
 */
function startAnimationLoop(elements: NodeListOf<Element>, state: AnimationState, config: AnimationConfig): number {
    let animationFrameId = 0;
    const animate = () => {
        // Smoothly move toward random target positions
        state.randomOffsetX += (state.targetRandomX - state.randomOffsetX) * config.easing;
        state.randomOffsetY += (state.targetRandomY - state.randomOffsetY) * config.easing;

        // Calculate position using only random movement for ant-like behavior
        const centerX = 40;
        const centerY = 45;
        let x = centerX + state.randomOffsetX;
        let y = centerY + state.randomOffsetY;

        // incorporate mouse velocity influence
        x += state.velocityX * config.mouseInfluence;
        y += state.velocityY * config.mouseInfluence;

        // Constrain the position to prevent it from moving outside reasonable bounds
        x = Math.max(25, Math.min(65, x));
        y = Math.max(15, Math.min(75, y)); // Apply smooth transition between frames
        x = state.prevX + (x - state.prevX) * 0.02;
        y = state.prevY + (y - state.prevY) * 0.02;

        // Store for next frame
        state.prevX = x;
        state.prevY = y;

        // Update all glossy text elements with new position
        updateElements(elements, x, y);

        // Continue animation
        animationFrameId = requestAnimationFrame(animate);
    };

    // Start the animation
    animate();
    return animationFrameId;
}

/**
 * Updates all elements with new light position
 */
function updateElements(elements: NodeListOf<Element>, x: number, y: number): void {
    elements.forEach((element) => {
        (element as HTMLElement).style.setProperty("--x", `${x}%`);
        (element as HTMLElement).style.setProperty("--y", `${y}%`);
    });
}

/**
 * Renders the animated title component
 * @param props Component properties
 * @returns Lit-html template
 */
export const Title = (props: TitleProps) => {
    const { isLoaded, isHorizontal } = props;

    // Determine CSS classes based on state
    const baseClasses = "title-container absolute w-[90%] text-center";
    const initialClasses = "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";
    const loadedClasses = isLoaded ? (isHorizontal ? "loaded-horizontal" : "loaded-vertical") : "";

    // Apply the appropriate classes based on state
    const classes = isLoaded ? `${baseClasses} ${loadedClasses}` : `${baseClasses} ${initialClasses}`;

    // Initialize title animation immediately to prevent delay
    requestAnimationFrame(() => {
        initTitleAnimation();
    });

    return html`
        <style>
            /* Wave-like morphing blob */
            @keyframes waveMorph {
                0% {
                    border-radius: 58% 42% 50% 50% / 38% 62% 38% 62%;
                    transform: translate(-50%, -50%) scaleX(1.0) scaleY(1.0);
                }
                20% {
                    border-radius: 65% 35% 45% 55% / 35% 65% 40% 60%;
                    transform: translate(calc(-50% + 1%), calc(-50% + 0.5%)) scaleX(1.04) scaleY(0.98) skewX(1deg);
                }
                40% {
                    border-radius: 55% 45% 60% 40% / 30% 70% 35% 65%;
                    transform: translate(calc(-50% - 1%), calc(-50% - 0.5%)) scaleX(1.06) scaleY(0.96) skewX(-1deg);
                }
                60% {
                    border-radius: 62% 38% 48% 52% / 34% 66% 42% 58%;
                    transform: translate(calc(-50% + 0.8%), calc(-50% + 0.3%)) scaleX(1.03) scaleY(0.985) skewX(0.5deg);
                }
                80% {
                    border-radius: 50% 50% 58% 42% / 32% 68% 34% 66%;
                    transform: translate(calc(-50% - 0.6%), calc(-50% - 0.4%)) scaleX(1.05) scaleY(0.97) skewX(-0.5deg);
                }
                100% {
                    border-radius: 58% 42% 50% 50% / 38% 62% 38% 62%;
                    transform: translate(-50%, -50%) scaleX(1.0) scaleY(1.0);
                }
            }

            @keyframes accentGradientShift {
                0%,
                100% {
                    background-position: 50% 50%, 0% 50%;
                }
                50% {
                    background-position: 50% 50%, 100% 50%;
                }
            }

            #titleContainer .title-glow {
                position: absolute;
                left: 50%;
                top: 50%;
                /* 50% wider, 50% flatter */
                width: clamp(480px, 90vw, 1650px);
                height: clamp(80px, 12vw, 190px);
                pointer-events: none;
                z-index: 0;
                /* Animated accent gradient + soft radial highlight that follows --x/--y */
                background:
                    radial-gradient(40% 80% at var(--x, 50%) var(--y, 50%),
                        rgba(163, 137, 244, 0.25) 0%,
                        rgba(111, 110, 246, 0.18) 25%,
                        rgba(85, 162, 242, 0.12) 45%,
                        rgba(122, 209, 245, 0.0) 65%)",
                    linear-gradient(90deg, #A389F4, #6F6EF6, #55A2F2, #7AD1F5, #A389F4);
                background-size: 120% 120%, 300% 100%;
                background-position: 50% 50%, 0% 50%;
                filter: blur(72px) saturate(1.2);
                opacity: 0.78;
                will-change: transform, border-radius, background-position, opacity;
                animation: waveMorph 18s ease-in-out infinite, accentGradientShift 7s ease-in-out infinite;
            }

            #titleContainer .title-glow::after {
                content: "";
                position: absolute;
                inset: -10%;
                background: radial-gradient(120% 100% at 50% 50%,
                    rgba(163, 137, 244, 0.14) 0%,
                    rgba(111, 110, 246, 0.12) 45%,
                    rgba(85, 162, 242, 0.10) 70%,
                    rgba(122, 209, 245, 0.0) 85%);
                filter: blur(90px);
                opacity: 0.55;
                border-radius: inherit;
                animation: waveMorph 22s ease-in-out infinite reverse;
            }
        </style>
        <div id="titleContainer" class="${classes}" aria-label="Portfolio title">
            <div class="title-glow" aria-hidden="true"></div>
            <h1 class="title-text inline-block font-bold leading-none whitespace-nowrap glossy-text relative z-10">
                BODEN CHEN
            </h1>
        </div>
    `;
};
