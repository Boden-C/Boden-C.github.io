/**
 * Digital Sculpture - Interactive 3D Art Installation
 * A complex geometric structure that evolves from minimalistic monolith to organic bloom
 */

import * as THREE from "three";

interface SculptureElement {
    mesh: THREE.Mesh;
    basePosition: THREE.Vector3;
    baseRotation: THREE.Euler;
    baseScale: THREE.Vector3;
    targetPosition: THREE.Vector3;
    targetRotation: THREE.Euler;
    targetScale: THREE.Vector3;
    animationPhase: number;
    evolutionLevel: number;
    layer: number;
    id: number;
}

interface ColorProfile {
    primary: THREE.Color;
    secondary: THREE.Color;
    tertiary: THREE.Color;
    accent: THREE.Color;
}

class DigitalSculpture {
    private scene!: THREE.Scene;
    private camera!: THREE.PerspectiveCamera;
    private renderer!: THREE.WebGLRenderer;
    private elements: SculptureElement[] = [];
    private sculptureGroup!: THREE.Group;
    private time: number = 0;
    private scrollProgress: number = 0;
    private mousePosition: THREE.Vector2 = new THREE.Vector2();
    private canvas: HTMLCanvasElement; // Performance-optimized sculpture parameters
    private readonly TOTAL_ELEMENTS = 600; // Optimized for 60fps
    private readonly SCULPTURE_HEIGHT = 150; // 300vh total
    private readonly CORE_RADIUS = 1.5;
    private readonly LAYERS = 30;
    private readonly SNAKE_AMPLITUDE = 20; // Horizontal movement range

    // Color profiles for different evolution stages
    private colorProfiles: ColorProfile[] = [
        {
            primary: new THREE.Color(0x00ffff),
            secondary: new THREE.Color(0x0099cc),
            tertiary: new THREE.Color(0x006699),
            accent: new THREE.Color(0x003366),
        },
        {
            primary: new THREE.Color(0xff0080),
            secondary: new THREE.Color(0xff3399),
            tertiary: new THREE.Color(0xcc0066),
            accent: new THREE.Color(0x990033),
        },
        {
            primary: new THREE.Color(0x8000ff),
            secondary: new THREE.Color(0x9933cc),
            tertiary: new THREE.Color(0x6600cc),
            accent: new THREE.Color(0x330066),
        },
        {
            primary: new THREE.Color(0xffff00),
            secondary: new THREE.Color(0xcccc00),
            tertiary: new THREE.Color(0x999900),
            accent: new THREE.Color(0x666600),
        },
    ];

    constructor() {
        this.canvas = document.getElementById("sculpture-canvas") as HTMLCanvasElement;
        this.initThreeJS();
        this.createSculpture();
        this.setupEventListeners();
        this.animate();
        this.hideLoadingScreen();
    }

    private initThreeJS(): void {
        // Scene setup
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.Fog(0x000000, 50, 200);

        // Camera setup
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.set(0, 0, 50);

        // Renderer setup
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.2;

        // Sculpture group
        this.sculptureGroup = new THREE.Group();
        this.scene.add(this.sculptureGroup);

        // Lighting setup
        this.setupLighting();
    }

