// Exercise 19: A Cylinder with CylinderGeometry
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

// --- Create the cylinder here ---

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  // Rotation
  renderer.render(scene, camera);
}
animate();
