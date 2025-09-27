import { html } from "lit-html";
import { gsap } from "gsap";
import type { Slide, SlideCtx } from "./Slide";

const MultiAgentProjectTemplate = () => html`
    <div id="project-multiagent" class="w-full" aria-roledescription="slide" aria-label="Multi-Agent Systems">
        <article class="slide w-full" aria-labelledby="ma-title" tabindex="0">
            <h3 id="ma-title" class="text-white text-lg md:text-2xl font-bold mb-3">Multi-Agent Systems</h3>
            <div
                class="title-underline"
                aria-hidden="true"
                style="height:2px;width:100%;background:linear-gradient(90deg,#34D399,#22D3EE,#60A5FA);border-radius:999px;opacity:0.5;"
            ></div>
            <p class="mt-3 md:mt-2 text-sm md:text-base text-gray-400 leading-relaxed font-sans">
                Coordinating multiple autonomous agents to solve complex tasks: planning, communication, and emergent
                behavior.
            </p>
        </article>
        <div class="glass-card mt-4 w-full p-4 space-y-3" style="min-height: 280px;">
            <ul class="list-disc list-inside text-gray-300 text-sm md:text-base">
                <li>Task decomposition and role specialization</li>
                <li>Message passing and shared memory</li>
                <li>Self-play, auctions, and negotiation</li>
            </ul>
            <div class="text-xs text-gray-500">Simple placeholder card (animations omitted)</div>
        </div>
    </div>
`;

export const MultiAgentProjectSlide: Slide = {
    key: "multiagent",
    template: MultiAgentProjectTemplate,
    prepare(root: HTMLElement) {
        const card = root.querySelector(".glass-card") as HTMLElement | null;
        const title = root.querySelector("#ma-title") as HTMLElement | null;
        if (card) gsap.set(card, { opacity: 0, y: 16 });
        if (title) gsap.set(title, { opacity: 0, y: -12 });
    },
    async enter(root: HTMLElement, ctx: SlideCtx) {
        const card = root.querySelector(".glass-card") as HTMLElement | null;
        const title = root.querySelector("#ma-title") as HTMLElement | null;
        if (!ctx.animated) {
            if (card) gsap.set(card, { opacity: 1, y: 0 });
            if (title) gsap.set(title, { opacity: 1, y: 0 });
            return;
        }
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        if (title) tl.to(title, { opacity: 1, y: 0, duration: 0.6 }, 0);
        if (card) tl.to(card, { opacity: 1, y: 0, duration: 0.5 }, ">-");
        await tl;
    },
    async play(root: HTMLElement, ctx: SlideCtx) {
        let cycle = 0;
        while (!ctx.token.cancelled) {
            cycle++;
            ctx.onCycle?.(cycle);
            await new Promise((r) => setTimeout(r, ctx.animated ? 3500 : 500));
        }
    },
    async exit(root: HTMLElement, ctx: SlideCtx) {
        ctx.token.cancelled = true;
        // Optionally animate out
        await new Promise((r) => setTimeout(r, 100));
    },
    destroy(root: HTMLElement) {
        try {
            gsap.killTweensOf(root);
            gsap.killTweensOf(root.querySelectorAll("*"));
        } catch {}
    },
};
