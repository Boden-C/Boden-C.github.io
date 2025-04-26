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