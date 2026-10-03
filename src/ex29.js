// Exercise 29: Orthographic Camera (OrthographicCamera)
// Write your solution here. Stuck? Open the model answer from the panel in the top-right.

import * as THREE from "three";

const scene = new THREE.Scene();

// --- Create the OrthographicCamera here ---
// const aspect = window.innerWidth / window.innerHeight;
// const d = 5;
// const camera = ...

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Line up the cubes
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  wireframe: true,
});

for (let i = 0; i < 5; i++) {
  const cube = new THREE.Mesh(geometry, material);
  cube.position.z = -i * 2; // Toward the back
  cube.position.x = i * 0.5; // Offset slightly
  scene.add(cube);
}

// Grid
const gridHelper = new THREE.GridHelper(20, 20);
scene.add(gridHelper);

// Set the camera position
camera.position.set(5, 5, 5);
camera.lookAt(0, 0, 0);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
