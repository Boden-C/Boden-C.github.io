import { html } from "lit-html";
import { gsap } from "gsap";
import type { Slide, SlideCtx } from "./Slide";

const GraphProjectTemplate = () => html`
    <div id="project-graph" class="w-full" aria-roledescription="slide" aria-label="Dynamic Network AI Research">
        <article class="slide w-full" aria-labelledby="graph-title" tabindex="0">
            <h3 id="graph-title" class="text-white text-lg md:text-2xl font-bold mb-3">Dynamic Network AI Research</h3>
            <div
                class="title-underline"
                aria-hidden="true"
                style="height:2px;width:100%;background:linear-gradient(90deg,#A389F4,#6F6EF6,#55A2F2,#7AD1F5);border-radius:999px;transform-origin:left;transform:scaleX(0);opacity:0.3;"
            ></div>
            <p class="mt-3 md:mt-2 text-sm md:text-base text-gray-400 leading-relaxed font-sans">
                Creating adaptive Multi-Agent Systems that interact together similar to a neural network that evolve
                based on the question. These systems can dynamically reflect complex problem structures and
                collaboratively reason toward solutions.
            </p>
        </article>
        <div id="nn-wrap" class="mt-5 w-full" role="img" aria-label="Animated neural network diagram in white">
            <svg
                id="nn-svg"
                width="100%"
                height="260"
                style="display:block; overflow:visible"
                focusable="false"
                aria-hidden="true"
            ></svg>
        </div>
    </div>
`;

