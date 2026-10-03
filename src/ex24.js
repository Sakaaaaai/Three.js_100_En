// Exercise 24: Selecting 3D Objects with Raycaster
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

const cubes = [];
// --- Place 10 cubes at random positions here ---

camera.position.z = 10;

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

window.addEventListener("click", (event) => {
  // --- Do the click test and the color change here ---
});

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
