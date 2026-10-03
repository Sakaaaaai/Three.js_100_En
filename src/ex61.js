// Exercise 61: A Fire Effect (Particles)
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

const texture = new THREE.TextureLoader().load(
  "https://threejs.org/examples/textures/sprites/spark1.png"
);

// --- Create the particle system here ---
// Managing them in an array is the easy way

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  // --- Update the particles here ---

  renderer.render(scene, camera);
}
animate();
