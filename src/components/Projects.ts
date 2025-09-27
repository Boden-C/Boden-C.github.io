import { html } from "lit-html";
import { gsap } from "gsap";
import { SlideshowController } from "./projects/SlideshowController";
import { DiffusionProjectSlide } from "./projects/DiffusionProject";
import { GraphProjectSlide } from "./projects/GraphProject";
import type { Slide } from "./projects/Slide";

export interface ProjectsProps {
    isVisible: boolean;
    isHorizontal: boolean;
}

// Idempotent init guard
let started = false;
let controller: SlideshowController | null = null;

/**
 * Renders the Projects section as a slideshow shell with a mount point for slides
 */
export const Projects = (props: ProjectsProps) => {
    const { isVisible, isHorizontal } = props;

    const baseClasses = "project-container absolute p-4 text-white overflow-y-auto";
    const visibilityClasses = isVisible ? "opacity-100" : "opacity-0";
    const layoutClasses = isHorizontal ? "loaded-horizontal" : "loaded-vertical";
    const classes = `${baseClasses} ${visibilityClasses} ${layoutClasses}`;

    return html`
        <section
            id="projects-section"
            class="${classes}"
            aria-hidden="${!isVisible}"
            aria-labelledby="projects-heading"
        >
            <h2 id="projects-heading" class="sr-only">Projects</h2>
            <div class="projects-inner w-full h-full">
                <div
                    class="slideshow-shell mx-auto flex flex-col items-center justify-center"
                    style="max-width: 540px; max-height: 540px;"
                    role="group"
                    aria-roledescription="carousel"
                    aria-label="Projects slideshow"
                >
                    <div id="project-slide-root" class="w-full" aria-live="polite"></div>
                </div>
            </div>
        </section>
    `;
};

/**
 * Initialize projects slideshow (idempotent, no data-anim-pending or global style injection)
 */
export const init = (): Promise<void> => {
    return new Promise((resolve) => {
        const el = document.getElementById("projects-section");
        if (!el) return resolve();
        if (started) return resolve();
        started = true;
        console.log("[Projects] init called");

        const reduce =
            typeof window !== "undefined" &&
            window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        const slides: Slide[] = [GraphProjectSlide, DiffusionProjectSlide];

        controller = new SlideshowController({
            el,
            mountSelector: "#project-slide-root",
            slides,
            animated: !reduce,
            fadeFirstSlide: true,
            progression: {
                mode: "cycle",
                defaultAdvanceAfterCycles: 2,
                minVisibleMs: 2500,
                perSlide: {
                    graph: {
                        mode: "cycle",
                        advanceAfterCycles: 1,
                        minVisibleMs: 4800,
                    },
                    diffusion: {
                        mode: "cycle",
                        advanceAfterCycles: 1,
                        minVisibleMs: 2000,
                    },
                },
            },
        });

        const run = async () => {
            if (reduce) {
                console.log("[Projects] Reduced motion detected, skipping animations");
                gsap.set(el, { opacity: 1, clearProps: "transform" });
                await controller!.start(0);
                return resolve();
            }
            console.log("[Projects] Running entrance animation");
            gsap.set(el, { opacity: 0, y: 16 });
            await new Promise((r) =>
                gsap.to(el, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out", onComplete: r })
            );
            await controller!.start(0);
            resolve();
        };

        // Start immediately; external orchestrator should call this after render
        run();
    });
};

export const goToSlide = (index: number) => {
    console.log(`[Projects] goToSlide called for index: ${index}`);
    if (controller) {
        for (let i = 0; i < index; i++) controller.next();
    }
};
