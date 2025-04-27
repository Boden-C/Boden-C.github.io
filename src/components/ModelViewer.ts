import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"; // Import GLTFLoader

const PATH = "src/assets/model/scene.gltf"; // Path to the model

export class ModelViewer {
    private container: HTMLElement;
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private renderer: THREE.WebGLRenderer;
    private animationFrame: number | null = null;
    private mixer: THREE.AnimationMixer | null = null; // Animation mixer
    private clock: THREE.Clock = new THREE.Clock(); // Clock for animation updates
    private containerWidth: number;
    private containerHeight: number;
    private mouseX: number = 0; // Track mouse X position
    private mouseY: number = 0; // Track mouse Y position
    private targetMouseX: number = 0; // Target mouse X for smooth interpolation
    private targetMouseY: number = 0; // Target mouse Y for smooth interpolation
    private model: THREE.Object3D | null = null; // Reference to the loaded model

    constructor(containerId: string) {
        // Get the container element
        this.container = document.getElementById(containerId) as HTMLElement;
        if (!this.container) {
            throw new Error(`Container element with id "${containerId}" not found`);
        }

        // Set initial container dimensions
        this.containerWidth = this.container.clientWidth || window.innerWidth;
        this.containerHeight = this.container.clientHeight || window.innerHeight;

        // Prevent layout shifts by explicitly setting dimensions
        this.container.style.minHeight = "400px";
        this.container.style.position = "relative";

        // Create scene, camera, and renderer
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, this.containerWidth / this.containerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        this.renderer.setSize(this.containerWidth, this.containerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);

        // Flip the output horizontally by scaling the renderer's domElement
        this.renderer.domElement.style.transform = "scaleX(-1)";

        // Add the renderer to the container
        this.container.appendChild(this.renderer.domElement);

        // Setup camera position - Adjusted for closer view
        this.camera.position.set(0, 0, 3); // Moved closer and higher

        // Add lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8); // Soft white light
        this.scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 10, 7.5);
        this.scene.add(directionalLight);

        // Initialize animation
        this.animate();

        // Handle resize events
        window.addEventListener("resize", this.handleResize.bind(this));

        // Add mouse move event listener
        window.addEventListener("mousemove", this.handleMouseMove.bind(this));
    }

    private handleMouseMove(event: MouseEvent): void {
        // Convert mouse position to normalized coordinates (-1 to 1)
        this.targetMouseX = (event.clientX / window.innerWidth) * 2 - 1;
        this.targetMouseY = -((event.clientY / window.innerHeight) * 2 - 1);
    }

    private handleResize(): void {
        // Update container dimensions
        this.containerWidth = this.container.clientWidth || window.innerWidth;
        this.containerHeight = this.container.clientHeight || window.innerHeight;

        // Update camera
        this.camera.aspect = this.containerWidth / this.containerHeight;
        this.camera.updateProjectionMatrix();

        // Update renderer
        this.renderer.setSize(this.containerWidth, this.containerHeight);
    }

    private animate(): void {
        this.animationFrame = requestAnimationFrame(this.animate.bind(this));

        // Update animation mixer
        const delta = this.clock.getDelta();
        if (this.mixer) {
            this.mixer.update(delta);
        }

        // Smooth mouse movement interpolation
        this.mouseX += (this.targetMouseX - this.mouseX) * 0.05;
        this.mouseY += (this.targetMouseY - this.mouseY) * 0.05;

        // Apply subtle movement to the model based on mouse position
        if (this.model) {
            this.model.rotation.y = Math.PI / 2 + -this.mouseX * 0.1; // Base rotation + mouse influence
            this.model.rotation.x = -this.mouseY * 0.05; // Reversed tilt direction for opposite movement
        }

        this.renderer.render(this.scene, this.camera);
    }

    public dispose(): void {
        // Clean up resources
        if (this.animationFrame !== null) {
            cancelAnimationFrame(this.animationFrame);
        }

        // Stop animation mixer
        this.mixer = null;

        // Remove event listeners
        window.removeEventListener("resize", this.handleResize);
        window.removeEventListener("mousemove", this.handleMouseMove);
    }

    // Method to add content to the scene
    public loadContent(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            const loader = new GLTFLoader();
            const modelPath = PATH;

            loader.load(
                modelPath,
                (gltf) => {
                    console.log("Model loaded successfully:", gltf);
                    const model = gltf.scene;
                    this.model = model; // Store reference to the model

                    // --- Adjust model scale and position ---
                    // Calculate bounding box to center and scale the model
                    const box = new THREE.Box3().setFromObject(model);
                    const center = box.getCenter(new THREE.Vector3());
                    const size = box.getSize(new THREE.Vector3());

                    // Scale model to fit nicely - increased scale for closer view
                    const maxDim = Math.max(size.x, size.y, size.z);
                    const scaleFactor = 3.2 / maxDim; // Increased from 2.5 to 3.2 for closer zoom
                    model.scale.set(scaleFactor, scaleFactor, scaleFactor);

                    // Recalculate box after scaling
                    box.setFromObject(model);
                    box.getCenter(center); // Get new center

                    // Position model: center it horizontally/depth-wise
                    model.position.x -= center.x;
                    model.position.z -= center.z;

                    // Start with lower Y position
                    model.position.y = -(center.y - 1.0);

                    // Add ~1 second delay before starting the animation
                    const animationDelay = 1200; // 1 second in milliseconds

                    setTimeout(() => {
                        // Animate the model from lower to higher position
                        const startY = model.position.y;
                        const targetY = -(center.y - 1.4); // Target position from the original code

                        // Use GSAP or simple animation
                        const duration = 3; // seconds
                        const startTime = this.clock.getElapsedTime();

                        const animateModelPosition = () => {
                            const elapsed = this.clock.getElapsedTime() - startTime;
                            const progress = Math.min(elapsed / duration, 1);

                            // Ease function (ease-out)
                            const easeProgress = 1 - Math.pow(1 - progress, 3);

                            // Interpolate position
                            model.position.y = startY + (targetY - startY) * easeProgress;

                            if (progress < 1) {
                                requestAnimationFrame(animateModelPosition);
                            }
                        };

                        // Start the animation
                        animateModelPosition();
                    }, animationDelay);

                    // Rotate model 90 degrees around Y axis to face us
                    model.rotation.y = Math.PI / 2; // 90 degrees in radians

                    this.scene.add(model);

                    // --- Setup animations ---
                    if (gltf.animations && gltf.animations.length) {
                        console.log("Model has animations:", gltf.animations);
                        this.mixer = new THREE.AnimationMixer(model);
                        gltf.animations.forEach((clip) => {
                            this.mixer?.clipAction(clip).play();
                            console.log(`Playing animation: ${clip.name}`);
                        });
                    } else {
                        console.log("Model has no animations.");
                    }

                    // Resolve the promise when the model is loaded and added to the scene
                    resolve();
                },
                (xhr) => {
                    // Progress callback (optional)
                    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
                },
                (error) => {
                    // Error callback
                    console.error("An error happened loading the model:", error);

                    // Fallback: Add a simple cube if loading fails
                    const geometry = new THREE.BoxGeometry(1, 1, 1);
                    const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
                    const cube = new THREE.Mesh(geometry, material);
                    this.scene.add(cube);
                    this.model = cube; // Store reference to the fallback cube

                    // Reject the promise with the error
                    reject(error);
                }
            );
        });
    }
}
