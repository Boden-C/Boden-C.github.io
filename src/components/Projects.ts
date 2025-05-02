import { html } from "lit-html";
import { gsap } from "gsap";

export interface ProjectsProps {
    isVisible: boolean;
    isHorizontal: boolean;
}

/**
 * Renders the Projects section
 * @param props Component properties
 * @returns Lit-html template
 */
export const Projects = (props: ProjectsProps) => {
    const { isVisible, isHorizontal } = props;

    // Determine CSS classes based on state
    const baseClasses = "project-container absolute p-4 text-white overflow-y-auto";
    const visibilityClasses = isVisible ? "opacity-100" : "opacity-0";
    const layoutClasses = isHorizontal ? "loaded-horizontal" : "loaded-vertical";

    // Apply the appropriate classes based on state
    const classes = `${baseClasses} ${visibilityClasses} ${layoutClasses}`;

    // Sample project items - in a real app, these would likely come from props
    const projectItems = [
        { title: "Project Item 1", description: "Project description would go here" },
        // Add more projects as needed
    ];

    return html`
        <section
            id="projects-section"
            class="${classes}"
            aria-hidden="${!isVisible}"
            aria-labelledby="projects-heading"
        ></section>
    `;
};

/**
 * Initialize projects section effect
 */
export const init = (): Promise<void> => {
    return new Promise((resolve) => {
        const el = document.getElementById("projects-section");
        if (!el) return resolve();
        gsap.to(el, {
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
            onComplete: () => resolve(),
        });
    });
};