export const GraphProjectSlide: Slide = {
    key: "graph",
    template: GraphProjectTemplate,
    prepare(root: HTMLElement) {
        const title = root.querySelector("#graph-title") as HTMLElement | null;
        const desc = root.querySelector("p") as HTMLElement | null;
        const underline = root.querySelector(".title-underline") as HTMLElement | null;

        if (underline) gsap.set(underline, { scaleX: 0, opacity: 0.3 });
        if (desc) gsap.set(desc, { y: 12, opacity: 0, filter: "blur(6px)" });
        if (title) gsap.set(title, { opacity: 0, y: -12 });

        // Clear any previous network content
        const svg = root.querySelector("#nn-svg") as SVGSVGElement | null;
        if (svg) {
            while (svg.firstChild) svg.removeChild(svg.firstChild);
        }
    },
    async enter(root: HTMLElement, ctx: SlideCtx) {
        const title = root.querySelector("#graph-title") as HTMLElement | null;
        const desc = root.querySelector("p") as HTMLElement | null;
        const underline = root.querySelector(".title-underline") as HTMLElement | null;
        const svg = root.querySelector("#nn-svg") as SVGSVGElement | null;

        if (!ctx.animated) {
            if (underline) gsap.set(underline, { scaleX: 1, opacity: 0.5 });
            if (desc) gsap.set(desc, { opacity: 1, y: 0, filter: "none" });
            if (title) gsap.set(title, { opacity: 1, y: 0 });
            if (svg) createFloatingNetwork(svg, { animate: false });
            return;
        }

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        if (title) {
            tl.to(title, { opacity: 1, y: 0, duration: 0.6 }, 0);
            gsap.to(title, {
                textShadow: "0 0 12px rgba(163,137,244,0.25)",
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

        // Build and animate the neural network after heading intro
        tl.add(() => {
            if (svg) createFloatingNetwork(svg, { animate: true });
        }, ">-=0.05");
        await tl;
    },
    async play(_root: HTMLElement, ctx: SlideCtx) {
        let cycle = 0;
        while (!ctx.token.cancelled) {
            cycle++;
            ctx.onCycle?.(cycle);
            await new Promise((r) => setTimeout(r, ctx.animated ? 10000 : 500));
        }
    },
    async exit(_root: HTMLElement, ctx: SlideCtx) {
        ctx.token.cancelled = true;
        await new Promise((r) => setTimeout(r, 100));
    },
    destroy(root: HTMLElement) {
        try {
            gsap.killTweensOf(root);
            gsap.killTweensOf(root.querySelectorAll("*"));
            const svg = root.querySelector("#nn-svg") as SVGSVGElement | null;
            if (svg) {
                teardownNetwork(svg);
                while (svg.firstChild) svg.removeChild(svg.firstChild);
            }
        } catch {}
    },
};

type RevealOptions = { animate: boolean };

type NodeData = {
    id: number;
    cx: number;
    cy: number;
    cIndex: number;
    ampX: number;
    ampY: number;
    spdX: number;
    spdY: number;
    phase: number;
    // secondary motion components for diversity
    ampX2: number;
    ampY2: number;
    spdX2: number;
    spdY2: number;
    phase2: number;
    circle: SVGCircleElement;
};
type EdgeData = {
    path: SVGPathElement;
    from: NodeData;
    to: NodeData;
    progress: number; // 0..1 draw progress
};
type Controller = {
    nodes: NodeData[];
    cols: NodeData[][];
    edges: EdgeData[];
    ticker: (t: number) => void;
    dispose: () => void;
    allDrawn: boolean;
    mouse: { nx: number; ny: number }; // normalized position -1..1
    mutateStop?: () => void;
    mutateStartTimeoutId?: number;
};

const controllerMap = new WeakMap<SVGSVGElement, Controller>();

function createFloatingNetwork(svg: SVGSVGElement, opts: RevealOptions) {
    teardownNetwork(svg);

    // Dimensions and layout (bigger graph)
    const paddingX = 36;
    const width = (svg.parentElement?.clientWidth || 720) | 0;
    const height = 360;
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", String(height));

    while (svg.firstChild) svg.removeChild(svg.firstChild);

    const layers = [1, 5, 5, 1];
    const columnCount = layers.length;
    const colSpacing = (width - paddingX * 2) / (columnCount - 1);

    const nodeRadius = 6.5;
    const verticalPadding = 16;
    const layerPositions: { x: number; ys: number[] }[] = [];
    for (let c = 0; c < columnCount; c++) {
        const count = layers[c];
        const x = paddingX + c * colSpacing;
        const availableH = height - verticalPadding * 2;
        const gap = count > 1 ? availableH / (count - 1) : 0;
        const ys: number[] = [];
        for (let i = 0; i < count; i++) {
            ys.push(verticalPadding + (count === 1 ? availableH / 2 : i * gap));
        }
        layerPositions.push({ x, ys });
    }

    const mk = (tag: string) => document.createElementNS("http://www.w3.org/2000/svg", tag);

    const gEdges = mk("g");
    const gNodes = mk("g");
    gEdges.setAttribute("fill", "none");
    gEdges.setAttribute("stroke", "#fff");
    gEdges.setAttribute("stroke-opacity", "0.9");
    gEdges.setAttribute("stroke-linecap", "round");
    gEdges.setAttribute("stroke-width", "1.3");
    gNodes.setAttribute("fill", "#fff");
    svg.appendChild(gEdges);
    svg.appendChild(gNodes);

    // Build nodes with float parameters
    let nextNodeId = 1;
    const columns: NodeData[][] = [];
    const nodes: NodeData[] = [];
    layerPositions.forEach(({ x, ys }, c) => {
        const col: NodeData[] = [];
        ys.forEach((y, i) => {
            const circle = mk("circle") as SVGCircleElement;
            circle.setAttribute("cx", String(x));
            circle.setAttribute("cy", String(y));
            circle.setAttribute("r", opts.animate ? "0" : String(nodeRadius));
            circle.setAttribute("vector-effect", "non-scaling-stroke");
            circle.setAttribute("stroke", "#fff");
            circle.setAttribute("stroke-opacity", "0.35");
            circle.setAttribute("stroke-width", "0.55");
            gNodes.appendChild(circle);
            const nd: NodeData = {
                id: nextNodeId++,
                cx: x,
                cy: y,
                cIndex: c,
                ampX: 2 + Math.random() * 3 + (c === 1 || c === 2 ? 1 : 0),
                ampY: 2 + Math.random() * 3 + (i % 2 === 0 ? 1 : 0),
                spdX: 0.4 + Math.random() * 0.6,
                spdY: 0.4 + Math.random() * 0.6,
                phase: Math.random() * Math.PI * 2,
                ampX2: 0.6 + Math.random() * 1.2,
                ampY2: 0.6 + Math.random() * 1.2,
                spdX2: 0.15 + Math.random() * 0.35,
                spdY2: 0.15 + Math.random() * 0.35,
                phase2: Math.random() * Math.PI * 2,
                circle,
            };
            nodes.push(nd);
            col.push(nd);
        });
        columns.push(col);
    });

    // Build edges fully connected between adjacent layers
    const edges: EdgeData[] = [];
    for (let c = 0, ni = 0; c < columnCount - 1; c++) {
        const leftCount = layers[c];
        const rightCount = layers[c + 1];
        const leftStart = ni;
        const rightStart = ni + leftCount;
        for (let i = 0; i < leftCount; i++) {
            for (let j = 0; j < rightCount; j++) {
                const from = nodes[leftStart + i];
                const to = nodes[rightStart + j];
                const path = mk("path") as SVGPathElement;
                path.setAttribute("opacity", "1");
                gEdges.appendChild(path);
                edges.push({ path, from, to, progress: opts.animate ? 0 : 1 });
            }
        }
        ni += leftCount;
    }

    // Helper: recompute geometry each tick
    let allDrawn = !opts.animate;
    const mouse = { nx: 0, ny: 0 };
    const parallaxBase = 4.0; // max px offset at extremes based on mouse position

    // 3D tilt/pan container and motion prefs
    const container = svg.parentElement as HTMLElement | null;
    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    const maxRotate = 10; // degrees
    const maxPan = 12; // px
    const target = { rx: 0, ry: 0, tx: 0, ty: 0 };
    const current = { rx: 0, ry: 0, tx: 0, ty: 0 };
    let hasPointer = false;
    if (container && !prefersReduced) {
        container.style.willChange = "transform";
        container.style.transformStyle = "preserve-3d";
        (container.style as any).transformOrigin = "50% 50%";
    }

    const update = () => {
        const t = performance.now() / 1000;

        // Update node positions with multi-component float + mouse position parallax
        nodes.forEach((n) => {
            const ox =
                Math.sin(t * n.spdX + n.phase) * n.ampX +
                Math.sin(t * n.spdX2 + n.phase2) * n.ampX2 +
                mouse.nx * (parallaxBase * (0.7 + 0.2 * n.cIndex));
            const oy =
                Math.cos(t * n.spdY + n.phase * 1.1) * n.ampY +
                Math.cos(t * n.spdY2 + n.phase2 * 1.13) * n.ampY2 +
                mouse.ny * (parallaxBase * (0.7 + 0.2 * n.cIndex));
            n.circle.setAttribute("cx", String(n.cx + ox));
            n.circle.setAttribute("cy", String(n.cy + oy));
        });

        // Apply smoothed 3D tilt/pan to face the pointer
        if (container && !prefersReduced) {
            const ease = hasPointer ? 0.12 : 0.08;
            current.rx += (target.rx - current.rx) * ease;
            current.ry += (target.ry - current.ry) * ease;
            current.tx += (target.tx - current.tx) * ease;
            current.ty += (target.ty - current.ty) * ease;
            container.style.transform = `perspective(900px) rotateX(${current.rx.toFixed(3)}deg) rotateY(${current.ry.toFixed(3)}deg) translate3d(${current.tx.toFixed(2)}px, ${current.ty.toFixed(2)}px, 0.01px)`;
        }

        // Update edges to follow nodes
        edges.forEach((e) => {
            const x1 = parseFloat(e.from.circle.getAttribute("cx") || String(e.from.cx));
            const y1 = parseFloat(e.from.circle.getAttribute("cy") || String(e.from.cy));
            const x2 = parseFloat(e.to.circle.getAttribute("cx") || String(e.to.cx));
            const y2 = parseFloat(e.to.circle.getAttribute("cy") || String(e.to.cy));
            const mx = (x1 + x2) / 2;
            const d = `M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`;
            e.path.setAttribute("d", d);
            const len = e.path.getTotalLength();
            if (e.progress < 1 || !allDrawn) {
                e.path.style.strokeDasharray = `${len}`;
                e.path.style.strokeDashoffset = `${(1 - Math.min(1, e.progress)) * len}`;
            } else if (e.path.style.strokeDasharray !== "none") {
                e.path.style.strokeDasharray = "none";
                e.path.style.strokeDashoffset = "0";
            }
        });
    };

    // Mouse position tracking (normalized -1..1 within container)
    const onMove = (ev: PointerEvent) => {
        if (ev.pointerType && ev.pointerType !== "mouse") return;
        if (!container) return;
        const rect = container.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const nx = (ev.clientX - cx) / (rect.width / 2);
        const ny = (ev.clientY - cy) / (rect.height / 2);
        // clamp
        mouse.nx = Math.max(-1, Math.min(1, nx));
        mouse.ny = Math.max(-1, Math.min(1, ny));
        if (!prefersReduced) {
            hasPointer = true;
            target.ry = mouse.nx * maxRotate;
            target.rx = -mouse.ny * maxRotate;
            target.tx = mouse.nx * maxPan;
            target.ty = mouse.ny * maxPan;
        }
    };
    const onLeave = () => {
        mouse.nx = 0;
        mouse.ny = 0;
        if (!prefersReduced) {
            target.rx = 0;
            target.ry = 0;
            target.tx = 0;
            target.ty = 0;
        }
        hasPointer = false;
    };
    container?.addEventListener("pointermove", onMove, { passive: true });
    container?.addEventListener("pointerleave", onLeave, { passive: true });

    // Initial geometry compute
    update();

    // Animate spawn and edge draw if requested
    if (opts.animate) {
        const tl = gsap.timeline();

        // Pop in circles
        tl.to(
            nodes.map((n) => n.circle),
            {
                duration: 0.32,
                attr: { r: nodeRadius },
                ease: "back.out(2)",
                stagger: { each: 0.03, from: "edges" },
            },
            0
        );

        // Small breathing time with only floating nodes visible
        tl.to({}, { duration: 0.15 });

        // Drive edges' progress value one-by-one, fast then ease out
        tl.to(
            edges,
            {
                progress: 1,
                duration: 0.22,
                ease: "power2.out",
                stagger: { each: 0.03 },
                onComplete: () => {
                    allDrawn = true;
                },
            },
            ">-0.05"
        );
    }

    // Layout helpers and mutation mechanics
    const layerMin = [1, 3, 3, 1];
    const layerMax = [1, 7, 7, 1];

    const relayoutColumn = (ci: number) => {
        const col = columns[ci];
        const count = col.length;
        const x = layerPositions[ci].x;
        const availableH = height - verticalPadding * 2;
        const gap = count > 1 ? availableH / (count - 1) : 0;
        const targets: number[] = [];
        for (let i = 0; i < count; i++) targets.push(verticalPadding + (count === 1 ? availableH / 2 : i * gap));
        // sort nodes by current base cy to preserve order
        const sorted = [...col].sort((a, b) => a.cy - b.cy);
        sorted.forEach((n, i) => {
            // animate base positions for smooth reflow
            gsap.to(n, { cx: x, cy: targets[i], duration: 0.35, ease: "power2.inOut" });
        });
    };

    // swap two nodes' target positions within a column
    const swapWithinColumn = (ci: number) => {
        const col = columns[ci];
        if (col.length < 2) return;
        // sort by base cy to get current logical order
        const sorted = [...col].sort((a, b) => a.cy - b.cy);
        const i = (Math.random() * (sorted.length - 1)) | 0;
        const j = i + 1; // swap adjacent for minimal chaos
        const a = sorted[i];
        const b = sorted[j];
        const ax = layerPositions[ci].x;
        const ay = a.cy;
        const bx = layerPositions[ci].x;
        const by = b.cy;
        // cross-animate base target positions so the float motion carries them
        gsap.to(a, { cx: bx, cy: by, duration: 0.45, ease: "power2.inOut" });
        gsap.to(b, { cx: ax, cy: ay, duration: 0.45, ease: "power2.inOut" });
    };

    const keyFor = (a: NodeData, b: NodeData) => `${a.id}-${b.id}`;

    const rebuildEdgesBetween = (ciLeft: number) => {
        const left = columns[ciLeft];
        const right = columns[ciLeft + 1];
        // Build a set of desired keys
        const desired = new Set<string>();
        left.forEach((l: NodeData) => right.forEach((r: NodeData) => desired.add(keyFor(l, r))));
        // Map existing edges between these columns
        const existing = new Map<string, EdgeData>();
        edges.forEach((e) => {
            const li = columns[ciLeft].includes(e.from);
            const ri = columns[ciLeft + 1].includes(e.to);
            if (li && ri) existing.set(keyFor(e.from, e.to), e);
        });
        // Remove edges not desired
        existing.forEach((e, k) => {
            if (!desired.has(k)) {
                // animate out then remove
                gsap.to(e, {
                    progress: 0,
                    duration: 0.18,
                    ease: "power2.out",
                    onComplete: () => {
                        e.path.remove();
                        const idx = edges.indexOf(e);
                        if (idx >= 0) edges.splice(idx, 1);
                    },
                });
            }
        });
        // Add missing edges
        desired.forEach((k) => {
            if (!existing.has(k)) {
                const [lId, rId] = k.split("-").map((s) => parseInt(s, 10));
                const l = left.find((n: NodeData) => n.id === lId)!;
                const r = right.find((n: NodeData) => n.id === rId)!;
                const path = mk("path") as SVGPathElement;
                path.setAttribute("opacity", "1");
                gEdges.appendChild(path);
                const edge: EdgeData = { path, from: l, to: r, progress: 0 };
                edges.push(edge);
                gsap.to(edge, { progress: 1, duration: 0.22, ease: "power2.out" });
            }
        });
    };

    const addNodeToColumn = (ci: number) => {
        const col = columns[ci];
        if (col.length >= layerMax[ci]) return;
        const x = layerPositions[ci].x;
        const circle = mk("circle") as SVGCircleElement;
        circle.setAttribute("cx", String(x));
        circle.setAttribute("cy", String(height / 2));
        circle.setAttribute("r", "0");
        circle.setAttribute("vector-effect", "non-scaling-stroke");
        circle.setAttribute("stroke", "#fff");
        circle.setAttribute("stroke-opacity", "0.35");
        circle.setAttribute("stroke-width", "0.55");
        gNodes.appendChild(circle);
        const nd: NodeData = {
            id: nextNodeId++,
            cx: x,
            cy: height / 2,
            cIndex: ci,
            ampX: 2 + Math.random() * 3,
            ampY: 2 + Math.random() * 3,
            spdX: 0.4 + Math.random() * 0.6,
            spdY: 0.4 + Math.random() * 0.6,
            phase: Math.random() * Math.PI * 2,
            ampX2: 0.6 + Math.random() * 1.2,
            ampY2: 0.6 + Math.random() * 1.2,
            spdX2: 0.15 + Math.random() * 0.35,
            spdY2: 0.15 + Math.random() * 0.35,
            phase2: Math.random() * Math.PI * 2,
            circle,
        };
        col.push(nd);
        nodes.push(nd);
        // pop-in
        gsap.to(circle, { attr: { r: nodeRadius }, duration: 0.28, ease: "back.out(2)" });
        relayoutColumn(ci);
        if (ci - 1 >= 0) rebuildEdgesBetween(ci - 1);
        if (ci + 1 < columns.length) rebuildEdgesBetween(ci);
    };

    const removeNodeFromColumn = (ci: number) => {
        const col = columns[ci];
        if (col.length <= layerMin[ci]) return;
        // pick random
        const idx = (Math.random() * col.length) | 0;
        const nd = col[idx];
        // remove edges connected to nd
        const connected = edges.filter((e) => e.from === nd || e.to === nd);
        connected.forEach((e) => {
            gsap.to(e, {
                progress: 0,
                duration: 0.18,
                ease: "power2.out",
                onComplete: () => {
                    e.path.remove();
                    const ei = edges.indexOf(e);
                    if (ei >= 0) edges.splice(ei, 1);
                },
            });
        });
        // shrink and remove node
        gsap.to(nd.circle, {
            attr: { r: 0 },
            duration: 0.2,
            ease: "power2.in",
            onComplete: () => nd.circle.remove(),
        });
        col.splice(idx, 1);
        const ni = nodes.indexOf(nd);
        if (ni >= 0) nodes.splice(ni, 1);
        relayoutColumn(ci);
        if (ci - 1 >= 0) rebuildEdgesBetween(ci - 1);
        if (ci + 1 < columns.length) rebuildEdgesBetween(ci);
    };

    // Randomly mutate columns over time
    let intervalId: number | undefined;
    let startTimeoutId: number | undefined;
    const startMutations = () => {
        const tick = () => {
            // iterate each column and randomly add/remove/swap within bounds
            for (let ci = 0; ci < columns.length; ci++) {
                const roll = Math.random();
                if (roll < 0.2) {
                    addNodeToColumn(ci);
                } else if (roll < 0.4) {
                    removeNodeFromColumn(ci);
                } else if (roll < 0.65) {
                    swapWithinColumn(ci);
                }
            }
        };
        intervalId = window.setInterval(tick, 700);
    };
    const stopMutations = () => {
        if (intervalId !== undefined) window.clearInterval(intervalId);
    };

    // Use GSAP ticker for smooth updates
    const ticker = () => update();
    gsap.ticker.add(ticker);

    const dispose = () => {
        gsap.ticker.remove(ticker);
        container?.removeEventListener("pointermove", onMove as unknown as EventListener);
        container?.removeEventListener("pointerleave", onLeave as unknown as EventListener);
        if (container) {
            container.style.transform = "";
            container.style.willChange = "";
            container.style.transformStyle = "";
        }
        stopMutations();
        if (startTimeoutId !== undefined) window.clearTimeout(startTimeoutId);
    };

    controllerMap.set(svg, {
        nodes,
        cols: columns,
        edges,
        ticker,
        dispose,
        allDrawn,
        mouse,
        mutateStop: stopMutations,
        mutateStartTimeoutId: startTimeoutId,
    });

    // start background mutations with a 2s delay to allow initial narrative to breathe
    startTimeoutId = window.setTimeout(() => {
        // guard against teardown before timeout fires
        if (!document.contains(svg)) return;
        startMutations();
    }, 2000);
}

function teardownNetwork(svg: SVGSVGElement) {
    const ctl = controllerMap.get(svg);
    if (ctl) {
        try {
            ctl.dispose();
        } catch {}
        // clear any deferred mutation start if pending
        if (ctl.mutateStartTimeoutId !== undefined) {
            window.clearTimeout(ctl.mutateStartTimeoutId);
        }
        controllerMap.delete(svg);
    }
}
