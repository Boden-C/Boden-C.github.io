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

    return html`
        <section
            id="projects-section"
            class="${classes}"
            aria-hidden="${!isVisible}"
            aria-labelledby="projects-heading"
            data-anim-pending
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
                    <!-- Slide 1 -->
                    <article class="slide w-full" aria-labelledby="slide-1-title" tabindex="0">
                        <h3
                            id="slide-1-title"
                            data-animate="project-title"
                            class="text-white text-lg md:text-2xl font-bold mb-3"
                        >
                            Current AI Research - Diffusion LLM
                        </h3>
                        <div
                            class="title-underline"
                            aria-hidden="true"
                            style="height:2px;width:100%;background:linear-gradient(90deg,#A389F4,#6F6EF6,#55A2F2,#7AD1F5);border-radius:999px;transform-origin:left;transform:scaleX(0);opacity:0.3;"
                        ></div>
                        <p
                            data-animate="project-desc"
                            class="mt-3 md:mt-2 text-sm md:text-base text-gray-400 leading-relaxed font-sans"
                        >
                            A new type of text generation that using a denoising approach to generate multiple tokens in
                            parallel. The model can now "see" the whole picture at once at many times the speed!
                        </p>
                    </article>

                    <!-- Animated comparison card -->
                    <div
                        class="glass-card mt-4 w-full flex flex-col justify-center items-start p-4 space-y-4 overflow-hidden"
                        style="height: 400px;"
                        id="prediction-demo"
                        aria-live="polite"
                        aria-label="Text generation demonstration"
                    >
                        <div
                            class="w-full text-xs uppercase tracking-wide text-gray-400 font-semibold"
                            id="prediction-phase-label"
                        >
                            Autoregressive Prediction
                        </div>
                        <div
                            class="w-full font-mono text-3xl md:text-3xl leading-relaxed min-h-[120px]"
                            id="prediction-lines"
                        >
                            <span id="seq1-line" class="block"></span>
                            <span id="seq2-line" class="block hidden"></span>
                        </div>
                        <div
                            class="w-full text-2xl md:text-2xl text-gray-500 font-mono font-semibold"
                            id="turn-counter"
                        >
                            Turns: <span id="turn-value">0</span>
                        </div>
                        <div class="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                        <p class="text-[10px] leading-snug text-gray-500 font-sans" id="prediction-hint"></p>
                    </div>
                </div>
            </div>
        </section>
    `;
};

/**
 * Initialize projects section effect
 */
