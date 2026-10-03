// Exercise 39: CanvasTexture (Dynamic Textures)
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

// 1. Create and draw on the Canvas
const canvas = document.createElement("canvas");
canvas.width = 256;
canvas.height = 256;
const ctx = canvas.getContext("2d");

// --- Draw the background and text on the Canvas here ---

// 2. Create the texture
// const texture = new THREE.CanvasTexture(canvas);

// 3. Create the material and mesh
// --- Create the cube here and add it to the scene ---

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
