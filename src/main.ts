import { render } from "lit-html";
import { Layout } from "./components/Layout";
import { debounce, isHorizontalLayout, announceToScreenReader } from "./utils";
import { gsap } from "gsap";
import { ModelViewer } from "./components/ModelViewer";
import { Background } from "./components/Background";
import { init as initProjects } from "./components/Projects";

// --- Application State ---
interface AppState {
    isLoaded: boolean;
    isHorizontal: boolean;
    areExtraDivsVisible: boolean;
    mouseX: number;
    mouseY: number;
    background?: Background;
    modelViewer?: ModelViewer;
}

const state: AppState = {
    isLoaded: false,
    isHorizontal: isHorizontalLayout(),
    areExtraDivsVisible: false,
    mouseX: 0,
    mouseY: 0,
};

// --- DOM References ---
const appElement = document.getElementById("app") as HTMLElement;
const modelSectionElement = document.getElementById("section-model") as HTMLElement;

// --- Rendering ---
const renderApp = () => {
    if (!appElement) {
        console.error("App container not found");
        return;
    }

    render(Layout(state), appElement);
};

// --- Event Handlers ---

/**
 * Handle title transition end event
 */
const handleTitleTransitionEnd = (event: TransitionEvent) => {
    // Only respond to the transform property ending after content is loaded
    if (event.propertyName === "transform" && state.isLoaded && !state.areExtraDivsVisible) {
        console.log("Title transition finished.");
        showContentSections();
    }
};

/**
 * Show the content sections (About and Projects)
 */
const showContentSections = () => {
    if (!state.areExtraDivsVisible) {
        console.log("Showing content sections...");
        state.areExtraDivsVisible = true;
        renderApp();

        // Announce to screen readers that content is now visible
        announceToScreenReader("Additional content is now available.");
    }
};

/**
 * Update layout based on screen orientation
 */
const updateLayout = () => {
    console.log("Updating layout...");

    const wasHorizontal = state.isHorizontal;
    state.isHorizontal = isHorizontalLayout();

    // Only re-render if orientation actually changed
    if (wasHorizontal !== state.isHorizontal) {
        renderApp();
        announceToScreenReader(`Layout changed to ${state.isHorizontal ? "horizontal" : "vertical"} mode.`);
    }
};

/**
 * Initialize the background effect
 */
const initBackgroundEffect = (): Promise<void> => {
    console.log("Initializing background effect...");
    state.background = new Background();
    return state.background.init();
};

/**
 * Initialize and start loading the model in the background
 */
const initModelLoader = (): Promise<void> => {
    if (!modelSectionElement) {
        console.error("Model section container not found");
        return Promise.resolve();
    }

    console.log("Starting model loading in the background...");

    // Prevent layout shifts during loading by pre-dimensioning the container
    if (modelSectionElement) {
        modelSectionElement.style.visibility = "hidden"; // Hide until loaded
        modelSectionElement.style.opacity = "0";
    }

    state.modelViewer = new ModelViewer("section-model");
    return state.modelViewer.load(); // Only load the model, don't render yet
};

/**
 * Render the model (assumes it has been loaded or is loading)
 */
const renderModel = (): Promise<void> => {
    if (!state.modelViewer) {
        console.error("Model viewer not initialized");
        return Promise.resolve();
    }

    console.log("Rendering model...");
    return state.modelViewer.render();
};

// --- Event Listeners ---
window.addEventListener("resize", debounce(updateLayout, 100));
window.addEventListener("orientationchange", updateLayout);

// Listen for title transition end event using event delegation
document.addEventListener("transitionend", (e) => {
    const target = e.target as HTMLElement;
    if (target.id === "titleContainer") {
        handleTitleTransitionEnd(e as TransitionEvent);
    }
});

// Store initial scroll position to prevent unwanted scrolling
let initialScrollPos = window.scrollY;

// Prevent scroll position changes during loading
window.addEventListener("scroll", () => {
    if (!state.isLoaded) {
        window.scrollTo(0, initialScrollPos);
    }
});

// Prevent scroll jumps during page load
document.documentElement.style.scrollBehavior = "auto";
window.addEventListener("load", function () {
    // Force scroll to top on initial load
    window.scrollTo(0, 0);
    // Add loaded class to html element
    document.documentElement.classList.add("loaded");
    // Restore smooth scrolling after load
    setTimeout(() => {
        document.documentElement.style.scrollBehavior = "smooth";
    }, 100);
});

// Helpers
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

// Orchestrate load sequence
const orchestrateInitialLoad = async () => {
    document.body.classList.add("overflow-y-hidden");
    renderApp();

    // Start loading the model in the background right away
    const modelLoadPromise = initModelLoader();

    try {
        // Background and projects with min 1s, max 4s
        await Promise.all([
            initBackgroundEffect(),
            Promise.race([
                Promise.all([initProjects(), delay(1000)]),
                delay(4000).then(() => {
                    throw new Error("Projects init timed out");
                }),
            ]),
        ]);
    } catch (err) {
        console.error(err);
    }

    state.isLoaded = true;
    renderApp();
    await delay(4500);

    try {
        // Render the model with timeout (which should be mostly loaded by now)
        await Promise.race([
            renderModel(),
            delay(10000).then(() => {
                throw new Error("Model render timed out");
            }),
        ]);
    } catch (err) {
        console.error(err);
    }

    // Fade in model section
    if (modelSectionElement) {
        modelSectionElement.style.visibility = "visible";
        gsap.to(modelSectionElement, { opacity: 1, duration: 0.5, ease: "power2.inOut" });
    }

    document.body.classList.remove("overflow-y-hidden");
};

// Start
orchestrateInitialLoad();
