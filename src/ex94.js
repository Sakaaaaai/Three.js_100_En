// Exercise 94: Data Visualization (Bar Chart)
// Write your solution here. Stuck? Open the model answer from the panel in the top-right.

import * as THREE from "three";

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

const data = [10, 50, 30, 80, 20, 90, 40, 60];

// --- Create the chart here ---
// data.forEach((val, i) => { ... });

camera.position.set(5, 10, 20);
camera.lookAt(5, 0, 0);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
