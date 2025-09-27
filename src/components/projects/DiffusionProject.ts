import { html } from "lit-html";
import { gsap } from "gsap";
import type { Slide } from "./Slide";

const DiffusionProjectTemplate = () => html`
    <div id="project-diffusion" class="w-full" aria-roledescription="slide" aria-label="Diffusion LLM">
        <article class="slide w-full" aria-labelledby="diffusion-title" tabindex="0">
            <h3 id="diffusion-title" data-animate="project-title" class="text-white text-lg md:text-2xl font-bold mb-3">
                Diffusion LLM Research
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
                A new type of text generation that using a denoising approach to generate multiple tokens in parallel.
                The model can now "see" the whole picture at once at many times the speed!
            </p>
        </article>
        <div
            class="glass-card mt-4 w-full flex flex-col justify-center items-start p-4 space-y-4 overflow-hidden"
            style="height: 400px;"
            id="prediction-demo"
            aria-live="polite"
            aria-label="Text generation demonstration"
        >
            <div class="w-full text-xs uppercase tracking-wide text-gray-400 font-semibold" id="prediction-phase-label">
                Autoregressive Prediction
            </div>
            <div class="w-full font-mono text-3xl md:text-3xl leading-relaxed min-h-[120px]" id="prediction-lines">
                <span id="seq1-line" class="block"></span>
                <span id="seq2-line" class="hidden"></span>
            </div>
            <div class="w-full text-2xl md:text-2xl text-gray-500 font-mono font-semibold" id="turn-counter">
                Turns: <span id="turn-value">0</span>
            </div>
            <div class="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <p class="text-[10px] leading-snug text-gray-500 font-sans" id="prediction-hint"></p>
        </div>
    </div>
`;

