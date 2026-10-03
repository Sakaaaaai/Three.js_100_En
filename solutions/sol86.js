// Exercise 86: Puzzle Game (Selection with Raycaster)
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

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

const gridSize = 3;
const cubes = []; // Manage them in a 1D array and find neighbors with index calculations

// Initialization
for (let i = 0; i < gridSize * gridSize; i++) {
  const geometry = new THREE.BoxGeometry(0.8, 0.8, 0.1);
  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Red
  const mesh = new THREE.Mesh(geometry, material);

  const x = (i % gridSize) - 1;
  const y = Math.floor(i / gridSize) - 1;

  mesh.position.set(x, y, 0);
  mesh.userData = { index: i, active: false }; // Hold the state

  scene.add(mesh);
  cubes.push(mesh);
}

function toggle(index) {
  if (index < 0 || index >= cubes.length) return;

  const mesh = cubes[index];
  mesh.userData.active = !mesh.userData.active;
  mesh.material.color.set(mesh.userData.active ? 0x0000ff : 0xff0000);
}

window.addEventListener("click", (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(cubes);

  if (intersects.length > 0) {
    const index = intersects[0].object.userData.index;
    const x = index % gridSize;
    const y = Math.floor(index / gridSize);

    toggle(index); // Itself
    if (x > 0) toggle(index - 1); // Left
    if (x < gridSize - 1) toggle(index + 1); // Right
    if (y > 0) toggle(index - gridSize); // Down
    if (y < gridSize - 1) toggle(index + gridSize); // Up
  }
});

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
