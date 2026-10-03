// Exercise 62: Explosion Effect (Spreading in All Directions)
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

// --- Explosion particle management ---
const particles = [];

function explode() {
  // Initialize the particles here
}

// Explode on click
window.addEventListener("click", explode);

camera.position.z = 10;

function animate() {
  requestAnimationFrame(animate);

  // --- Update the particles here ---

  renderer.render(scene, camera);
}
animate();
