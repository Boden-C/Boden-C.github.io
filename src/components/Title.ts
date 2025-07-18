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
    if (elements.length === 0) return 0; // Animation configuration
    const config: AnimationConfig = {
        easing: 0.04,
        directionChangeInterval: 200,
        movementMagnitude: 80,
        mouseInfluence: 30,
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
    // Use requestAnimationFrame to ensure it runs as soon as possible
    requestAnimationFrame(() => {
        initTitleAnimation();
    });

    // Return the lit-html template
    return html`
        <div id="titleContainer" class="${classes}" aria-label="Portfolio title">
            <h1 class="title-text inline-block font-bold leading-none whitespace-nowrap glossy-text">BODEN CHEN</h1>
        </div>
    `;
};
