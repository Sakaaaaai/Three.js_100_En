# Three.js 100 Drills - Exercise Environment

The exercise repository for the Udemy course "Three.js 100 Drills".
**It runs entirely in your browser on StackBlitz. There is nothing to install.**

## Open this and you can solve all 100 exercises

### https://stackblitz.com/github/Sakaaaaai/Three.js_100_En

## How to use it

1. Open the link above. `npm install` and `npm run dev` run automatically
   (about 30 seconds the first time).
2. Use the dropdown in the **panel at the top right** to pick an exercise (1-100).
3. The panel shows `Editing: src/exNN.js`. Open that file from the file tree on the left.
4. Edit `src/exNN.js` and the preview on the right updates immediately.
5. If you get stuck, press **Answer** in the panel to see the model answer.

> Recommended browsers: Chrome / Edge (Safari 16.4 or newer).
> To keep the code you write, press `Fork` at the top right of StackBlitz
> (a free account is enough).

## Running it locally

```bash
git clone https://github.com/Sakaaaaai/Three.js_100_En.git
cd Three.js_100_En
npm install
npm run dev
```

## Layout

| Path | Contents |
| --- | --- |
| `src/exNN.js` | Starter code for each exercise (this is what you edit) |
| `solutions/solNN.js` | Model answer for each exercise |
| `main.js` | The exercise switcher (no need to edit) |
| `exercises.json` | Exercise numbers and titles |

The preview URL is `?q=50` for exercise 50's starter and `?q=50&a=1` for its answer.

## Exercise list

If you would rather jump straight to one exercise, use the links below
(they open the editor on that file with the preview already on that exercise).

