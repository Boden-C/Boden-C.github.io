import type { Flag, AudioState, WaveformCache } from "./types";

const debounce = <T extends (...args: Parameters<T>) => void>(fn: T, ms: number): ((...args: Parameters<T>) => void) => {
    let timeout: number | undefined;
    return (...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = window.setTimeout(() => fn(...args), ms);
    };
};

export class AudioStudioApp {
    private root: HTMLElement;
    private audioContext: AudioContext | null = null;
    private sourceNode: AudioBufferSourceNode | null = null;
    private analyserNode: AnalyserNode | null = null;
    private startedAt = 0;
    private pausedAt = 0;
    private animationFrame = 0;

    private waveformCanvas!: HTMLCanvasElement;
    private waveformCtx!: CanvasRenderingContext2D;
    private overlayCanvas!: HTMLCanvasElement;
    private overlayCtx!: CanvasRenderingContext2D;
    private spectrumCanvas!: HTMLCanvasElement;
    private spectrumCtx!: CanvasRenderingContext2D;

    private contextMenu!: HTMLElement;
    private flagListContainer!: HTMLElement;
    private vignetteOverlay!: HTMLElement;
    private importDialog!: HTMLElement;

    private waveformCache: WaveformCache | null = null;
    private draggingFlag: Flag | null = null;
    private dragInitialTimes: Map<string, number> = new Map();
    private dragStartAbsoluteTimeMs = 0;
    private dragOffsetMs = 0;
    private wasDragging = false;
    private dragStartPos = { x: 0, y: 0 };
    private lastMouseX = 0;
    private isMouseOverWaveform = false;
    private isSelectingRegion = false;
    private previousTime = 0;

    private state: AudioState = {
        audioBuffer: null,
        duration: 0,
        isPlaying: false,
        currentTime: 0,
        flags: [],
        currentFlagColor: "red",
        selectedFlagIds: new Set(),
        selectionRegion: null,
        viewportStart: 0,
        pixelsPerSecond: 100,
    };

    private readonly MIN_PPS = 10;
    private readonly MAX_PPS = 2000;
    private readonly ZOOM_FACTOR = 1.15;

    constructor(root: HTMLElement) {
        this.root = root;
    }

    public init(): void {
        this.render();
        this.setupEventListeners();
        this.resizeCanvases();
        window.addEventListener("resize", debounce(this.handleResize, 100));
    }

    public destroy(): void {
        this.stopPlayback();
        cancelAnimationFrame(this.animationFrame);
        window.removeEventListener("resize", this.handleResize);
        if (this.audioContext) {
            this.audioContext.close();
        }
    }

