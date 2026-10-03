// Exercise 39: CanvasTexture (Dynamic Textures)
// Model answer

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

// 1. Create the Canvas
const canvas = document.createElement("canvas");
canvas.width = 512;
canvas.height = 512;
const ctx = canvas.getContext("2d");

// 2. Draw on the Canvas
// Make the background white
ctx.fillStyle = "#ffffff";
ctx.fillRect(0, 0, 512, 512);

// Draw the text
ctx.font = "bold 60px Arial";
ctx.fillStyle = "#000000";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.fillText("Hello Three.js", 256, 256);

// Let's draw a border too
ctx.strokeStyle = "#ff0000";
ctx.lineWidth = 20;
ctx.strokeRect(20, 20, 472, 472);

// 3. Create the CanvasTexture
const texture = new THREE.CanvasTexture(canvas);

// 4. Apply it to the cube
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({ map: texture });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();
