import { html } from "lit-html";

export interface TitleProps {
    isLoaded: boolean;
    isHorizontal: boolean;
}

/**
 * Renders the animated title component
 * @param props Component properties
 * @returns Lit-html template
 */
export const Title = (props: TitleProps) => {
    const { isLoaded, isHorizontal } = props;
    const titleText = "BODEN CHEN";

    // Determine CSS classes based on state
    const baseClasses = "title-container absolute w-[90%] text-center";
    const initialClasses = isHorizontal
        ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        : "vertical-initial";
    const loadedClasses = isLoaded
        ? isHorizontal
            ? "loaded-horizontal"
            : "loaded-vertical"
        : "";

    // Apply the appropriate classes based on state
    const classes = isLoaded
        ? `${baseClasses} ${loadedClasses}`
        : `${baseClasses} ${initialClasses}`;

    // Split title into characters for per-letter intro animation
    const characters = titleText.split("").map((char, index) => {
        const displayChar = char === " " ? html`&nbsp;` : char;
        return html`<span
            class="char-wrapper"
            style="--char-index: ${index};"
            aria-hidden="true"
        >
            <span class="char">${displayChar}</span>
        </span>`;
    });

    return html`
        <style>
            /* Simple, minimal per-letter intro: fade + rise */
            .title-text {
                display: inline-flex;
                gap: 0.02em;
                color: rgba(255, 255, 255, 0.5);
            }
            .char-wrapper {
                opacity: 0;
                transform: translateY(40%);
                will-change: opacity, transform;
            }
            .char-wrapper {
                animation: slideIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)
                    forwards;
                animation-delay: calc(var(--char-index) * 50ms);
            }
            .char {
                display: inline-block;
            }

            @keyframes slideIn {
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            /* Respect reduced motion */
            @media (prefers-reduced-motion: reduce) {
                .char-wrapper {
                    opacity: 1 !important;
                    transform: none !important;
                    animation: none !important;
                }
            }
        </style>
        <div
            id="titleContainer"
            class="${classes}"
            aria-label="Portfolio title"
        >
            <h1
                class="title-text font-bold leading-none whitespace-nowrap relative z-10"
                aria-label="${titleText}"
            >
                ${characters}
            </h1>
        </div>
    `;
};