| No. | Title | Open directly |
| --- | --- | --- |
| 1 | Three.js Basics: Setting Up the Scene, Camera, and Renderer | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex01.js&initialpath=%2F%3Fq%3D1) |
| 2 | Display a Cube with BoxGeometry | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex02.js&initialpath=%2F%3Fq%3D2) |
| 3 | Create a Sphere with SphereGeometry | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex03.js&initialpath=%2F%3Fq%3D3) |
| 4 | Change a Material's Color | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex04.js&initialpath=%2F%3Fq%3D4) |
| 5 | Change an Object's Position | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex05.js&initialpath=%2F%3Fq%3D5) |
| 6 | Rotate an Object | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex06.js&initialpath=%2F%3Fq%3D6) |
| 7 | Change an Object's Scale | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex07.js&initialpath=%2F%3Fq%3D7) |
| 8 | Implement an Animation Loop | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex08.js&initialpath=%2F%3Fq%3D8) |
| 9 | A Self-Rotating Cube | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex09.js&initialpath=%2F%3Fq%3D9) |
| 10 | Add OrbitControls | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex10.js&initialpath=%2F%3Fq%3D10) |
| 11 | Place Multiple Objects | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex11.js&initialpath=%2F%3Fq%3D11) |
| 12 | Adding Light (DirectionalLight) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex12.js&initialpath=%2F%3Fq%3D12) |
| 13 | Adding Light (SpotLight) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex13.js&initialpath=%2F%3Fq%3D13) |
| 14 | Setting Up Shadows | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex14.js&initialpath=%2F%3Fq%3D14) |
| 15 | Loading a Texture | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex15.js&initialpath=%2F%3Fq%3D15) |
| 16 | Applying a Texture to a Cube | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex16.js&initialpath=%2F%3Fq%3D16) |
| 17 | Creating a WireframeGeometry | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex17.js&initialpath=%2F%3Fq%3D17) |
| 18 | A Donut Shape with TorusGeometry | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex18.js&initialpath=%2F%3Fq%3D18) |
| 19 | A Cylinder with CylinderGeometry | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex19.js&initialpath=%2F%3Fq%3D19) |
| 20 | Managing Multiple Objects with Groups | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex20.js&initialpath=%2F%3Fq%3D20) |
| 21 | Changing an Object's Color with a Mouse Click | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex21.js&initialpath=%2F%3Fq%3D21) |
| 22 | Enlarge on Mouse Hover | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex22.js&initialpath=%2F%3Fq%3D22) |
| 23 | Move an Object with the Keyboard | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex23.js&initialpath=%2F%3Fq%3D23) |
| 24 | Selecting 3D Objects with Raycaster | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex24.js&initialpath=%2F%3Fq%3D24) |
| 25 | Animation Curves (Tween.js Style) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex25.js&initialpath=%2F%3Fq%3D25) |
| 26 | Particle System Basics | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex26.js&initialpath=%2F%3Fq%3D26) |
| 27 | Creating a Starfield | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex27.js&initialpath=%2F%3Fq%3D27) |
| 28 | Camera Movement Animation | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex28.js&initialpath=%2F%3Fq%3D28) |
| 29 | Orthographic Camera (OrthographicCamera) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex29.js&initialpath=%2F%3Fq%3D29) |
| 30 | Adding Fog | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex30.js&initialpath=%2F%3Fq%3D30) |
| 31 | Environment Mapping | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex31.js&initialpath=%2F%3Fq%3D31) |
| 32 | Applying a Bump Map | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex32.js&initialpath=%2F%3Fq%3D32) |
| 33 | Applying a Normal Map | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex33.js&initialpath=%2F%3Fq%3D33) |
| 34 | Using Multiple Materials | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex34.js&initialpath=%2F%3Fq%3D34) |
| 35 | Loading a GLTF Model | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex35.js&initialpath=%2F%3Fq%3D35) |
| 36 | Animated GLTF Model | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex36.js&initialpath=%2F%3Fq%3D36) |
| 37 | Creating a Ground | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex37.js&initialpath=%2F%3Fq%3D37) |
| 38 | Implementing a Skybox | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex38.js&initialpath=%2F%3Fq%3D38) |
| 39 | CanvasTexture (Dynamic Textures) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex39.js&initialpath=%2F%3Fq%3D39) |
| 40 | Dynamic Canvas Texture (Animation) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex40.js&initialpath=%2F%3Fq%3D40) |
| 41 | Creating a Custom Geometry | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex41.js&initialpath=%2F%3Fq%3D41) |
| 42 | Setting Vertex Colors | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex42.js&initialpath=%2F%3Fq%3D42) |
| 43 | Using BufferGeometry (Massive Particles) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex43.js&initialpath=%2F%3Fq%3D43) |
| 44 | Instancing (Massive Numbers of Objects) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex44.js&initialpath=%2F%3Fq%3D44) |
| 45 | Implementing LOD (Level of Detail) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex45.js&initialpath=%2F%3Fq%3D45) |
| 46 | Using Sprites | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex46.js&initialpath=%2F%3Fq%3D46) |
| 47 | Billboard Effect (Implemented with a Mesh) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex47.js&initialpath=%2F%3Fq%3D47) |
| 48 | Moving Along a Path | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex48.js&initialpath=%2F%3Fq%3D48) |
| 49 | Camera Path Animation (Roller Coaster) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex49.js&initialpath=%2F%3Fq%3D49) |
| 50 | Post-Processing Basics (EffectComposer) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex50.js&initialpath=%2F%3Fq%3D50) |
| 51 | A Simple Custom Shader (ShaderMaterial) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex51.js&initialpath=%2F%3Fq%3D51) |
| 52 | A Wavy Plane with the Vertex Shader | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex52.js&initialpath=%2F%3Fq%3D52) |
| 53 | A Gradient with the Fragment Shader | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex53.js&initialpath=%2F%3Fq%3D53) |
| 54 | A Shader Using Noise | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex54.js&initialpath=%2F%3Fq%3D54) |
| 55 | Time-Varying Shaders (Cycling Colors) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex55.js&initialpath=%2F%3Fq%3D55) |
| 56 | The Fresnel Effect (Glowing Outlines) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex56.js&initialpath=%2F%3Fq%3D56) |
| 57 | Rim Lighting (Backlight Effect) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex57.js&initialpath=%2F%3Fq%3D57) |
| 58 | The Hologram Effect (Scanlines) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex58.js&initialpath=%2F%3Fq%3D58) |
| 59 | The Dissolve Effect (Disappearing Effect) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex59.js&initialpath=%2F%3Fq%3D59) |
| 60 | A Water Surface Shader (Simple Version) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex60.js&initialpath=%2F%3Fq%3D60) |
| 61 | A Fire Effect (Particles) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex61.js&initialpath=%2F%3Fq%3D61) |
| 62 | Explosion Effect (Spreading in All Directions) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex62.js&initialpath=%2F%3Fq%3D62) |
| 63 | Bloom Effect (Glowing Visuals) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex63.js&initialpath=%2F%3Fq%3D63) |
| 64 | Glitch Effect (GlitchPass) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex64.js&initialpath=%2F%3Fq%3D64) |
| 65 | RGB Shift (Chromatic Aberration) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex65.js&initialpath=%2F%3Fq%3D65) |
| 66 | Depth of Field (DOF) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex66.js&initialpath=%2F%3Fq%3D66) |
| 67 | Motion Blur (Afterimage) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex67.js&initialpath=%2F%3Fq%3D67) |
| 68 | Outline Effect (OutlinePass) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex68.js&initialpath=%2F%3Fq%3D68) |
| 69 | Toon Shading (ToonMaterial) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex69.js&initialpath=%2F%3Fq%3D69) |
| 70 | Flat Shading (Low-Poly Look) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex70.js&initialpath=%2F%3Fq%3D70) |
| 71 | Using PBR Materials (Physically Based Rendering) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex71.js&initialpath=%2F%3Fq%3D71) |
| 72 | Reflection Probe (CubeCamera) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex72.js&initialpath=%2F%3Fq%3D72) |
| 73 | Reflection (Reflector) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex73.js&initialpath=%2F%3Fq%3D73) |
| 74 | Refraction with Environment Maps (Refraction Mapping) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex74.js&initialpath=%2F%3Fq%3D74) |
| 75 | Glass Material (PhysicalMaterial) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex75.js&initialpath=%2F%3Fq%3D75) |
| 76 | Metallic Material (Clearcoat) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex76.js&initialpath=%2F%3Fq%3D76) |
| 77 | Subsurface Scattering (SSS) Style Rendering | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex77.js&initialpath=%2F%3Fq%3D77) |
| 78 | Volumetric Light (God Rays) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex78.js&initialpath=%2F%3Fq%3D78) |
| 79 | Lens Flare (Lensflare) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex79.js&initialpath=%2F%3Fq%3D79) |
| 80 | Advanced Particle Animation (Morphing) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex80.js&initialpath=%2F%3Fq%3D80) |
| 81 | Drag and Drop (DragControls) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex81.js&initialpath=%2F%3Fq%3D81) |
| 82 | 3D Product Viewer (Configurator) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex82.js&initialpath=%2F%3Fq%3D82) |
| 83 | Solar System Simulation (Hierarchy) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex83.js&initialpath=%2F%3Fq%3D83) |
| 84 | Mini Racing Game (Basics) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex84.js&initialpath=%2F%3Fq%3D84) |
| 85 | Jumping Game (Implementing Gravity) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex85.js&initialpath=%2F%3Fq%3D85) |
| 86 | Puzzle Game (Selection with Raycaster) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex86.js&initialpath=%2F%3Fq%3D86) |
| 87 | Shooting Game (Simple Version) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex87.js&initialpath=%2F%3Fq%3D87) |
| 88 | Character Movement System (Smooth Rotation) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex88.js&initialpath=%2F%3Fq%3D88) |
| 89 | Third-Person Camera (TPS View) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex89.js&initialpath=%2F%3Fq%3D89) |
| 90 | Inventory System UI (HTML Integration) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex90.js&initialpath=%2F%3Fq%3D90) |
| 91 | Integrating Physics (Cannon.js / Ammo.js) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex91.js&initialpath=%2F%3Fq%3D91) |
| 92 | Collision Detection System (Custom) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex92.js&initialpath=%2F%3Fq%3D92) |
| 93 | Particle-Based VFX (Magic Circle) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex93.js&initialpath=%2F%3Fq%3D93) |
| 94 | Data Visualization (Bar Chart) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex94.js&initialpath=%2F%3Fq%3D94) |
| 95 | 3D Graph (Surface Plot) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex95.js&initialpath=%2F%3Fq%3D95) |
| 96 | Integrating HTML Elements (CSS2DRenderer) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex96.js&initialpath=%2F%3Fq%3D96) |
| 97 | AR Experience Basics (WebXR AR) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex97.js&initialpath=%2F%3Fq%3D97) |
| 98 | Multiplayer Preparation (The Concept of Synchronization) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex98.js&initialpath=%2F%3Fq%3D98) |
| 99 | Performance Optimization (Merging and Disposal) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex99.js&initialpath=%2F%3Fq%3D99) |
| 100 | Galaxy Simulation (Capstone Project) | [Open](https://stackblitz.com/github/Sakaaaaai/Three.js_100_En?file=src%2Fex100.js&initialpath=%2F%3Fq%3D100) |
