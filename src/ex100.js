// Exercise 100: Galaxy Simulation (Capstone Project)
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
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

// --- Galaxy generation logic goes here ---
// const geometry = new THREE.BufferGeometry();
// ...

camera.position.set(0, 3, 5);

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();
