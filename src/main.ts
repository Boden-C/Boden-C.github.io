import { render } from "lit-html";
import { Layout } from "./components/Layout";
import { debounce, isHorizontalLayout, announceToScreenReader } from "./utils";
import { gsap } from "gsap";
import { ModelViewer } from "./components/ModelViewer";
import { Background } from "./components/Background";

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
const initBackgroundEffect = () => {
    console.log("Initializing background effect...");
    state.background = new Background();
    state.background.init();
};

/**
 * Initialize the model viewer for the second section
 */
const initModelViewer = () => {
    if (!modelSectionElement) {
        console.error("Model section container not found");
        return;
    }

    console.log("Initializing model viewer...");

    // Prevent layout shifts during loading by pre-dimensioning the container
    if (modelSectionElement) {
        modelSectionElement.style.visibility = "hidden"; // Hide until loaded
        modelSectionElement.style.opacity = "0";
    }

    state.modelViewer = new ModelViewer("section-model");

    // Load model content and handle the returned promise
    state.modelViewer
        .loadContent()
        .then(() => {
            console.log("Model loaded successfully");
            setTimeout(() => {
                state.isLoaded = true;
                renderApp();

                // Smoothly fade in the model instead of jumping
                if (modelSectionElement) {
                    modelSectionElement.style.visibility = "visible";
                    gsap.to(modelSectionElement, {
                        opacity: 1,
                        duration: 0.5,
                        ease: "power2.inOut",
                    });
                }

                // Allow scrolling after model is loaded
                document.body.classList.remove("overflow-y-hidden");
            }, 1000); // 1 second delay
        })
        .catch((error) => {
            console.error("Failed to load the model:", error);
            // Set loaded state anyway to continue with UI display
            state.isLoaded = true;
            renderApp();

            // Show the section even if model failed
            if (modelSectionElement) {
                modelSectionElement.style.visibility = "visible";
                modelSectionElement.style.opacity = "1";
            }

            document.body.classList.remove("overflow-y-hidden");
        });
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

// Initial setup
document.body.classList.add("overflow-y-hidden");
initBackgroundEffect();
renderApp();
initModelViewer();
