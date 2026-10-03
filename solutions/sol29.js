// Exercise 29: Orthographic Camera (OrthographicCamera)
// Model answer

import * as THREE from "three";

const scene = new THREE.Scene();

// 1. Create the orthographic camera
const aspect = window.innerWidth / window.innerHeight;
const d = 5; // Size of the visible area (something like a zoom level)

// left, right, top, bottom, near, far
const camera = new THREE.OrthographicCamera(
  -d * aspect, // left
  d * aspect, // right
  d, // top
  -d, // bottom
  1, // near
  1000 // far
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 2. Line up the cubes
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  wireframe: true,
});

for (let i = 0; i < 5; i++) {
  const cube = new THREE.Mesh(geometry, material);
  cube.position.z = -i * 2; // Place toward the back
  cube.position.x = i * 0.5;
  scene.add(cube);
}

// Grid
const gridHelper = new THREE.GridHelper(20, 20);
scene.add(gridHelper);

// 3. Set the camera position (isometric viewpoint)
camera.position.set(5, 5, 5);
camera.lookAt(0, 0, 0);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