    private render(): void {
        this.root.innerHTML = `
            <div class="audio-studio">
                <header class="audio-studio-header">
                    <h1 class="accent-gradient-text">Audio Studio</h1>
                    <div class="audio-studio-controls">
                        <label for="audio-upload" class="upload-btn glass-card" tabindex="0" role="button" aria-label="Upload audio file">
                            <span>Upload Audio</span>
                            <input type="file" id="audio-upload" accept="audio/*" class="sr-only" />
                        </label>
                        <button id="toggle-play-btn" class="control-btn glass-card" disabled aria-label="Toggle Play/Pause">
                            <svg class="play-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
                            <svg class="pause-icon hidden" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                        </button>
                        <button id="stop-btn" class="control-btn glass-card" disabled aria-label="Stop audio">
                            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 6h12v12H6z"/></svg>
                        </button>
                        <span id="time-display" class="time-display" aria-live="off">00:00.000 / 00:00.000</span>
                    </div>
                </header>

                <main class="audio-studio-main">
                    <section class="waveform-section glass-card" aria-label="Audio waveform visualization">
                        <div class="canvas-container">
                            <canvas id="waveform-canvas" aria-hidden="true"></canvas>
                            <canvas id="overlay-canvas" aria-hidden="true"></canvas>
                        </div>
                        <p class="hint-text" id="waveform-hint">Scroll to zoom • Shift+Scroll to pan • Right-click to add flag</p>
                    </section>

                    <section class="spectrum-section glass-card" aria-label="Audio spectrum analyzer">
                        <canvas id="spectrum-canvas" aria-hidden="true"></canvas>
                    </section>

                    <section class="flags-section glass-card" aria-label="Audio flags list">
                        <div class="flags-header">
                            <h2>Flags</h2>
                            <div class="flag-color-picker">
                                <button class="color-btn red active" data-color="red" aria-label="Set flag color to red"></button>
                                <button class="color-btn yellow" data-color="yellow" aria-label="Set flag color to yellow"></button>
                                <button class="color-btn green" data-color="green" aria-label="Set flag color to green"></button>
                            </div>
                            <div class="flags-actions">
                                <button id="import-flags-btn" class="export-btn" disabled>Import</button>
                                <button id="export-json-btn" class="export-btn" disabled>JSON</button>
                                <button id="export-csv-btn" class="export-btn" disabled>CSV</button>
                            </div>
                        </div>
                        <div id="flags-list" role="list" aria-label="List of audio flags"></div>
                        <input type="file" id="import-flags-input" accept=".json,.csv" class="sr-only" />
                    </section>
                </main>

                <div id="context-menu" class="context-menu glass-card" role="menu" aria-hidden="true">
                    <button id="add-flag-btn" class="context-menu-item" role="menuitem">Add Flag</button>
                </div>
                <div id="vignette-overlay" class="vignette-overlay"></div>

                <div id="import-dialog" class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="import-title">
                    <div class="modal-content glass-card">
                        <h3 id="import-title">Import Flags</h3>
                        <p>Choose your import source. Data should be a JSON array of millisecond timings or flag objects.</p>
                        <div class="modal-actions">
                            <button id="import-clipboard-btn" class="control-btn glass-card">Clipboard</button>
                            <button id="import-file-btn" class="control-btn glass-card">File</button>
                            <button id="import-cancel-btn" class="control-btn secondary glass-card">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.waveformCanvas = this.root.querySelector("#waveform-canvas")!;
        this.waveformCtx = this.waveformCanvas.getContext("2d")!;
        this.overlayCanvas = this.root.querySelector("#overlay-canvas")!;
        this.overlayCtx = this.overlayCanvas.getContext("2d")!;
        this.spectrumCanvas = this.root.querySelector("#spectrum-canvas")!;
        this.spectrumCtx = this.spectrumCanvas.getContext("2d")!;
        this.contextMenu = this.root.querySelector("#context-menu")!;
        this.flagListContainer = this.root.querySelector("#flags-list")!;
        this.vignetteOverlay = this.root.querySelector("#vignette-overlay")!;
        this.importDialog = this.root.querySelector("#import-dialog")!;
    }

    private setupEventListeners(): void {
        const uploadInput = this.root.querySelector("#audio-upload") as HTMLInputElement;
        const uploadLabel = this.root.querySelector(".upload-btn") as HTMLLabelElement;
        const togglePlayBtn = this.root.querySelector("#toggle-play-btn") as HTMLButtonElement;
        const stopBtn = this.root.querySelector("#stop-btn") as HTMLButtonElement;
        const addFlagBtn = this.root.querySelector("#add-flag-btn") as HTMLButtonElement;
        const exportJsonBtn = this.root.querySelector("#export-json-btn") as HTMLButtonElement;
        const exportCsvBtn = this.root.querySelector("#export-csv-btn") as HTMLButtonElement;
        const importBtn = this.root.querySelector("#import-flags-btn") as HTMLButtonElement;
        const importInput = this.root.querySelector("#import-flags-input") as HTMLInputElement;
        const colorBtns = this.root.querySelectorAll(".color-btn");

        uploadInput.addEventListener("change", this.handleFileUpload);
        uploadLabel.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                uploadInput.click();
            }
        });

        togglePlayBtn.addEventListener("click", () => {
            if (this.state.isPlaying) {
                this.pausePlayback();
            } else {
                this.startPlayback();
            }
        });
        stopBtn.addEventListener("click", () => this.stopPlayback());

        exportJsonBtn.addEventListener("click", () => this.handleExportFlags("json"));
        exportCsvBtn.addEventListener("click", () => this.handleExportFlags("csv"));

        importBtn.addEventListener("click", () => this.handleImportClick());
        importInput.addEventListener("change", (e) => this.handleImportFile(e));

        const clipboardBtn = this.root.querySelector("#import-clipboard-btn") as HTMLButtonElement;
        const fileBtn = this.root.querySelector("#import-file-btn") as HTMLButtonElement;
        const cancelBtn = this.root.querySelector("#import-cancel-btn") as HTMLButtonElement;

        clipboardBtn.addEventListener("click", () => this.importFromClipboard());
        fileBtn.addEventListener("click", () => {
            this.hideImportDialog();
            importInput.click();
        });
        cancelBtn.addEventListener("click", () => this.hideImportDialog());
        this.importDialog.addEventListener("click", (e) => {
            if (e.target === this.importDialog) this.hideImportDialog();
        });

        addFlagBtn.addEventListener("click", this.handleAddFlag);

        colorBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                colorBtns.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                this.state.currentFlagColor = (btn as HTMLElement).dataset.color as any;
            });
        });

        this.overlayCanvas.addEventListener("wheel", this.handleWheel, { passive: false });
        this.overlayCanvas.addEventListener("contextmenu", this.handleContextMenu);
        this.overlayCanvas.addEventListener("mousedown", this.handleMouseDown);
        this.overlayCanvas.addEventListener("click", this.handleCanvasClick);

        document.addEventListener("mousemove", this.handleMouseMove);
        document.addEventListener("mouseup", this.handleMouseUp);
        document.addEventListener("click", this.hideContextMenu);
        document.addEventListener("keydown", this.handleKeyDown);
    }

    private handleResize = (): void => {
        this.resizeCanvases();
        this.drawWaveform();
        this.drawOverlay();
    };

    private resizeCanvases(): void {
        const container = this.waveformCanvas.parentElement!;
        const rect = container.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;

        this.waveformCanvas.width = rect.width * dpr;
        this.waveformCanvas.height = rect.height * dpr;
        this.waveformCanvas.style.width = `${rect.width}px`;
        this.waveformCanvas.style.height = `${rect.height}px`;
        this.waveformCtx = this.waveformCanvas.getContext("2d")!;
        this.waveformCtx.scale(dpr, dpr);

        this.overlayCanvas.width = rect.width * dpr;
        this.overlayCanvas.height = rect.height * dpr;
        this.overlayCanvas.style.width = `${rect.width}px`;
        this.overlayCanvas.style.height = `${rect.height}px`;
        this.overlayCtx = this.overlayCanvas.getContext("2d")!;
        this.overlayCtx.scale(dpr, dpr);

        const spectrumContainer = this.spectrumCanvas.parentElement!;
        const spectrumRect = spectrumContainer.getBoundingClientRect();
        this.spectrumCanvas.width = spectrumRect.width * dpr;
        this.spectrumCanvas.height = spectrumRect.height * dpr;
        this.spectrumCanvas.style.width = `${spectrumRect.width}px`;
        this.spectrumCanvas.style.height = `${spectrumRect.height}px`;
        this.spectrumCtx = this.spectrumCanvas.getContext("2d")!;
        this.spectrumCtx.scale(dpr, dpr);
    }

    private handleFileUpload = async (e: Event): Promise<void> => {
        const input = e.target as HTMLInputElement;
        const file = input.files?.[0];
        if (!file) return;

        try {
            if (!this.audioContext) {
                this.audioContext = new AudioContext();
                this.analyserNode = this.audioContext.createAnalyser();
                this.analyserNode.fftSize = 256;
                this.analyserNode.connect(this.audioContext.destination);
            }

            const arrayBuffer = await file.arrayBuffer();
            const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);

            this.state.audioBuffer = audioBuffer;
            this.state.duration = audioBuffer.duration;
            this.state.currentTime = 0;
            this.state.viewportStart = 0;
            this.state.pixelsPerSecond = this.calculateInitialPPS();
            this.state.flags = [];

            this.generateWaveformCache(audioBuffer);
            this.enableControls();
            this.drawWaveform();
            this.drawOverlay();
            this.updateTimeDisplay();
            this.renderFlagList();

            this.announce(`Loaded audio file: ${file.name}, duration ${this.formatTime(this.state.duration * 1000)}`);
        } catch (err) {
            console.error("Failed to load audio:", err);
            this.announce("Failed to load audio file. Please try a different file.");
        }
    };

    private calculateInitialPPS(): number {
        const containerWidth = this.waveformCanvas.parentElement!.getBoundingClientRect().width;
        const pps = containerWidth / this.state.duration;
        return Math.max(this.MIN_PPS, Math.min(this.MAX_PPS, pps));
    }

    private generateWaveformCache(buffer: AudioBuffer): void {
        const channelData = buffer.getChannelData(0);
        const samplesPerPeak = Math.max(1, Math.floor(buffer.sampleRate / 100));
        const peaks: { min: number; max: number }[] = [];

        for (let i = 0; i < channelData.length; i += samplesPerPeak) {
            let min = 1;
            let max = -1;
            const end = Math.min(i + samplesPerPeak, channelData.length);
            for (let j = i; j < end; j++) {
                const val = channelData[j];
                if (val < min) min = val;
                if (val > max) max = val;
            }
            peaks.push({ min, max });
        }

        this.waveformCache = { buffer, peaks, samplesPerPeak };
    }

    private enableControls(): void {
        const btns = this.root.querySelectorAll(".control-btn");
        btns.forEach((btn) => (btn as HTMLButtonElement).disabled = false);
        
        const importBtn = this.root.querySelector("#import-flags-btn") as HTMLButtonElement;
        if (importBtn) importBtn.disabled = false;
    }

    private startPlayback(): void {
        if (!this.audioContext || !this.state.audioBuffer || this.state.isPlaying) return;

        if (this.audioContext.state === "suspended") {
            this.audioContext.resume();
        }

        this.sourceNode = this.audioContext.createBufferSource();
        this.sourceNode.buffer = this.state.audioBuffer;
        this.sourceNode.connect(this.analyserNode!);

        const offset = this.pausedAt;
        this.sourceNode.start(0, offset);
        this.startedAt = this.audioContext.currentTime - offset;
        this.state.isPlaying = true;

        this.sourceNode.onended = () => {
            if (this.state.isPlaying) {
                this.stopPlayback();
            }
        };

        this.updatePlaybackUI();
        this.animationLoop();
    }

    private pausePlayback(): void {
        if (!this.state.isPlaying) return;

        this.pausedAt = this.audioContext!.currentTime - this.startedAt;
        this.sourceNode?.stop();
        this.sourceNode = null;
        this.state.isPlaying = false;
        cancelAnimationFrame(this.animationFrame);
        this.updatePlaybackUI();
    }

    private stopPlayback(): void {
        if (this.sourceNode) {
            this.sourceNode.onended = null;
            this.sourceNode.stop();
            this.sourceNode = null;
        }
        this.state.isPlaying = false;
        this.pausedAt = 0;
        this.state.currentTime = 0;
        cancelAnimationFrame(this.animationFrame);
        this.updateTimeDisplay();
        this.drawOverlay();
        this.clearSpectrum();
        this.updatePlaybackUI();
    }

    private updatePlaybackUI(): void {
        const toggleBtn = this.root.querySelector("#toggle-play-btn");
        if (!toggleBtn) return;
        
        const playIcon = toggleBtn.querySelector(".play-icon");
        const pauseIcon = toggleBtn.querySelector(".pause-icon");
        
        if (this.state.isPlaying) {
            playIcon?.classList.add("hidden");
            pauseIcon?.classList.remove("hidden");
        } else {
            playIcon?.classList.remove("hidden");
            pauseIcon?.classList.add("hidden");
        }
    }

    private animationLoop = (): void => {
        if (!this.state.isPlaying) return;

        const pTimeMs = this.state.currentTime * 1000;
        this.state.currentTime = this.audioContext!.currentTime - this.startedAt;
        const cTimeMs = this.state.currentTime * 1000;

        if (this.state.currentTime >= this.state.duration) {
            this.stopPlayback();
            return;
        }

        // Vignette flash detection when crossing flags
        const crossedFlag = this.state.flags.find(flag => 
            (flag.timeMs > pTimeMs && flag.timeMs <= cTimeMs) ||
            (flag.timeMs < pTimeMs && flag.timeMs >= cTimeMs)
        );

        if (crossedFlag) {
            this.triggerVignetteFlash(crossedFlag.color);
        }

        // Auto-scroll if playhead goes off screen
        const containerWidth = this.waveformCanvas.parentElement!.getBoundingClientRect().width;
        const visibleDuration = containerWidth / this.state.pixelsPerSecond;
        const viewportEnd = this.state.viewportStart + visibleDuration;

        if (this.state.currentTime >= viewportEnd) {
             this.state.viewportStart = this.state.currentTime;
             this.drawWaveform();
        } else if (this.state.currentTime < this.state.viewportStart) {
             // Handle case where playhead jumps back (e.g. loop or seek)
             this.state.viewportStart = this.state.currentTime;
             this.drawWaveform();
        }

        this.updateTimeDisplay();
        this.drawOverlay();
        this.drawSpectrum();

        this.animationFrame = requestAnimationFrame(this.animationLoop);
    };

    private handleWheel = (e: WheelEvent): void => {
        e.preventDefault();

        if (!this.state.audioBuffer) return;

        const rect = this.overlayCanvas.getBoundingClientRect();
        const cursorX = e.clientX - rect.left;
        const containerWidth = rect.width;

        if (e.shiftKey) {
            const scrollAmount = e.deltaY / this.state.pixelsPerSecond;
            this.state.viewportStart = Math.max(
                0,
                Math.min(
                    this.state.duration - containerWidth / this.state.pixelsPerSecond,
                    this.state.viewportStart + scrollAmount
                )
            );
        } else {
            const cursorTime = this.state.viewportStart + cursorX / this.state.pixelsPerSecond;
            const zoomIn = e.deltaY < 0;
            const factor = zoomIn ? this.ZOOM_FACTOR : 1 / this.ZOOM_FACTOR;

            const newPPS = Math.max(this.MIN_PPS, Math.min(this.MAX_PPS, this.state.pixelsPerSecond * factor));

            this.state.viewportStart = cursorTime - cursorX / newPPS;
            this.state.pixelsPerSecond = newPPS;

            this.state.viewportStart = Math.max(
                0,
                Math.min(
                    this.state.duration - containerWidth / this.state.pixelsPerSecond,
                    this.state.viewportStart
                )
            );
        }

        this.drawWaveform();
        this.drawOverlay();
    };

    private contextMenuTime = 0;

    private handleContextMenu = (e: MouseEvent): void => {
        e.preventDefault();
        if (!this.state.audioBuffer) return;

        const rect = this.overlayCanvas.getBoundingClientRect();
        const x = e.clientX - rect.left;

        this.contextMenuTime = this.state.viewportStart + x / this.state.pixelsPerSecond;

        this.showContextMenu(e.clientX, e.clientY);
    };

    private showContextMenu(x: number, y: number): void {
        this.contextMenu.style.left = `${x}px`;
        this.contextMenu.style.top = `${y}px`;
        this.contextMenu.classList.add("visible");
        this.contextMenu.setAttribute("aria-hidden", "false");
    }

    private hideContextMenu = (e?: MouseEvent): void => {
        if (e && this.contextMenu.contains(e.target as Node)) return;
        this.contextMenu.classList.remove("visible");
        this.contextMenu.setAttribute("aria-hidden", "true");
    };

    private handleAddFlag = (): void => {
        const timeMs = Math.max(0, Math.min(this.state.duration * 1000, this.contextMenuTime * 1000));
        this.addFlagAt(timeMs);
        this.hideContextMenu();
    };

    private handleExportFlags = (format: "json" | "csv"): void => {
        if (this.state.flags.length === 0) return;

        let dataStr = "";
        let fileName = "";

        if (format === "json") {
            dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.state.flags, null, 2));
            fileName = "flags.json";
        } else {
            const csvRows = ["ID,Time (ms),Time (formatted),Color Label"];
            this.state.flags.forEach(f => {
                csvRows.push(`${f.id},${f.timeMs},${this.formatTime(f.timeMs)},${f.color}`);
            });
            dataStr = "data:text/csv;charset=utf-8," + encodeURIComponent(csvRows.join("\n"));
            fileName = "flags.csv";
        }

        const downloadAnchorNode = document.createElement("a");
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", fileName);
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    };

    private handleImportClick = (): void => {
        this.showImportDialog();
    };

    private showImportDialog(): void {
        this.importDialog.classList.add("visible");
        this.importDialog.setAttribute("aria-hidden", "false");
    }

    private hideImportDialog(): void {
        this.importDialog.classList.remove("visible");
        this.importDialog.setAttribute("aria-hidden", "true");
    }

    private importFromClipboard = async (): Promise<void> => {
        try {
            const text = await navigator.clipboard.readText();
            this.processImportData(text);
            this.hideImportDialog();
        } catch (err) {
            alert("Failed to read from clipboard. Please ensure you have given permission.");
        }
    };

    private handleImportFile = (e: Event): void => {
        const file = (e.target as HTMLInputElement).files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            const text = event.target?.result as string;
            this.processImportData(text);
            (e.target as HTMLInputElement).value = ""; // Reset input
        };
        reader.readAsText(file);
    };

    private processImportData(text: string): void {
        try {
            let data: any;
            try {
                data = JSON.parse(text);
            } catch {
                // Try CSV/list parsing fallback
                const tokens = text.split(/[\n,\r\t]+/).map(t => t.trim()).filter(t => t);
                const numbers = tokens.map(t => parseFloat(t)).filter(n => !isNaN(n));
                if (numbers.length > 0) {
                    data = numbers;
                }
            }

            if (!data) throw new Error("Could not parse data");

            const normalized: Array<{ timeMs: number, id?: string, color?: "red" | "yellow" | "green" }> = [];

            if (Array.isArray(data)) {
                data.forEach(item => {
                    if (typeof item === "number") {
                        normalized.push({ timeMs: item });
                    } else if (typeof item === "object" && item !== null && typeof item.timeMs === "number") {
                        normalized.push({
                            timeMs: item.timeMs,
                            id: typeof item.id === "string" ? item.id : undefined,
                            color: item.color
                        });
                    }
                });
            } else if (typeof data === "object" && data !== null && typeof data.timeMs === "number") {
                normalized.push({
                    timeMs: data.timeMs,
                    id: typeof data.id === "string" ? data.id : undefined,
                    color: data.color
                });
            }

            if (normalized.length === 0) throw new Error("No valid time data found");

            this.importFlagData(normalized);
        } catch (err) {
            alert("Failed to process import. Expected an array of millisecond timings [1000, 2000] or Flag objects.");
        }
    }

    private importFlagData(items: Array<{ timeMs: number, id?: string, color?: "red" | "yellow" | "green" }>): void {
        const defaultColor = this.state.currentFlagColor;
        let count = 0;

        const existingIds = new Set(this.state.flags.map(f => f.id));

        items.forEach(item => {
            if (item.timeMs >= 0 && item.timeMs <= this.state.duration * 1000) {
                // Handle ID uniqueness: if provided ID exists, generate a new one
                const id = (item.id && !existingIds.has(item.id)) ? item.id : crypto.randomUUID();
                
                const flag: Flag = {
                    id,
                    timeMs: item.timeMs,
                    color: item.color || defaultColor,
                };
                
                this.state.flags.push(flag);
                existingIds.add(id);
                count++;
            }
        });

        if (count > 0) {
            this.state.flags.sort((a, b) => a.timeMs - b.timeMs);
            this.drawOverlay();
            this.renderFlagList();
            this.announce(`Imported ${count} flags`);
        } else {
            alert("No flags were imported (times might be out of range).");
        }
    }

    private addFlagAt(timeMs: number): void {
        const flag: Flag = {
            id: crypto.randomUUID(),
            timeMs,
            color: this.state.currentFlagColor,
        };
        this.state.flags.push(flag);
        this.state.flags.sort((a, b) => a.timeMs - b.timeMs);
        this.drawOverlay();
        this.renderFlagList();
        this.announce(`Flag added at ${this.formatTime(timeMs)}`);
    }

    private handleMouseDown = (e: MouseEvent): void => {
        if (e.button !== 0 || !this.state.audioBuffer) return;

        const rect = this.overlayCanvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        this.dragStartPos = { x: e.clientX, y: e.clientY };
        const clickTime = this.state.viewportStart + x / this.state.pixelsPerSecond;

        const flagHitThreshold = 10 / this.state.pixelsPerSecond;

        // Check for flag hits
        let hitFlag: Flag | null = null;
        for (const flag of this.state.flags) {
            const flagTime = flag.timeMs / 1000;
            if (Math.abs(flagTime - clickTime) < flagHitThreshold) {
                hitFlag = flag;
                break;
            }
        }

        if (hitFlag) {
            if (!e.shiftKey && !this.state.selectedFlagIds.has(hitFlag.id)) {
                this.state.selectedFlagIds.clear();
            }
            this.state.selectedFlagIds.add(hitFlag.id);
            this.draggingFlag = hitFlag;
            this.dragOffsetMs = hitFlag.timeMs - clickTime * 1000;
            this.dragStartAbsoluteTimeMs = clickTime * 1000;
            this.dragInitialTimes.clear();
            this.state.flags.forEach(f => {
                if (this.state.selectedFlagIds.has(f.id)) {
                    this.dragInitialTimes.set(f.id, f.timeMs);
                }
            });
            this.drawOverlay();
            this.renderFlagList();
            e.preventDefault();
        } else {
            // Start region selection
            if (!e.shiftKey) {
                this.state.selectedFlagIds.clear();
            }
            this.isSelectingRegion = true;
            this.state.selectionRegion = { startMs: clickTime * 1000, endMs: clickTime * 1000 };
            this.drawOverlay();
            this.renderFlagList();
        }
    };

    private handleMouseMove = (e: MouseEvent): void => {
        const rect = this.overlayCanvas.getBoundingClientRect();
        this.lastMouseX = e.clientX - rect.left;
        this.isMouseOverWaveform = e.target === this.overlayCanvas;

        if (!this.state.audioBuffer) return;

        if (this.draggingFlag) {
            const x = this.lastMouseX;
            const currentTimeMs = (this.state.viewportStart + x / this.state.pixelsPerSecond) * 1000;
            const deltaMs = currentTimeMs - this.dragStartAbsoluteTimeMs;

            let minInitial = Infinity;
            let maxInitial = -Infinity;
            this.dragInitialTimes.forEach(time => {
                minInitial = Math.min(minInitial, time);
                maxInitial = Math.max(maxInitial, time);
            });

            const durationMs = this.state.duration * 1000;
            const clampedDelta = Math.max(-minInitial, Math.min(durationMs - maxInitial, deltaMs));

            this.state.flags.forEach(flag => {
                const initial = this.dragInitialTimes.get(flag.id);
                if (initial !== undefined) {
                    flag.timeMs = initial + clampedDelta;
                }
            });

            this.drawOverlay();
            this.renderFlagList();
        } else if (this.isSelectingRegion && this.state.selectionRegion) {
            const x = this.lastMouseX;
            const currentTime = this.state.viewportStart + x / this.state.pixelsPerSecond;
            this.state.selectionRegion.endMs = currentTime * 1000;

            const start = Math.min(this.state.selectionRegion.startMs, this.state.selectionRegion.endMs);
            const end = Math.max(this.state.selectionRegion.startMs, this.state.selectionRegion.endMs);

            // Update multi-selection during drag
            this.state.flags.forEach(flag => {
                if (flag.timeMs >= start && flag.timeMs <= end) {
                    this.state.selectedFlagIds.add(flag.id);
                }
            });

            this.drawOverlay();
            this.renderFlagList();
        }
    };

    private handleMouseUp = (e: MouseEvent): void => {
        if (this.draggingFlag || this.isSelectingRegion) {
            const dist = Math.sqrt(Math.pow(e.clientX - this.dragStartPos.x, 2) + Math.pow(e.clientY - this.dragStartPos.y, 2));
            const moved = dist > 5;

            this.state.flags.sort((a, b) => a.timeMs - b.timeMs);
            this.draggingFlag = null;
            this.dragInitialTimes.clear();
            this.isSelectingRegion = false;
            this.state.selectionRegion = null;
            
            if (moved) {
                this.wasDragging = true;
                setTimeout(() => { this.wasDragging = false; }, 0);
            }

            this.drawOverlay();
        }
    };

    private handleCanvasClick = (e: MouseEvent): void => {
        if (!this.state.audioBuffer || this.wasDragging) return;

        const rect = this.overlayCanvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const clickTime = this.state.viewportStart + x / this.state.pixelsPerSecond;

        const wasPlaying = this.state.isPlaying;
        if (wasPlaying) {
            this.pausePlayback();
        }

        this.pausedAt = Math.max(0, Math.min(this.state.duration, clickTime));
        this.state.currentTime = this.pausedAt;
        this.updateTimeDisplay();
        this.drawOverlay();

        if (wasPlaying) {
            this.startPlayback();
        }
    };

    private handleKeyDown = (e: KeyboardEvent): void => {
        const target = e.target as HTMLElement;
        if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") return;

        if (e.code === "Space" && this.state.audioBuffer) {
            e.preventDefault();
            if (this.state.isPlaying) {
                this.pausePlayback();
            } else {
                this.startPlayback();
            }
        }

        if (e.key.toLowerCase() === "m" && this.state.audioBuffer) {
            if (this.isMouseOverWaveform) {
                const time = this.state.viewportStart + this.lastMouseX / this.state.pixelsPerSecond;
                const timeMs = Math.max(0, Math.min(this.state.duration * 1000, time * 1000));
                this.addFlagAt(timeMs);
            } else {
                this.addFlagAt(this.state.currentTime * 1000);
            }
        }

        if ((e.key === "Delete" || e.key === "Backspace") && this.state.selectedFlagIds.size > 0) {
            this.deleteSelectedFlags();
        }

        if (e.code === "Escape") {
            if (this.importDialog.classList.contains("visible")) {
                this.hideImportDialog();
                return;
            }
            this.state.selectedFlagIds.clear();
            this.drawOverlay();
            this.renderFlagList();
            this.hideContextMenu();
        }
    };

    private deleteSelectedFlags(): void {
        const count = this.state.selectedFlagIds.size;
        this.state.flags = this.state.flags.filter(f => !this.state.selectedFlagIds.has(f.id));
        this.state.selectedFlagIds.clear();
        this.drawOverlay();
        this.renderFlagList();
        this.announce(`Deleted ${count} flags`);
    }

    private triggerVignetteFlash(color: "red" | "yellow" | "green" = "red"): void {
        this.vignetteOverlay.classList.remove("flash", "red", "yellow", "green");
        void this.vignetteOverlay.offsetWidth; // Force reflow
        this.vignetteOverlay.classList.add("flash", color);
        
        // Remove flash class after duration to allow transition back
        setTimeout(() => {
            this.vignetteOverlay.classList.remove("flash", "red", "yellow", "green");
        }, 50);
    }

    private getFlagHexColor(color: "red" | "yellow" | "green"): string {
        switch (color) {
            case "red": return "#FF4757";
            case "yellow": return "#FFC312";
            case "green": return "#2ED573";
            default: return "#FF4757";
        }
    }

    private drawWaveform(): void {
        if (!this.waveformCache || !this.state.audioBuffer) {
            this.clearCanvas(this.waveformCtx);
            return;
        }

        const ctx = this.waveformCtx;
        const width = this.waveformCanvas.parentElement!.getBoundingClientRect().width;
        const height = this.waveformCanvas.parentElement!.getBoundingClientRect().height;

        this.clearCanvas(ctx);

        const { peaks, samplesPerPeak, buffer } = this.waveformCache;
        const sampleRate = buffer.sampleRate;
        const pps = this.state.pixelsPerSecond;
        const startTime = this.state.viewportStart;

        const gradient = ctx.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop(0, "#A389F4");
        gradient.addColorStop(0.33, "#6F6EF6");
        gradient.addColorStop(0.66, "#55A2F2");
        gradient.addColorStop(1, "#7AD1F5");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.beginPath();

        const centerY = height / 2;

        for (let x = 0; x < width; x++) {
            const time = startTime + x / pps;
            const sampleIndex = Math.floor(time * sampleRate);
            const peakIndex = Math.floor(sampleIndex / samplesPerPeak);

            if (peakIndex < 0 || peakIndex >= peaks.length) continue;

            const peak = peaks[peakIndex];
            const minY = centerY + peak.min * centerY * 0.9;
            const maxY = centerY + peak.max * centerY * 0.9;

            ctx.moveTo(x, minY);
            ctx.lineTo(x, maxY);
        }

        ctx.stroke();

        ctx.globalAlpha = 0.3;
        ctx.beginPath();
        ctx.moveTo(0, centerY);
        ctx.lineTo(width, centerY);
        ctx.strokeStyle = "rgba(255,255,255,0.2)";
        ctx.stroke();
        ctx.globalAlpha = 1;
    }

    private drawOverlay(): void {
        const ctx = this.overlayCtx;
        const width = this.overlayCanvas.parentElement!.getBoundingClientRect().width;
        const height = this.overlayCanvas.parentElement!.getBoundingClientRect().height;

        this.clearCanvas(ctx);

        const pps = this.state.pixelsPerSecond;
        const startTime = this.state.viewportStart;

        // Selection region
        if (this.state.selectionRegion) {
            const startX = (this.state.selectionRegion.startMs / 1000 - startTime) * pps;
            const endX = (this.state.selectionRegion.endMs / 1000 - startTime) * pps;
            
            ctx.fillStyle = "rgba(163, 137, 244, 0.2)";
            ctx.fillRect(startX, 0, endX - startX, height);
            ctx.strokeStyle = "rgba(163, 137, 244, 0.5)";
            ctx.lineWidth = 1;
            ctx.strokeRect(startX, 0, endX - startX, height);
        }

        for (const flag of this.state.flags) {
            const flagTime = flag.timeMs / 1000;
            const x = (flagTime - startTime) * pps;

            if (x < -10 || x > width + 10) continue;

            const isDragging = this.draggingFlag?.id === flag.id;
            const isSelected = this.state.selectedFlagIds.has(flag.id);
            
            let color = this.getFlagHexColor(flag.color);
            if (isDragging) color = "#FF6B6B";
            else if (isSelected) color = "#7AD1F5";

            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
            ctx.strokeStyle = color;
            ctx.lineWidth = (isDragging || isSelected) ? 3 : 2;
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x - 8, 0);
            ctx.lineTo(x - 8, 16);
            ctx.lineTo(x, 20);
            ctx.lineTo(x + 8, 16);
            ctx.lineTo(x + 8, 0);
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();
        }

        if (this.state.audioBuffer) {
            const playheadTime = this.state.currentTime;
            const playheadX = (playheadTime - startTime) * pps;

            if (playheadX >= 0 && playheadX <= width) {
                ctx.beginPath();
                ctx.moveTo(playheadX, 0);
                ctx.lineTo(playheadX, height);
                ctx.strokeStyle = "#FFFFFF";
                ctx.lineWidth = 2;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(playheadX, 10, 6, 0, Math.PI * 2);
                ctx.fillStyle = "#FFFFFF";
                ctx.fill();
            }
        }
    }

    private drawSpectrum(): void {
        if (!this.analyserNode || !this.state.isPlaying) return;

        const ctx = this.spectrumCtx;
        const width = this.spectrumCanvas.parentElement!.getBoundingClientRect().width;
        const height = this.spectrumCanvas.parentElement!.getBoundingClientRect().height;

        const bufferLength = this.analyserNode.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        this.analyserNode.getByteFrequencyData(dataArray);

        this.clearCanvas(ctx);

        const barWidth = width / bufferLength;
        const gradient = ctx.createLinearGradient(0, height, 0, 0);
        gradient.addColorStop(0, "#A389F4");
        gradient.addColorStop(0.5, "#6F6EF6");
        gradient.addColorStop(1, "#7AD1F5");

        ctx.fillStyle = gradient;

        for (let i = 0; i < bufferLength; i++) {
            const barHeight = (dataArray[i] / 255) * height;
            const x = i * barWidth;
            ctx.fillRect(x, height - barHeight, barWidth - 1, barHeight);
        }
    }

    private clearSpectrum(): void {
        this.clearCanvas(this.spectrumCtx);
    }

    private clearCanvas(ctx: CanvasRenderingContext2D): void {
        const canvas = ctx.canvas;
        const width = canvas.parentElement!.getBoundingClientRect().width;
        const height = canvas.parentElement!.getBoundingClientRect().height;
        ctx.clearRect(0, 0, width, height);
    }

    private renderFlagList(): void {
        const jsonBtn = this.root.querySelector("#export-json-btn") as HTMLButtonElement;
        const csvBtn = this.root.querySelector("#export-csv-btn") as HTMLButtonElement;

        if (this.state.flags.length === 0) {
            this.flagListContainer.innerHTML = '<p class="no-flags">No flags added. Right-click on waveform to add.</p>';
            if (jsonBtn) jsonBtn.disabled = true;
            if (csvBtn) csvBtn.disabled = true;
            return;
        }

        if (jsonBtn) jsonBtn.disabled = false;
        if (csvBtn) csvBtn.disabled = false;

        const sortedFlags = [...this.state.flags].sort((a, b) => a.timeMs - b.timeMs);

        this.flagListContainer.innerHTML = sortedFlags.map((flag, index) => {
            const isSelected = this.state.selectedFlagIds.has(flag.id);
            const colorHex = this.getFlagHexColor(flag.color);
            return `
                <div class="flag-item ${isSelected ? "selected" : ""}" role="listitem" data-flag-id="${flag.id}" style="border-left-color: ${colorHex}">
                    <span class="flag-index" style="color: ${colorHex}">${index + 1}</span>
                    <input class="flag-id-input" value="${flag.id}" aria-label="Flag ID" data-old-id="${flag.id}">
                    <span class="flag-time">${this.formatTime(flag.timeMs)}</span>
                    <span class="flag-ms">(${Math.round(flag.timeMs)} ms)</span>
                    <span class="flag-color-tag" style="background: ${colorHex}33; color: ${colorHex}">${flag.color}</span>
                    <button class="flag-goto" aria-label="Go to flag at ${this.formatTime(flag.timeMs)}" data-time="${flag.timeMs}">
                        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
                    </button>
                    <button class="flag-delete" aria-label="Delete flag at ${this.formatTime(flag.timeMs)}" data-flag-id="${flag.id}">
                        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                    </button>
                </div>
            `;
        }).join("");

        this.flagListContainer.querySelectorAll(".flag-item").forEach((item) => {
            item.addEventListener("click", (e) => {
                const mouseEvent = e as MouseEvent;
                const target = e.target as HTMLElement;
                if (target.closest("button") || target.closest("input")) return;

                const id = item.getAttribute("data-flag-id")!;
                if (mouseEvent.shiftKey) {
                    if (this.state.selectedFlagIds.has(id)) {
                        this.state.selectedFlagIds.delete(id);
                    } else {
                        this.state.selectedFlagIds.add(id);
                    }
                } else {
                    this.state.selectedFlagIds.clear();
                    this.state.selectedFlagIds.add(id);
                }
                this.drawOverlay();
                this.renderFlagList();
            });
        });

        this.flagListContainer.querySelectorAll(".flag-id-input").forEach((input) => {
            input.addEventListener("change", (e) => {
                const target = e.target as HTMLInputElement;
                const oldId = target.dataset.oldId!;
                const newId = target.value.trim();

                if (!newId || newId === oldId) {
                    target.value = oldId;
                    return;
                }

                // Check for duplicates
                if (this.state.flags.some(f => f.id === newId)) {
                    alert("ID already exists. Please choose a unique ID.");
                    target.value = oldId;
                    return;
                }

                const flag = this.state.flags.find(f => f.id === oldId);
                if (flag) {
                    flag.id = newId;
                    // Update selection set
                    if (this.state.selectedFlagIds.has(oldId)) {
                        this.state.selectedFlagIds.delete(oldId);
                        this.state.selectedFlagIds.add(newId);
                    }
                    this.drawOverlay();
                    this.renderFlagList();
                }
            });

            input.addEventListener("keydown", (e: Event) => {
                if ((e as KeyboardEvent).key === "Enter") {
                    (e.target as HTMLInputElement).blur();
                }
            });
        });

        this.flagListContainer.querySelectorAll(".flag-goto").forEach((btn) => {
            btn.addEventListener("click", (e) => {
                const timeMs = parseFloat((e.currentTarget as HTMLElement).dataset.time!);
                this.seekTo(timeMs / 1000);
            });
        });

        this.flagListContainer.querySelectorAll(".flag-delete").forEach((btn) => {
            btn.addEventListener("click", (e) => {
                const flagId = (e.currentTarget as HTMLElement).dataset.flagId!;
                this.deleteFlag(flagId);
            });
        });
    }

    private seekTo(time: number): void {
        const wasPlaying = this.state.isPlaying;
        if (wasPlaying) {
            this.pausePlayback();
        }

        this.pausedAt = Math.max(0, Math.min(this.state.duration, time));
        this.state.currentTime = this.pausedAt;
        this.updateTimeDisplay();
        this.drawOverlay();

        if (wasPlaying) {
            this.startPlayback();
        }
    }

    private deleteFlag(flagId: string): void {
        const index = this.state.flags.findIndex((f) => f.id === flagId);
        if (index !== -1) {
            const flag = this.state.flags[index];
            this.state.flags.splice(index, 1);
            this.drawOverlay();
            this.renderFlagList();
            this.announce(`Flag at ${this.formatTime(flag.timeMs)} deleted`);
        }
    }

    private updateTimeDisplay(): void {
        const display = this.root.querySelector("#time-display")!;
        display.textContent = `${this.formatTime(this.state.currentTime * 1000)} / ${this.formatTime(this.state.duration * 1000)}`;
    }

    private formatTime(ms: number): string {
        const totalSeconds = ms / 1000;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = Math.floor(totalSeconds % 60);
        const milliseconds = Math.floor(ms % 1000);
        return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds.toString().padStart(3, "0")}`;
    }

    private announce(message: string): void {
        const announcer = document.getElementById("screen-reader-announcer");
        if (announcer) {
            announcer.textContent = message;
        }
    }
}
