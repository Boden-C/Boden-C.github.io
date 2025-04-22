import { html } from "lit-html";
import { Title } from "./Title";
import { About } from "./About";
import { Projects } from "./Projects";

export interface LayoutProps {
    isLoaded: boolean;
    isHorizontal: boolean;
    areExtraDivsVisible: boolean;
}

/**
 * Main layout component that orchestrates the entire page
 * @param props Component properties
 * @returns Lit-html template
 */
export const Layout = (props: LayoutProps) => {
    const { isLoaded, isHorizontal, areExtraDivsVisible } = props;

    return html`
        <div class="h-screen w-screen relative overflow-hidden">
            <!-- Screen reader announcer for accessibility -->
            <div id="screen-reader-announcer" class="sr-only" aria-live="polite" aria-atomic="true"></div>

            <!-- Main components -->
            ${Title({ isLoaded, isHorizontal })} ${About({ isVisible: areExtraDivsVisible, isHorizontal })}
            ${Projects({ isVisible: areExtraDivsVisible, isHorizontal })}
        </div>
    `;
};
