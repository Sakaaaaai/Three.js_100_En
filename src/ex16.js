// Exercise 16: Applying a Texture to a Cube
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

// --- Load the texture ---
const loader = new THREE.TextureLoader();
const texture = loader.load("https://threejs.org/examples/textures/crate.gif");

// --- Create the cube here and apply the texture ---

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  // --- Rotation ---

  renderer.render(scene, camera);
}
animate();
