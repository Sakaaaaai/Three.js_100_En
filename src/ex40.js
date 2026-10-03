// Exercise 40: Dynamic Canvas Texture (Animation)
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

// Create the Canvas
const canvas = document.createElement("canvas");
canvas.width = 256;
canvas.height = 256;
const ctx = canvas.getContext("2d");

const texture = new THREE.CanvasTexture(canvas);
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2),
  new THREE.MeshBasicMaterial({ map: texture })
);
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  // --- Update the Canvas here ---
  // 1. Clear the background
  // 2. Draw the text (Date.now(), etc.)
  // 3. texture.needsUpdate = true;

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();
