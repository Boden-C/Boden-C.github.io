import { render } from "lit-html";
import { Layout } from "./components/Layout";
import { debounce, isHorizontalLayout, announceToScreenReader } from "./utils";
import { gsap } from "gsap";
import { Background } from "./components/Background";
import { init as initProjects } from "./components/Projects";

// --- Application State ---
interface AppState {
    isLoaded: boolean;
    isHorizontal: boolean;
    areExtraDivsVisible: boolean;
    mouseX: number;
    mouseY: number;
    currentPath: string;
    background?: Background;
}

const state: AppState = {
    isLoaded: false,
    isHorizontal: isHorizontalLayout(),
    areExtraDivsVisible: false,
    mouseX: 0,
    mouseY: 0,
    currentPath: window.location.pathname,
};

// --- Helper to fetch HTML content ---
const fetchHtmlContent = async (url: string): Promise<string | null> => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error(`Failed to fetch HTML content from ${url}: ${response.statusText}`);
            return null;
        }
        return await response.text();
    } catch (error) {
        console.error(`Error fetching HTML content from ${url}:`, error);
        return null;
    }
};

// --- DOM References ---
const appElement = document.getElementById("app") as HTMLElement;

// --- Rendering ---
const renderApp = async (): Promise<void> => {
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
        showContentSections().catch((err) => console.error("Error showing content sections:", err));
    }
};

/**
 * Show the content sections (About and Projects)
 */
const showContentSections = async (): Promise<void> => {
    if (!state.areExtraDivsVisible) {
        console.log("Showing content sections...");
        state.areExtraDivsVisible = true;
        await renderApp();

        // Announce to screen readers that content is now visible
        announceToScreenReader("Additional content is now available.");

        try {
            await initProjects();
        } catch (e) {
            console.error("Failed to init Projects animations", e);
        }
    }
};

/**
 * Update layout based on screen orientation
 */
const updateLayout = async (): Promise<void> => {
    console.log("Updating layout...");

    const wasHorizontal = state.isHorizontal;
    state.isHorizontal = isHorizontalLayout();

    // Only re-render if orientation actually changed
    if (wasHorizontal !== state.isHorizontal) {
        await renderApp();
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
    await renderApp();

    // Removed model loading
    try {
        await initBackgroundEffect();
    } catch (err) {
        console.error(err);
    }

    state.isLoaded = true;
    await renderApp();

    // TODO: Add back in the model
};

// Start
orchestrateInitialLoad();
