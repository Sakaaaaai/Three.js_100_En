// Exercise 71: Using PBR Materials (Physically Based Rendering)
// Write your solution here. Stuck? Open the model answer from the panel in the top-right.

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping; // Realistic tone mapping
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

// Load the environment map (required)
const loader = new THREE.TextureLoader();
// loader.load('...', (texture) => {
//     texture.mapping = THREE.EquirectangularReflectionMapping;
//     scene.environment = texture;
//     scene.background = texture;
// });

// --- Place multiple spheres here ---

camera.position.z = 10;

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();
