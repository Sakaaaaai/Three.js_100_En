// Exercise 43: Using BufferGeometry (Massive Particles)
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

// --- Create the geometry and particles here ---
// const geometry = new THREE.BufferGeometry();
// const count = 1000;
// const positions = new Float32Array(count * 3);
// ...

camera.position.z = 15;

function animate() {
  requestAnimationFrame(animate);
  // It looks nice if you rotate it
  renderer.render(scene, camera);
}
animate();
