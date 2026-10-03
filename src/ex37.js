// Exercise 37: Creating a Ground
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

const loader = new THREE.TextureLoader();
const texture = loader.load(
  "https://threejs.org/examples/textures/terrain/grasslight-big.jpg"
);

// --- Configure the texture repeat here ---

// --- Create the ground here ---

camera.position.set(0, 2, 5);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
