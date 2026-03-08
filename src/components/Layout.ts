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
    const shellClasses = isHorizontal ? "app-shell app-shell-horizontal" : "app-shell app-shell-vertical";
    const titleStageClasses = isHorizontal ? "title-stage title-stage-horizontal" : "title-stage title-stage-vertical";

    return html`
        <main class="${shellClasses}" aria-label="Portfolio content">
            <!-- Screen reader announcer for accessibility -->
            <div id="screen-reader-announcer" class="sr-only" aria-live="polite" aria-atomic="true"></div>

            <!-- Main components -->
            <section class="${titleStageClasses}" aria-labelledby="portfolio-title">
                ${Title({ isLoaded, isHorizontal })}
            </section>
            ${About({ isVisible: areExtraDivsVisible, isHorizontal })}
            ${Projects({ isVisible: areExtraDivsVisible, isHorizontal })}
        </main>
    `;
};
