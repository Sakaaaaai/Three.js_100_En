// Exercise 28: Camera Movement Animation
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

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
);
scene.add(cube);

// Add a grid (to make the camera movement easier to see)
const gridHelper = new THREE.GridHelper(20, 20);
scene.add(gridHelper);

let angle = 0;
const radius = 5;

function animate() {
  requestAnimationFrame(animate);

  // --- Update the camera position here ---

  // --- Update the camera direction here ---

  renderer.render(scene, camera);
}
animate();
