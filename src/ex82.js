// Exercise 82: 3D Product Viewer (Configurator)
// Write your solution here. Stuck? Open the model answer from the panel in the top-right.

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

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

const controls = new OrbitControls(camera, renderer.domElement);

// Product model (a chair, etc.)
const seat = new THREE.Mesh(
  new THREE.BoxGeometry(1, 0.1, 1),
  new THREE.MeshStandardMaterial({ color: 0xffffff })
);
scene.add(seat);

// Create an HTML button
const btn = document.createElement("button");
btn.innerText = "Red";
btn.style.position = "absolute";
btn.style.top = "10px";
btn.style.left = "10px";
document.body.appendChild(btn);

btn.addEventListener("click", () => {
  // --- Change the color and move the camera ---
});

camera.position.set(2, 2, 2);

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();
