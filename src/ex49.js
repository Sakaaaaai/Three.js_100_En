// Exercise 49: Camera Path Animation (Roller Coaster)
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

// Reference grid
scene.add(new THREE.GridHelper(50, 50));
scene.add(new THREE.AxesHelper(5));

// --- Create the curve ---
// const curve = ...

let progress = 0;

function animate() {
  requestAnimationFrame(animate);

  // --- Update the camera position and orientation here ---

  renderer.render(scene, camera);
}
animate();
