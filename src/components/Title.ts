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

    // Determine CSS classes based on state
    const baseClasses = "title-container absolute w-[90%] text-center";
    const initialClasses = "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";
    const loadedClasses = isLoaded ? (isHorizontal ? "loaded-horizontal" : "loaded-vertical") : "";

    // Apply the appropriate classes based on state
    const classes = isLoaded ? `${baseClasses} ${loadedClasses}` : `${baseClasses} ${initialClasses}`;

    // Return the lit-html template
    return html`
        <div id="titleContainer" class="${classes}" aria-label="Portfolio title">
            <h1 class="title-text inline-block font-bold leading-none whitespace-nowrap glossy-text">BODEN CHEN</h1>
        </div>
    `;
};
