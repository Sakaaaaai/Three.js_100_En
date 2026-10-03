// Exercise 98: Multiplayer Preparation (The Concept of Synchronization)
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

const playerMeshes = {}; // ID -> Mesh

function updatePlayers(serverData) {
  // 1. Create new ones & update
  // 2. Decide what to delete
}

// Update the mock server data
setInterval(() => {
  const mockData = {
    p1: { x: Math.random(), z: Math.random() },
    p2: { x: Math.random(), z: Math.random() },
  };
  updatePlayers(mockData);
}, 100);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
