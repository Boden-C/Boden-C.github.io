import { AudioStudioApp } from "./components/audiostudio/AudioStudioApp";
import "./style.css";

const root = document.getElementById("audio-studio-root");
if (root) {
    const app = new AudioStudioApp(root);
    app.init();
}
