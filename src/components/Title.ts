import { html } from "lit-html";

export interface TitleProps {
    isLoaded: boolean;
    isHorizontal: boolean;
}

/**
 * Types and configuration for the title animation
 */
interface AnimationConfig {
    speed: number;
    horizontalRadius: number;
    verticalRadius: number;
    easing: number;
    directionChangeInterval: number;
}

interface AnimationState {
    angle: number;
    randomOffsetX: number;
    randomOffsetY: number;
    targetRandomX: number;
    targetRandomY: number;
    prevX: number;
    prevY: number;
}

/**
 * Initialize the glossy text animation
 * @returns animation frame ID for cleanup
 */
export const initTitleAnimation = (): number => {
    // Main animation function that gets executed
    const elements = document.querySelectorAll(".glossy-text");
    if (elements.length === 0) return 0;

    // Animation configuration
    const config: AnimationConfig = {
        speed: 0.02,
        horizontalRadius: 10, // Smaller horizontal radius for the oval
        verticalRadius: 15, // Larger vertical radius for the oval
        easing: 0.01, // Smooth transition factor
        directionChangeInterval: 1500, // Slower direction changes
    };

    // Animation state
    const state: AnimationState = {
        angle: 0,
        randomOffsetX: 0,
        randomOffsetY: 0,
        targetRandomX: getRandomOffset(5) - 20, // Center-biased
        targetRandomY: getRandomOffset(5), // Center-biased
        prevX: 50, // Start at center X
        prevY: 50, // Start at center Y
    };

    // Set up the random movement updates
    setupRandomMovement(state, config);

    // Start the animation loop
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
        // Subtle random movements
        state.targetRandomX = getRandomOffset(8);
        state.targetRandomY = getRandomOffset(8);

        // Schedule next update with varied timing
        setTimeout(updateRandomTargets, config.directionChangeInterval + Math.random() * 1000);
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

        // Calculate position using oval path (different radii for horizontal/vertical)
        const centerX = 40; // Changed from 50 to 45 to shift ~20px to the left
        const centerY = 45;

        let x = centerX + Math.sin(state.angle) * config.horizontalRadius + state.randomOffsetX;
        let y = centerY + Math.cos(state.angle) * config.verticalRadius + state.randomOffsetY;

        // Constrain the position to prevent it from moving outside reasonable bounds
        x = Math.max(35, Math.min(55, x)); // Adjusted bounds to match new center
        y = Math.max(30, Math.min(60, y));

        // Apply smooth transition between frames
        x = state.prevX + (x - state.prevX) * 0.3;
        y = state.prevY + (y - state.prevY) * 0.3;

        // Store for next frame
        state.prevX = x;
        state.prevY = y;

        // Update all glossy text elements with new position
        updateElements(elements, x, y);

        // Increment angle for next frame - slow movement
        state.angle += config.speed;

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
