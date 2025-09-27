// Slide contract for project slides
// Defines a full lifecycle for animated, accessible, and performant slides.
export type SlideCtx = {
    animated: boolean;
    token: { cancelled: boolean };
    onCycle?: (count: number) => void;
};

export interface Slide {
    key: string;
    template(): any;
    /**
     * DOM-only setup, no animation. Called immediately after render, before reveal.
     * Use to set initial states, avoid visual pops, and ensure accessibility.
     */
    prepare?(root: HTMLElement): void;
    /**
     * Intro animation. Called after reveal. Awaited before play starts.
     * Should resolve when all entrance animations are complete.
     */
    enter(root: HTMLElement, ctx: SlideCtx): Promise<void>;
    /**
     * Main content loop or animation. Called after enter completes.
     * Should respect ctx.token.cancelled and call ctx.onCycle as needed.
     * One cycle is a full unit of the slide's content loop (e.g., for Diffusion, one full AR+diffusion comparison).
     * The controller does NOT await play; play should promptly stop when ctx.token.cancelled is set.
     */
    play(root: HTMLElement, ctx: SlideCtx): Promise<void>;
    /**
     * Outro animation or graceful cancellation. Awaited during slide change. Should promptly resolve if ctx.token.cancelled is set.
     */
    exit(root: HTMLElement, ctx: SlideCtx): Promise<void>;
    /**
     * Final cleanup. Kill tweens, clear timeouts, remove listeners.
     */
    destroy?(root: HTMLElement): void;
}