export const DiffusionProjectSlide: Slide = {
    key: "diffusion",
    template: DiffusionProjectTemplate,
    prepare(root: HTMLElement) {
        const title = root.querySelector('[data-animate="project-title"]') as HTMLElement | null;
        const desc = root.querySelector('[data-animate="project-desc"]') as HTMLElement | null;
        const underline = root.querySelector(".title-underline") as HTMLElement | null;
        const card = root.querySelector(".glass-card") as HTMLElement | null;
        if (underline) gsap.set(underline, { scaleX: 0, opacity: 0.3 });
        if (desc) gsap.set(desc, { y: 12, opacity: 0, filter: "blur(6px)" });
        if (card) gsap.set(card, { y: 14, opacity: 0, scale: 0.98 });
        if (title) gsap.set(title, { opacity: 0, y: -12 });
    },
    async enter(root: HTMLElement, ctx) {
        const title = root.querySelector('[data-animate="project-title"]') as HTMLElement | null;
        const desc = root.querySelector('[data-animate="project-desc"]') as HTMLElement | null;
        const underline = root.querySelector(".title-underline") as HTMLElement | null;
        const card = root.querySelector(".glass-card") as HTMLElement | null;
        if (!ctx.animated) {
            if (underline) gsap.set(underline, { scaleX: 1, opacity: 0.5 });
            if (desc) gsap.set(desc, { opacity: 1, y: 0, filter: "none" });
            if (card) gsap.set(card, { opacity: 1, y: 0, scale: 1 });
            if (title) gsap.set(title, { opacity: 1, y: 0 });
            return;
        }
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        if (title) {
            tl.to(title, { opacity: 1, y: 0, duration: 0.6 }, 0);
            gsap.to(title, {
                textShadow: "0 0 12px rgba(122,209,245,0.25)",
                duration: 2,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut",
            });
        }
        if (underline) {
            tl.to(underline, { scaleX: 1, opacity: 0.8, duration: 0.7, ease: "expo.out" }, ">-");
            gsap.to(underline, { opacity: 0.5, duration: 3, yoyo: true, repeat: -1, ease: "sine.inOut" });
        }
        if (desc) tl.to(desc, { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.6 }, "+=0.15");
        if (card) tl.to(card, { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }, "+=0.15");
        await tl;
    },
    async play(root: HTMLElement, ctx) {
        // One cycle here means a full AR+diffusion comparison (runSeq1 + runSeq2)
        let cancelled = false;
        let cycle = 0;
        const demo = root.querySelector("#prediction-demo");
        if (!demo) return;
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
            "words.",
        ];
        const placeholderCount = seq2FinalStatic.length;

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
        ];

        const clearChildren = (el: HTMLElement) => {
            while (el.firstChild) el.removeChild(el.firstChild);
        };

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
                    if (cancelled || ctx.token.cancelled) return;
                    if (index >= seq1Words.length) {
                        const spans = Array.from(seq1El.querySelectorAll(".word")) as HTMLElement[];
                        const incorrect = spans.find((s) => s.dataset.w === "25");
                        if (incorrect) {
                            incorrect.classList.add("text-red-400", "line-through");
                            incorrect.setAttribute("aria-label", "25 (incorrect)");
                            if (ctx.animated) {
                                gsap.fromTo(
                                    incorrect,
                                    { scale: 1.1 },
                                    { scale: 1, duration: 0.4, ease: "back.out(3)" }
                                );
                            }
                        }
                        setTimeout(() => res(), ctx.animated ? 1800 : 0);
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
                    if (ctx.animated) {
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
                    setTimeout(() => addWord(index + 1), ctx.animated ? 140 : 0);
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

            const placeholders: HTMLElement[] = [];
            for (let i = 0; i < placeholderCount; i++) {
                const span = document.createElement("span");
                span.textContent = "???";
                span.className = "ph inline-block opacity-60 text-gray-500";
                placeholders.push(span);
                seq2El.appendChild(span);
                if (i < placeholderCount - 1) seq2El.appendChild(document.createTextNode(" "));
            }

            if (ctx.animated) {
                gsap.from(placeholders, { opacity: 0, y: 8, stagger: 0.01, duration: 0.35, ease: "power2.out" });
            } else {
                placeholders.forEach((p) => (p.style.opacity = "1"));
            }

            const revealed = new Set<number>();
            let turn = 0;
            const totalTurns = 5;
            const totalWords = seq2FinalStatic.length;
            const countIndex = seq2FinalStatic.findIndex((w) => w === "15");

            const revealRandomIndices = (k: number, allowCount: boolean) => {
                const pool: number[] = [];
                for (let i = 0; i < totalWords; i++) {
                    if (revealed.has(i)) continue;
                    if (!allowCount && i === countIndex) continue;
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
                    if (cancelled || ctx.token.cancelled) return;
                    turn++;
                    turnValEl.textContent = String(turn);

                    const effectiveTotal = totalWords - 1;
                    const targetRevealed =
                        turn === totalTurns
                            ? totalWords
                            : Math.min(effectiveTotal, Math.ceil((effectiveTotal * turn) / totalTurns));

                    if (revealed.size < targetRevealed) {
                        revealRandomIndices(targetRevealed - revealed.size, false);
                    }

                    if (turn === totalTurns) {
                        for (let i = 0; i < totalWords; i++) revealed.add(i);
                    }

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

                    if (ctx.animated) {
                        gsap.fromTo(
                            placeholders,
                            { filter: "blur(4px)" },
                            { filter: "blur(0px)", duration: 0.35, ease: "power2.out" }
                        );
                    }

                    if (turn < totalTurns) {
                        setTimeout(refine, ctx.animated ? 650 : 0);
                    } else {
                        const countSpan = placeholders[countIndex];
                        if (countSpan && ctx.animated) {
                            gsap.fromTo(
                                countSpan,
                                { scale: 0.6, opacity: 0.4 },
                                { scale: 1, opacity: 1, duration: 0.6, ease: "elastic.out(1,0.6)" }
                            );
                        }
                        setTimeout(() => res(), ctx.animated ? 1800 : 0);
                    }
                };
                setTimeout(refine, ctx.animated ? 400 : 0);
            });
        };

        const run = async () => {
            while (!cancelled && !ctx.token.cancelled) {
                await runSeq1();
                if (cancelled || ctx.token.cancelled) break;
                await runSeq2();
                if (cancelled || ctx.token.cancelled) break;
                ctx.onCycle?.(++cycle);
            }
        };
        await run();
    },
    async exit(_root: HTMLElement, ctx) {
        ctx.token.cancelled = true;
        await new Promise((r) => setTimeout(r, 100));
    },
    destroy(root: HTMLElement) {
        try {
            gsap.killTweensOf(root);
            gsap.killTweensOf(root.querySelectorAll("*"));
        } catch {}
    },
};
