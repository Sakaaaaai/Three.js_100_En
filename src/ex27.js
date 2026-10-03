// Exercise 27: Creating a Starfield
// Write your solution here. Stuck? Open the model answer from the panel in the top-right.

import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  2000
); // Make far large
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// --- Create the starfield here ---

function animate() {
  requestAnimationFrame(animate);
  // Rotate the starfield
  renderer.render(scene, camera);
}
animate();
