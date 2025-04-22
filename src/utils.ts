/**
 * Determines if the current viewport is in landscape orientation
 */
export const isHorizontalLayout = (): boolean => {
    return window.matchMedia("(orientation: landscape)").matches;
};

/**
 * Debounces a function call
 * @param func The function to debounce
 * @param wait The time to wait in milliseconds
 */
export const debounce = <T extends (...args: any[]) => any>(
    func: T,
    wait: number
): ((...args: Parameters<T>) => void) => {
    let timeout: number | undefined;

    return (...args: Parameters<T>): void => {
        const later = () => {
            timeout = undefined;
            func(...args);
        };

        clearTimeout(timeout);
        timeout = window.setTimeout(later, wait);
    };
};

/**
 * Adds appropriate ARIA attributes to make elements accessible
 * @param element The element to make accessible
 * @param isHidden Whether the element should be hidden from screen readers
 * @param label Optional ARIA label
 */
export const setAccessibility = (element: HTMLElement, isHidden: boolean = false, label?: string): void => {
    element.setAttribute("aria-hidden", isHidden ? "true" : "false");

    if (label) {
        element.setAttribute("aria-label", label);
    }

    // If element becomes visible but isn't focusable, make it so
    if (
        !isHidden &&
        !element.getAttribute("tabindex") &&
        !["a", "button", "input", "select", "textarea"].includes(element.tagName.toLowerCase())
    ) {
        element.setAttribute("tabindex", "0");
    }
};

/**
 * Announces a message to screen readers using ARIA live regions
 * @param message The message to announce
 */
export const announceToScreenReader = (message: string): void => {
    const announcer = document.getElementById("screen-reader-announcer");

    if (announcer) {
        announcer.textContent = message;
        return;
    }

    // Create announcer if it doesn't exist
    const newAnnouncer = document.createElement("div");
    newAnnouncer.id = "screen-reader-announcer";
    newAnnouncer.classList.add("sr-only");
    newAnnouncer.setAttribute("aria-live", "polite");
    newAnnouncer.setAttribute("aria-atomic", "true");
    newAnnouncer.textContent = message;

    document.body.appendChild(newAnnouncer);
};

/**
 * Animates the glossy gradient text effect
 * Smoothly moves the radial gradient position with randomness
 */
export const animateGlossyText = (): number => {
    let animationFrameId: number = 0;
    let elements = document.querySelectorAll(".glossy-text");

    if (elements.length === 0) {
        return 0;
    }

    // Initialize animation parameters
    const speed = 0.01; // Reduced speed (was 0.02)
    let angle = 0;
    let radius = 15; // Base radius (was 20)

    // Add randomness factors
    let randomOffsetX = 0;
    let randomOffsetY = 0;
    let targetRandomX = (Math.random() - 0.5) * 10;
    let targetRandomY = (Math.random() - 0.5) * 10;

    // Time between random direction changes (in ms)
    const directionChangeInterval = 1000;

    // Set new random targets periodically
    const updateRandomTargets = () => {
        targetRandomX = (Math.random() - 0.5) * 15;
        targetRandomY = (Math.random() - 0.5) * 15;

        // Also randomly adjust radius slightly
        radius = 10 + Math.random() * 8; // Random between 12-20

        setTimeout(updateRandomTargets, directionChangeInterval + Math.random() * 2000);
    };

    // Start random direction changes
    setTimeout(updateRandomTargets, directionChangeInterval);

    const animate = () => {
        // Smoothly interpolate to target random values
        randomOffsetX += (targetRandomX - randomOffsetX) * 0.01;
        randomOffsetY += (targetRandomY - randomOffsetY) * 0.01;

        // Calculate new position using circular motion plus randomness
        // Shifted base position from 50% to 45% to move left
        const x = 45 + Math.sin(angle) * radius + randomOffsetX - 10;
        const y = 50 + Math.cos(angle) * radius + randomOffsetY;

        // Update all glossy text elements
        elements.forEach((element) => {
            (element as HTMLElement).style.setProperty("--x", `${x}%`);
            (element as HTMLElement).style.setProperty("--y", `${y}%`);
        });

        // Increment angle for next frame
        angle += speed;

        // Continue animation
        animationFrameId = requestAnimationFrame(animate);
    };

    // Start the animation
    animate();

    return animationFrameId;
};
