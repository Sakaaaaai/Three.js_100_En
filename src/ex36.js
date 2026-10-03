// Exercise 36: Animated GLTF Model
// Write your solution here. Stuck? Open the model answer from the panel in the top-right.

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(2, 2, 2);
scene.add(light);

let mixer; // For managing animation
const clock = new THREE.Clock();

const loader = new GLTFLoader();
loader.load(
  "https://threejs.org/examples/models/gltf/RobotExpressive/RobotExpressive.glb",
  (gltf) => {
    const model = gltf.scene;
    scene.add(model);

    // --- Prepare animation playback here ---
  }
);

camera.position.set(0, 2, 5);

function animate() {
  requestAnimationFrame(animate);

  // --- Update the Mixer here ---

  renderer.render(scene, camera);
}
animate();