    private setupLighting(): void {
        // Ambient light
        const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
        this.scene.add(ambientLight);

        // Main directional light
        const mainLight = new THREE.DirectionalLight(0x00ffff, 1.5);
        mainLight.position.set(20, 50, 30);
        mainLight.castShadow = true;
        mainLight.shadow.mapSize.width = 2048;
        mainLight.shadow.mapSize.height = 2048;
        mainLight.shadow.camera.near = 0.1;
        mainLight.shadow.camera.far = 200;
        mainLight.shadow.camera.left = -50;
        mainLight.shadow.camera.right = 50;
        mainLight.shadow.camera.top = 50;
        mainLight.shadow.camera.bottom = -50;
        this.scene.add(mainLight);

        // Accent lights
        const accentLight1 = new THREE.PointLight(0xff0080, 2, 100);
        accentLight1.position.set(-30, 0, 20);
        this.scene.add(accentLight1);

        const accentLight2 = new THREE.PointLight(0x8000ff, 2, 100);
        accentLight2.position.set(30, -20, 20);
        this.scene.add(accentLight2);

        // Rim light
        const rimLight = new THREE.DirectionalLight(0xffffff, 0.8);
        rimLight.position.set(-20, 10, -30);
        this.scene.add(rimLight);
    }
    private createSculpture(): void {
        const geometries = [
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.BoxGeometry(1, 2, 0.5),
            new THREE.BoxGeometry(0.5, 0.5, 2),
            new THREE.BoxGeometry(2, 0.3, 0.8),
            new THREE.BoxGeometry(0.8, 1.5, 0.3),
        ];

        for (let i = 0; i < this.TOTAL_ELEMENTS; i++) {
            const layer = Math.floor((i / this.TOTAL_ELEMENTS) * this.LAYERS);
            const layerProgress = layer / this.LAYERS;

            // Snake path calculation: Right → Left → Right
            let sculptureX = 0;
            if (layerProgress <= 0.33) {
                // Stage 1: On the right (monolith)
                sculptureX = this.SNAKE_AMPLITUDE;
            } else if (layerProgress <= 0.66) {
                // Stage 2: Snake to left for bloom
                const snakeProgress = (layerProgress - 0.33) / 0.33;
                sculptureX = this.SNAKE_AMPLITUDE - snakeProgress * this.SNAKE_AMPLITUDE * 2;
            } else {
                // Stage 3: Snake to right for flower
                const returnProgress = (layerProgress - 0.66) / 0.34;
                sculptureX = -this.SNAKE_AMPLITUDE + returnProgress * this.SNAKE_AMPLITUDE * 2;
            }

            const y = (layerProgress - 0.5) * this.SCULPTURE_HEIGHT;

            // Base geometric positioning - cylindrical core
            const elementsPerLayer = Math.floor(this.TOTAL_ELEMENTS / this.LAYERS);
            const angleStep = (Math.PI * 2) / Math.max(1, elementsPerLayer);
            const angle = (i % elementsPerLayer) * angleStep;
            const radius = this.CORE_RADIUS + Math.sin(layerProgress * Math.PI) * 0.5;

            const baseX = sculptureX + Math.cos(angle) * radius;
            const baseZ = Math.sin(angle) * radius;

            // Create mesh
            const geometry = geometries[Math.floor(Math.random() * geometries.length)];
            const material = this.createMaterial(layerProgress, i);
            const mesh = new THREE.Mesh(geometry, material);

            mesh.position.set(baseX, y, baseZ);
            mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);

            const scale = 0.4 + Math.random() * 1.2;
            mesh.scale.set(scale, scale, scale);
            mesh.castShadow = true;
            mesh.receiveShadow = true;

            this.sculptureGroup.add(mesh);

            // Create sculpture element data
            const element: SculptureElement = {
                mesh,
                basePosition: mesh.position.clone(),
                baseRotation: mesh.rotation.clone(),
                baseScale: mesh.scale.clone(),
                targetPosition: this.calculateEvolutionPosition(baseX, y, baseZ, layerProgress, i),
                targetRotation: this.calculateEvolutionRotation(layerProgress, i),
                targetScale: this.calculateEvolutionScale(layerProgress, i),
                animationPhase: Math.random() * Math.PI * 2,
                evolutionLevel: 0,
                layer,
                id: i,
            };

            this.elements.push(element);
        }
    }

    private createMaterial(layerProgress: number, _elementId: number): THREE.MeshPhongMaterial {
        const colorProfile = this.colorProfiles[Math.floor(layerProgress * (this.colorProfiles.length - 1))];
        const nextProfile =
            this.colorProfiles[
                Math.min(this.colorProfiles.length - 1, Math.floor(layerProgress * (this.colorProfiles.length - 1)) + 1)
            ];

        const blendFactor = (layerProgress * (this.colorProfiles.length - 1)) % 1;
        const color = new THREE.Color().lerpColors(colorProfile.primary, nextProfile.primary, blendFactor);

        return new THREE.MeshPhongMaterial({
            color,
            shininess: 100,
            specular: new THREE.Color(0x555555),
            transparent: true,
            opacity: 0.9,
            emissive: color.clone().multiplyScalar(0.1),
        });
    }
    private calculateEvolutionPosition(
        baseX: number,
        baseY: number,
        baseZ: number,
        layerProgress: number,
        elementId: number
    ): THREE.Vector3 {
        const scrollStage = this.getScrollStage(layerProgress);

        switch (scrollStage) {
            case "monolith":
                // Keep original position (minimal movement)
                return new THREE.Vector3(baseX, baseY, baseZ);

            case "bloom":
                // Geometric petal bloom on the left
                return this.calculateBloomPosition(baseX, baseY, baseZ, layerProgress, elementId);

            case "flower":
                // Beautiful organic flower on the right
                return this.calculateFlowerPosition(baseX, baseY, baseZ, layerProgress, elementId);

            default:
                return new THREE.Vector3(baseX, baseY, baseZ);
        }
    }

    private getScrollStage(layerProgress: number): "monolith" | "bloom" | "flower" {
        if (layerProgress <= 0.33) return "monolith";
        if (layerProgress <= 0.66) return "bloom";
        return "flower";
    }
    private calculateBloomPosition(
        baseX: number,
        baseY: number,
        baseZ: number,
        layerProgress: number,
        elementId: number
    ): THREE.Vector3 {
        // More structured geometric bloom - 12 precise petals
        const bloomProgress = (layerProgress - 0.33) / 0.33; // 0-1 for bloom stage
        const petalCount = 12;
        const petalAngle = (elementId % petalCount) * ((Math.PI * 2) / petalCount);

        // Early stage: tight geometric formation
        if (bloomProgress <= 0.5) {
            const layerRadius = 6 + bloomProgress * 12;
            const petalX = baseX + Math.cos(petalAngle) * layerRadius;
            const petalY = baseY + Math.sin(bloomProgress * Math.PI * 3) * 2;
            const petalZ = baseZ + Math.sin(petalAngle) * layerRadius * 0.5;
            return new THREE.Vector3(petalX, petalY, petalZ);
        }

        // Late stage: controlled chaotic spread
        const chaosProgress = (bloomProgress - 0.5) / 0.5;
        const spreadRadius = 18 + chaosProgress * 15;

        // Maintain some petal structure while adding chaos
        const structuredX = baseX + Math.cos(petalAngle) * spreadRadius * (1 - chaosProgress * 0.3);
        const structuredZ = baseZ + Math.sin(petalAngle) * spreadRadius * 0.7 * (1 - chaosProgress * 0.3);

        // Add controlled chaos
        const chaosX = structuredX + Math.sin(elementId * 0.7) * 8 * chaosProgress;
        const chaosY =
            baseY + Math.sin(bloomProgress * Math.PI * 4) * 4 + Math.cos(elementId * 0.5) * 3 * chaosProgress;
        const chaosZ = structuredZ + Math.cos(elementId * 0.6) * 8 * chaosProgress;

        return new THREE.Vector3(chaosX, chaosY, chaosZ);
    }

    private calculateFlowerPosition(
        baseX: number,
        baseY: number,
        baseZ: number,
        layerProgress: number,
        elementId: number
    ): THREE.Vector3 {
        // Beautiful organic flower structure
        const flowerProgress = (layerProgress - 0.66) / 0.34; // 0-1 for flower stage
        const spiralAngle = elementId * 0.618 + flowerProgress * Math.PI * 6; // Golden ratio for natural spiral
        const spiralRadius = 12 + flowerProgress * 25;

        // Fibonacci spiral for natural flower appearance
        const t = elementId * 0.1 + flowerProgress * 4;
        const fibRadius = Math.sqrt(t) * 3;
        const fibAngle = t * 2.39996; // Golden angle

        const flowerX = baseX + Math.cos(fibAngle) * fibRadius + Math.cos(spiralAngle) * spiralRadius * 0.3;
        const flowerY = baseY + Math.sin(flowerProgress * Math.PI) * 8 + Math.sin(t * 0.5) * 2;
        const flowerZ = baseZ + Math.sin(fibAngle) * fibRadius + Math.sin(spiralAngle) * spiralRadius * 0.3;

        // Add organic variation
        const organicVariation = Math.sin(elementId * 0.3) * 2 * flowerProgress;

        return new THREE.Vector3(flowerX + organicVariation, flowerY, flowerZ + organicVariation * 0.5);
    }

    private calculateEvolutionRotation(layerProgress: number, elementId: number): THREE.Euler {
        const rotationSpeed = 1 + layerProgress * 2;
        return new THREE.Euler(
            Math.sin(elementId * 0.1) * Math.PI * rotationSpeed,
            Math.cos(elementId * 0.15) * Math.PI * rotationSpeed,
            Math.sin(elementId * 0.2) * Math.PI * rotationSpeed
        );
    }

    private calculateEvolutionScale(layerProgress: number, elementId: number): THREE.Vector3 {
        const baseScale = 0.3 + layerProgress * 2;
        const variation = 1 + Math.sin(elementId * 0.1) * 0.5;
        return new THREE.Vector3(baseScale * variation, baseScale * variation, baseScale * variation);
    }

    private setupEventListeners(): void {
        // Scroll handler
        window.addEventListener("scroll", () => {
            this.scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
            this.updateProgressIndicator();
            this.updateTextContentVisibility();
        });

        // Mouse movement
        window.addEventListener("mousemove", (event) => {
            this.mousePosition.x = (event.clientX / window.innerWidth) * 2 - 1;
            this.mousePosition.y = -(event.clientY / window.innerHeight) * 2 + 1;
            this.updateCursor(event);
        });

        // Resize handler
        window.addEventListener("resize", () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // Hover detection for interactive elements
        document.querySelectorAll(".text-content, a, button").forEach((element) => {
            element.addEventListener("mouseenter", () => {
                document.getElementById("cursor")?.classList.add("hover");
            });
            element.addEventListener("mouseleave", () => {
                document.getElementById("cursor")?.classList.remove("hover");
            });
        });
    }

    private updateCursor(event: MouseEvent): void {
        const cursor = document.getElementById("cursor");
        if (cursor) {
            cursor.style.left = `${event.clientX}px`;
            cursor.style.top = `${event.clientY}px`;
        }
    }

    private updateProgressIndicator(): void {
        const indicator = document.getElementById("progress-indicator");
        if (indicator) {
            indicator.style.transform = `scaleX(${this.scrollProgress})`;
            indicator.setAttribute("aria-valuenow", Math.round(this.scrollProgress * 100).toString());
        }
    }
    private updateTextContentVisibility(): void {
        const sections = document.querySelectorAll(".content-section");
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.getBoundingClientRect().height;
            const textContent = section.querySelector(".text-content");

            if (textContent && sectionTop < window.innerHeight * 0.8 && sectionTop > -sectionHeight * 0.5) {
                textContent.classList.add("visible");
            }
        });
    }

    private updateSculpture(): void {
        // Evolution based on scroll progress
        const evolutionIntensity = Math.pow(this.scrollProgress, 1.5);

        this.elements.forEach((element) => {
            // Layer-based evolution timing
            const layerDelay = (element.layer / this.LAYERS) * 0.3;
            const adjustedProgress = Math.max(0, evolutionIntensity - layerDelay);

            // Smooth evolution interpolation
            const evolutionEase = this.easeInOutQuart(Math.min(1, adjustedProgress * 1.5));
            element.evolutionLevel = evolutionEase;

            // Position interpolation
            element.mesh.position.lerpVectors(element.basePosition, element.targetPosition, evolutionEase);

            // Rotation interpolation with continuous animation
            const baseRotX = element.baseRotation.x + Math.sin(this.time * 0.5 + element.animationPhase) * 0.1;
            const baseRotY = element.baseRotation.y + Math.cos(this.time * 0.3 + element.animationPhase) * 0.1;
            const baseRotZ = element.baseRotation.z + Math.sin(this.time * 0.7 + element.animationPhase) * 0.1;

            const targetRotX = element.targetRotation.x + Math.sin(this.time * 1.2 + element.animationPhase) * 0.3;
            const targetRotY = element.targetRotation.y + Math.cos(this.time * 0.8 + element.animationPhase) * 0.3;
            const targetRotZ = element.targetRotation.z + Math.sin(this.time * 1.5 + element.animationPhase) * 0.3;

            element.mesh.rotation.x = THREE.MathUtils.lerp(baseRotX, targetRotX, evolutionEase);
            element.mesh.rotation.y = THREE.MathUtils.lerp(baseRotY, targetRotY, evolutionEase);
            element.mesh.rotation.z = THREE.MathUtils.lerp(baseRotZ, targetRotZ, evolutionEase);

            // Scale interpolation with breathing effect
            const breathingScale = 1 + Math.sin(this.time * 2 + element.animationPhase) * 0.05 * evolutionEase;
            const currentScale = new THREE.Vector3()
                .lerpVectors(element.baseScale, element.targetScale, evolutionEase)
                .multiplyScalar(breathingScale);

            element.mesh.scale.copy(currentScale);

            // Color evolution
            this.updateElementColor(element, evolutionEase);
        });

        // Camera movement based on scroll and mouse
        this.updateCamera();

        // Dynamic lighting
        this.updateLighting();
    }

    private updateElementColor(element: SculptureElement, evolutionLevel: number): void {
        const material = element.mesh.material as THREE.MeshPhongMaterial;
        const layerProgress = element.layer / this.LAYERS;

        // Color transition based on evolution and layer
        const profileIndex = Math.floor(layerProgress * (this.colorProfiles.length - 1));
        const nextProfileIndex = Math.min(this.colorProfiles.length - 1, profileIndex + 1);
        const profileBlend = (layerProgress * (this.colorProfiles.length - 1)) % 1;

        const baseColor = new THREE.Color().lerpColors(
            this.colorProfiles[profileIndex].primary,
            this.colorProfiles[nextProfileIndex].primary,
            profileBlend
        );

        const evolvedColor = new THREE.Color().lerpColors(
            baseColor,
            this.colorProfiles[nextProfileIndex].accent,
            evolutionLevel
        );

        // Pulsing effect
        const pulseIntensity = 0.5 + Math.sin(this.time * 3 + element.animationPhase) * 0.3;
        const finalColor = evolvedColor.clone().lerp(new THREE.Color(0xffffff), pulseIntensity * evolutionLevel * 0.2);

        material.color = finalColor;
        material.emissive = finalColor.clone().multiplyScalar(0.1 + evolutionLevel * 0.2);
        material.opacity = 0.7 + evolutionLevel * 0.3;
    }

    private updateCamera(): void {
        // Scroll-based camera movement
        const targetY = this.scrollProgress * -30;
        const targetZ = 50 - this.scrollProgress * 20;

        // Mouse-based camera movement
        const mouseInfluence = 0.1;
        const targetX = this.mousePosition.x * mouseInfluence * 5;

        // Smooth camera movement
        this.camera.position.x = THREE.MathUtils.lerp(this.camera.position.x, targetX, 0.02);
        this.camera.position.y = THREE.MathUtils.lerp(this.camera.position.y, targetY, 0.02);
        this.camera.position.z = THREE.MathUtils.lerp(this.camera.position.z, targetZ, 0.02);

        // Camera rotation based on mouse
        const targetRotationY = this.mousePosition.x * 0.1;
        const targetRotationX = this.mousePosition.y * 0.05;

        this.camera.rotation.y = THREE.MathUtils.lerp(this.camera.rotation.y, targetRotationY, 0.02);
        this.camera.rotation.x = THREE.MathUtils.lerp(this.camera.rotation.x, targetRotationX, 0.02);

        this.camera.lookAt(0, targetY, 0);
    }

    private updateLighting(): void {
        // Dynamic lighting based on evolution
        const lights = this.scene.children.filter((child) => child instanceof THREE.Light) as THREE.Light[];

        lights.forEach((light, index) => {
            if (light instanceof THREE.PointLight) {
                const originalIntensity = 2;
                const evolutionBoost = this.scrollProgress * 3;
                light.intensity = originalIntensity + evolutionBoost;

                // Animated light movement
                const offsetX = Math.sin(this.time * 0.5 + index) * 10;
                const offsetY = Math.cos(this.time * 0.3 + index) * 5;
                light.position.x += offsetX * 0.01;
                light.position.y += offsetY * 0.01;
            }
        });
    }

    private easeInOutQuart(t: number): number {
        return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
    }

    private animate(): void {
        requestAnimationFrame(() => this.animate());

        this.time += 0.016; // ~60fps
        this.updateSculpture();
        this.renderer.render(this.scene, this.camera);
    }

    private hideLoadingScreen(): void {
        setTimeout(() => {
            const loadingScreen = document.getElementById("loading-screen");
            if (loadingScreen) {
                loadingScreen.classList.add("hidden");
            }
        }, 1000);
    }
}

// Initialize the sculpture when the page loads
document.addEventListener("DOMContentLoaded", () => {
    new DigitalSculpture();
});

// Export for potential external use
export { DigitalSculpture };
