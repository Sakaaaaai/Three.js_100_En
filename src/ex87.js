// Exercise 87: Shooting Game (Simple Version)
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

const bullets = [];
const enemies = [];

// Fire
document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    // Create a bullet
  }
});

// Spawn enemies
setInterval(() => {
  // Create an enemy
}, 1000);

camera.position.y = 2;
camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  // --- Movement and collision detection ---

  renderer.render(scene, camera);
}
animate();
