/*
 * Reusable slideshow controller to manage slide transitions, lifecycle, and reduced-motion.
 */
import { gsap } from "gsap";
import { render } from "lit-html";
import type { Slide, SlideCtx } from "./Slide";

export type ProgressionConfig = {
    mode?: "cycle" | "time" | "manual";
    defaultAdvanceAfterCycles?: number;
    minVisibleMs?: number;
    perSlide?: Record<
        string,
        {
            mode?: "cycle" | "time" | "manual";
            advanceAfterCycles?: number;
            minVisibleMs?: number;
        }
    >;
};

export class SlideshowController {
    private el: HTMLElement;
    private mountSelector: string;
    private slides: Slide[];
    private animated: boolean;
    private fadeFirstSlide: boolean;
    private progression: ProgressionConfig;
    private mountEl: HTMLElement | null = null;
    private currentIndex = 0;
    private currentInstance: Slide | null = null;
    private hasRenderedBefore = false;
    private isTransitioning = false;
    private advancing = false;
    private token: { cancelled: boolean } = { cancelled: false };
    private cycleCount = 0;
    private slideStartTime = 0;

    constructor(opts: {
        el: HTMLElement;
        mountSelector: string;
        slides: Slide[];
        animated: boolean;
        fadeFirstSlide?: boolean;
        progression?: ProgressionConfig;
    }) {
        this.el = opts.el;
        this.mountSelector = opts.mountSelector;
        this.slides = opts.slides;
        this.animated = opts.animated;
        this.fadeFirstSlide = Boolean(opts.fadeFirstSlide);
        this.progression = opts.progression || {};
    }

    async start(index = 0): Promise<void> {
        this.currentIndex = index;
        this.mountEl = this.el.querySelector(this.mountSelector) as HTMLElement | null;
        if (!this.mountEl) return;
        await this.showSlide(this.currentIndex);
    }

    next(): void {
        if (!this.slides.length) return;
        if (this.isTransitioning || this.advancing) return;
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        void this.showSlide(this.currentIndex);
    }

    destroy(): void {
        if (this.currentInstance && typeof this.currentInstance.destroy === "function") {
            try {
                this.currentInstance.destroy(this.mountEl!);
            } catch {}
            this.currentInstance = null;
        }
        if (this.mountEl) {
            try {
                gsap.killTweensOf(this.mountEl);
                gsap.killTweensOf(this.mountEl.querySelectorAll("*"));
            } catch {}
        }
    }

    private getSlideProgression(key: string) {
        const p = this.progression;
        const slideCfg = p.perSlide?.[key] || {};
        return {
            mode: slideCfg.mode || p.mode || "cycle",
            advanceAfterCycles: slideCfg.advanceAfterCycles ?? p.defaultAdvanceAfterCycles ?? 2,
            minVisibleMs: slideCfg.minVisibleMs ?? p.minVisibleMs ?? 0,
        };
    }

    private async showSlide(index: number): Promise<void> {
        if (this.isTransitioning || this.advancing) return;
        this.isTransitioning = true;
        this.token = { cancelled: false };
        this.cycleCount = 0;
        this.slideStartTime = Date.now();

        const m = this.mountEl;
        if (!m || !m.isConnected) {
            this.isTransitioning = false;
            return;
        }
        const abortIfDetached = (): boolean => {
            if (!m.isConnected) {
                this.isTransitioning = false;
                return true;
            }
            return false;
        };

        // Fade out current content if any
        if (this.animated && m.childElementCount) {
            await new Promise((r) => gsap.to(m, { opacity: 0, duration: 0.25, ease: "power2.out", onComplete: r }));
            if (abortIfDetached()) return;
        }

        // Cleanup current instance and any tweens
        if (this.currentInstance && typeof this.currentInstance.destroy === "function") {
            try {
                this.currentInstance.destroy(m);
            } catch {}
        }
        this.currentInstance = null;
        try {
            gsap.killTweensOf(m);
            gsap.killTweensOf(m.querySelectorAll("*"));
        } catch {}

        // Ensure hidden before rendering new content to avoid any flash
        m.style.opacity = "0";
        m.style.willChange = "opacity";

        // Render next slide
        const slide = this.slides[index];
        render(slide.template(), m);
        if (abortIfDetached()) return;
        this.currentInstance = slide;

        // Optional slide.prepare (DOM-only, no animations)
        if (slide.prepare) {
            try {
                slide.prepare(m);
            } catch {}
        }

        // Setup progression policy
        const progression = this.getSlideProgression(slide.key);
        let cycleCount = 0;
        let advanced = false;
        const beginAdvance = async (reason: "cycle" | "time" | "manual") => {
            if (advanced || this.advancing) return;
            advanced = true;
            this.advancing = true;
            this.token.cancelled = true;
            if (slide.exit) {
                try {
                    await Promise.race([
                        slide.exit(m, { animated: this.animated, token: this.token }),
                        new Promise((r) => setTimeout(r, 400)),
                    ]);
                } catch {}
            }
            if (this.animated) {
                await new Promise((r) => gsap.to(m, { opacity: 0, duration: 0.25, ease: "power2.out", onComplete: r }));
            }
            try {
                gsap.killTweensOf(m);
                gsap.killTweensOf(m.querySelectorAll("*"));
            } catch {}
            if (slide.destroy) {
                try {
                    slide.destroy(m);
                } catch {}
            }
            this.advancing = false;
            this.isTransitioning = false;
            this.next();
        };
        const onCycle = (count: number) => {
            if (this.token.cancelled || advanced) return;
            cycleCount = count;
            if (progression.mode === "cycle" && cycleCount >= progression.advanceAfterCycles) {
                const elapsed = Date.now() - this.slideStartTime;
                if (elapsed >= progression.minVisibleMs) {
                    beginAdvance("cycle");
                }
            }
        };
        const ctx: SlideCtx = {
            animated: this.animated,
            token: this.token,
            onCycle,
        };

        // Reveal
        const shouldFadeIn = this.animated && (this.hasRenderedBefore || this.fadeFirstSlide);
        if (shouldFadeIn) {
            await new Promise((r) => gsap.to(m, { opacity: 1, duration: 0.3, ease: "power2.out", onComplete: r }));
            if (abortIfDetached()) return;
        } else {
            m.style.opacity = "1";
        }
        m.style.willChange = "";

        // Await slide.enter (intro animation)
        if (slide.enter) {
            await slide.enter(m, ctx);
            if (abortIfDetached()) return;
        }
        this.isTransitioning = false;

        // Start slide.play (main loop) non-blocking
        if (slide.play) {
            void slide.play(m, ctx);
        }

        this.hasRenderedBefore = true;
    }
}
