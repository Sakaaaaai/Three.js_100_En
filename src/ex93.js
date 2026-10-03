// Exercise 93: Particle-Based VFX (Magic Circle)
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

// --- Create the particles here ---

camera.position.set(0, 5, 10);
camera.lookAt(0, 0, 0);

function animate() {
  requestAnimationFrame(animate);

  // --- Animation ---

  renderer.render(scene, camera);
}
animate();
