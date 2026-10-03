// Exercise 34: Using Multiple Materials
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

const geometry = new THREE.BoxGeometry(2, 2, 2);

// Prepare the 6 materials as an array
const materials = [
  new THREE.MeshBasicMaterial({ color: 0xff0000 }), // Right: red
  new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // Left: green
  new THREE.MeshBasicMaterial({ color: 0x0000ff }), // Top: blue
  new THREE.MeshBasicMaterial({ color: 0xffff00 }), // Bottom: yellow
  new THREE.MeshBasicMaterial({ color: 0x00ffff }), // Front: cyan
  new THREE.MeshBasicMaterial({ color: 0xff00ff }), // Back: purple
];

// Passing an array applies each material to its own face
const cube = new THREE.Mesh(geometry, materials);
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();