export const init = (): Promise<void> => {
    return new Promise((resolve) => {
        const el = document.getElementById("projects-section");
        if (!el) return resolve();

        // Inject style to disable CSS transitions and hide while pending
        if (!document.getElementById("projects-no-css-transition")) {
            const style = document.createElement("style");
            style.id = "projects-no-css-transition";
            style.textContent = `
.project-container.loaded-horizontal,
.project-container.loaded-vertical { transition: none !important; }
.project-container[data-anim-pending] { opacity:0 !important; }
`;
            document.head.appendChild(style);
        }

        const reduce =
            typeof window !== "undefined" &&
            window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        const run = () => {
            if (reduce) {
                // Reduced motion: show immediately
                el.removeAttribute("data-anim-pending");
                gsap.set(el, { opacity: 1, clearProps: "transform" });
                const underline = el.querySelector(".title-underline") as HTMLElement | null;
                const desc = el.querySelector('[data-animate="project-desc"]') as HTMLElement | null;
                const card = el.querySelector(".glass-card") as HTMLElement | null;
                if (underline) gsap.set(underline, { scaleX: 1, opacity: 0.5 });
                if (desc) gsap.set(desc, { opacity: 1, y: 0, filter: "none" });
                if (card) gsap.set(card, { opacity: 1, y: 0, scale: 1 });
                // Still start the looping demo without animations for accessibility
                startWordAnimation(false);
                return resolve();
            }

            // Initial GSAP state (still hidden via data-anim-pending)
            gsap.set(el, { opacity: 0, y: 24, willChange: "transform, opacity" });
            // Now allow it to animate in
            el.removeAttribute("data-anim-pending");

            const tl = gsap.timeline({ defaults: { ease: "power3.out" }, onComplete: () => resolve() });
            const title = el.querySelector('[data-animate="project-title"]') as HTMLElement | null;
            const desc = el.querySelector('[data-animate="project-desc"]') as HTMLElement | null;
            const underline = el.querySelector(".title-underline") as HTMLElement | null;
            const card = el.querySelector(".glass-card") as HTMLElement | null;

            // Prepare initial states for staggered sequence
            if (desc) gsap.set(desc, { y: 12, opacity: 0, filter: "blur(6px)" });
            if (card) gsap.set(card, { y: 14, opacity: 0, scale: 0.98 });

            // Section reveal
            tl.to(el, { opacity: 1, y: 0, duration: 0.6 });

            // Title per-letter 3D reveal
            if (title) {
                const original = (title.textContent || "").replace(/\s+/g, " ").trim();
                title.setAttribute("aria-label", original);

                const container = document.createElement("span");
                container.setAttribute("aria-hidden", "true");
                container.style.display = "inline-block";

                const letters: HTMLElement[] = [];
                for (const ch of original) {
                    const span = document.createElement("span");
                    span.className = "letter";
                    span.style.display = "inline-block";
                    span.textContent = ch === " " ? "\u00A0" : ch;
                    container.appendChild(span);
                    letters.push(span);
                }
                title.textContent = "";
                title.appendChild(container);

                gsap.set(letters, {
                    yPercent: 120,
                    rotateX: 80,
                    opacity: 0,
                    transformOrigin: "0% 100%",
                    willChange: "transform, opacity",
                    perspective: 400,
                });

                // Play title after section reveal
                tl.to(
                    letters,
                    {
                        yPercent: 0,
                        rotateX: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.015,
                        ease: "expo.out",
                    },
                    ">"
                );

                // Idle glow
                gsap.to(title, {
                    textShadow: "0 0 12px rgba(122,209,245,0.25)",
                    duration: 2,
                    yoyo: true,
                    repeat: -1,
                    ease: "sine.inOut",
                });
            }

            // Underline after title completes
            if (underline) {
                tl.to(underline, { scaleX: 1, opacity: 0.8, duration: 0.7, ease: "expo.out" }, ">");
                gsap.to(underline, { opacity: 0.5, duration: 3, yoyo: true, repeat: -1, ease: "sine.inOut" });
            }

            // Description after underline (staggered)
            if (desc) {
                tl.to(desc, { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.6 }, "+=0.15");
            }

            // Card after description (staggered)
            if (card) {
                tl.to(card, { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }, "+=0.15");
            }

            // Start looping word animation after card is in view
            tl.call(() => startWordAnimation(true));
        };

        // Word animation logic
        const startWordAnimation = (animated: boolean) => {
            const demo = el.querySelector("#prediction-demo");
            if (!demo || (demo as any)._started) return; // guard
            (demo as any)._started = true;

            const seq1El = demo.querySelector("#seq1-line") as HTMLElement;
            const seq2El = demo.querySelector("#seq2-line") as HTMLElement;
            const phaseEl = demo.querySelector("#prediction-phase-label") as HTMLElement;
            const turnValEl = demo.querySelector("#turn-value") as HTMLElement;
            const hintEl = demo.querySelector("#prediction-hint") as HTMLElement;

            const seq1Words = [
                "Using",
                "next",
                "word",
                "prediction,",
                "AI",
                "will",
                "guess",
                "this",
                "sentence",
                "will",
                "have",
                "25",
                "words.",
            ];
            const seq2FinalStatic = [
                "Using",
                "diffusion,",
                "this",
                "is",
                "much",
                "faster",
                "and",
                "it",
                "knows",
                "this",
                "will",
                "have",
                "15",
                "words.", // final punctuation stays attached
            ];
            const placeholderCount = seq2FinalStatic.length; // match diffusion length

            const randomWords = [
                "token",
                "model",
                "graph",
                "latent",
                "vector",
                "noise",
                "mask",
                "sample",
                "estimate",
                "denoise",
                "prob",
                "chain",
                "prior",
                "delta",
                "score",
            ]; // pool

            const clearChildren = (el: HTMLElement) => {
                while (el.firstChild) el.removeChild(el.firstChild);
            };

            let cycle = 0;

            const runSeq1 = () => {
                phaseEl.textContent = "Autoregressive Prediction";
                hintEl.textContent = "";
                seq1El.classList.remove("hidden");
                seq2El.classList.add("hidden");
                clearChildren(seq1El);
                turnValEl.textContent = "0";
                let turn = 0;
                return new Promise<void>((res) => {
                    const addWord = (index: number) => {
                        if (index >= seq1Words.length) {
                            // Mark incorrect count (25)
                            const spans = Array.from(seq1El.querySelectorAll(".word")) as HTMLElement[];
                            const incorrect = spans.find((s) => s.dataset.w === "25");
                            if (incorrect) {
                                incorrect.classList.add("text-red-400", "line-through");
                                incorrect.setAttribute("aria-label", "25 (incorrect)");
                                if (animated) {
                                    gsap.fromTo(
                                        incorrect,
                                        { scale: 1.1 },
                                        { scale: 1, duration: 0.4, ease: "back.out(3)" }
                                    );
                                }
                            }
                            setTimeout(() => res(), 1800);
                            return;
                        }
                        const word = seq1Words[index];
                        const span = document.createElement("span");
                        span.textContent = word;
                        span.className = "word inline-block opacity-0";
                        span.dataset.w = word.replace(/[^0-9A-Za-z?]/g, "");
                        seq1El.appendChild(span);
                        if (index < seq1Words.length - 1) {
                            seq1El.appendChild(document.createTextNode(" "));
                        }
                        turn++;
                        turnValEl.textContent = String(turn);
                        if (animated) {
                            gsap.to(span, {
                                opacity: 1,
                                y: 0,
                                duration: 0.25,
                                ease: "power2.out",
                                onStart: () => {
                                    gsap.from(span, { y: 10, filter: "blur(4px)", duration: 0.25, ease: "power2.out" });
                                },
                            });
                        } else {
                            span.style.opacity = "1";
                        }
                        setTimeout(() => addWord(index + 1), animated ? 140 : 0);
                    };
                    addWord(0);
                });
            };

            const runSeq2 = () => {
                phaseEl.textContent = "Diffusion Multi-Token Refinement";
                hintEl.textContent = "";
                seq1El.classList.add("hidden");
                seq2El.classList.remove("hidden");
                clearChildren(seq2El);
                turnValEl.textContent = "0";

                // Build initial placeholders
                const placeholders: HTMLElement[] = [];
                for (let i = 0; i < placeholderCount; i++) {
                    const span = document.createElement("span");
                    span.textContent = "???";
                    span.className = "ph inline-block opacity-60 text-gray-500";
                    placeholders.push(span);
                    seq2El.appendChild(span);
                    if (i < placeholderCount - 1) {
                        seq2El.appendChild(document.createTextNode(" "));
                    }
                }

                if (animated) {
                    gsap.from(placeholders, { opacity: 0, y: 8, stagger: 0.01, duration: 0.35, ease: "power2.out" });
                } else {
                    placeholders.forEach((p) => (p.style.opacity = "1"));
                }

                // Random reveal strategy ("15" only on final turn)
                const revealed = new Set<number>();
                let turn = 0;
                const totalTurns = 5;
                const totalWords = seq2FinalStatic.length;
                const countIndex = seq2FinalStatic.findIndex((w) => w === "15");

                const revealRandomIndices = (k: number, allowCount: boolean) => {
                    const pool: number[] = [];
                    for (let i = 0; i < totalWords; i++) {
                        if (revealed.has(i)) continue;
                        if (!allowCount && i === countIndex) continue; // defer count token
                        pool.push(i);
                    }
                    for (let i = 0; i < k && pool.length; i++) {
                        const idx = (Math.random() * pool.length) | 0;
                        const chosen = pool[idx];
                        revealed.add(chosen);
                        pool.splice(idx, 1);
                    }
                };

                return new Promise<void>((res) => {
                    const refine = () => {
                        turn++;
                        turnValEl.textContent = String(turn);

                        // Cumulative target (exclude final token until last turn)
                        const effectiveTotal = totalWords - 1; // reserve one for '15'
                        const targetRevealed =
                            turn === totalTurns
                                ? totalWords
                                : Math.min(effectiveTotal, Math.ceil((effectiveTotal * turn) / totalTurns));

                        if (revealed.size < targetRevealed) {
                            revealRandomIndices(targetRevealed - revealed.size, false);
                        }

                        if (turn === totalTurns) {
                            // Reveal all including count token
                            for (let i = 0; i < totalWords; i++) revealed.add(i);
                        }

                        // Update placeholders
                        for (let i = 0; i < placeholders.length; i++) {
                            const span = placeholders[i];
                            if (revealed.has(i)) {
                                const word = seq2FinalStatic[i];
                                span.textContent = word;
                                span.className =
                                    "inline-block text-green-400 font-semibold" + (word === "15" ? " underline" : "");
                                if (word === "15") span.setAttribute("aria-label", "15 (correct)");
                            } else {
                                if (Math.random() < 0.3) {
                                    const rw = randomWords[(Math.random() * randomWords.length) | 0];
                                    span.textContent = rw;
                                    span.className = "inline-block text-gray-400";
                                } else {
                                    span.textContent = "???";
                                    span.className = "ph inline-block opacity-60 text-gray-500";
                                }
                            }
                        }

                        if (animated) {
                            gsap.fromTo(
                                placeholders,
                                { filter: "blur(4px)" },
                                { filter: "blur(0px)", duration: 0.35, ease: "power2.out" }
                            );
                        }

                        if (turn < totalTurns) {
                            setTimeout(refine, animated ? 650 : 0);
                        } else {
                            const countSpan = placeholders[countIndex];
                            if (countSpan && animated) {
                                gsap.fromTo(
                                    countSpan,
                                    { scale: 0.6, opacity: 0.4 },
                                    { scale: 1, opacity: 1, duration: 0.6, ease: "elastic.out(1,0.6)" }
                                );
                            }
                            setTimeout(() => res(), 1800);
                        }
                    };
                    setTimeout(refine, 400);
                });
            };

            const loop = async () => {
                while (true) {
                    cycle++;
                    await runSeq1();
                    if (animated) {
                        await new Promise((r) =>
                            gsap.to("#prediction-demo", {
                                background: "rgba(255,255,255,0.03)",
                                duration: 0.4,
                                yoyo: true,
                                repeat: 1,
                                onComplete: r,
                            })
                        );
                    }
                    // transition
                    if (animated) {
                        await new Promise((r) =>
                            gsap.to([seq1El], { opacity: 0, duration: 0.35, ease: "power2.out", onComplete: r })
                        );
                        gsap.set(seq1El, { opacity: 1 });
                    }
                    await runSeq2();
                    if (animated) {
                        await new Promise((r) =>
                            gsap.to([seq2El], { opacity: 0, duration: 0.35, ease: "power2.in", onComplete: r })
                        );
                        gsap.set(seq2El, { opacity: 1 });
                    }
                }
            };

            loop();
        };

        // Defer running until About.ts signals completion, with a fallback
        const startAfterAbout = () => {
            let started = false;
            const launch = () => {
                if (!started) {
                    started = true;
                    run();
                }
            };
            window.addEventListener("about:ready", launch, { once: true });
            window.addEventListener("about:finished", launch, { once: true });
            // Fallback if no event fires
            setTimeout(launch, 500);
        };

        if (document.readyState === "complete" || document.readyState === "interactive") {
            startAfterAbout();
        } else {
            window.addEventListener("DOMContentLoaded", startAfterAbout, { once: true });
        }
    });
};
