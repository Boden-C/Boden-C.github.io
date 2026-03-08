export interface Flag {
    id: string;
    timeMs: number;
    color: "red" | "yellow" | "green";
    label?: string;
}

export interface AudioState {
    audioBuffer: AudioBuffer | null;
    duration: number;
    isPlaying: boolean;
    currentTime: number;
    flags: Flag[];
    currentFlagColor: "red" | "yellow" | "green";
    selectedFlagIds: Set<string>;
    selectionRegion: { startMs: number; endMs: number } | null;
    viewportStart: number;
    pixelsPerSecond: number;
}

export interface WaveformCache {
    buffer: AudioBuffer;
    peaks: { min: number; max: number }[];
    samplesPerPeak: number;
}
