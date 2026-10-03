// Exercise 40: Dynamic Canvas Texture (Animation)
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

  // 1. Reset the background (fill it in)
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, 256, 256);

  // 2. Draw the current time
  const date = new Date();
  const timeStr =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  ctx.font = "bold 40px Arial";
  ctx.fillStyle = "#ff0000";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(timeStr, 128, 128);

  // 3. Set the texture update flag (required!)
  texture.needsUpdate = true;

  // Rotate the cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();
