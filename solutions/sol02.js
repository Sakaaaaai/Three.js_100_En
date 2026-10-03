// Exercise 2: Display a Cube with BoxGeometry
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

// 1. Create the geometry (shape)
// BoxGeometry(width, height, depth)
const geometry = new THREE.BoxGeometry(1, 1, 1);

// 2. Create the material (surface)
// Specify the color in hexadecimal (green: 0x00ff00)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// 3. Create the mesh (object)
const cube = new THREE.Mesh(geometry, material);

// 4. Add it to the scene
scene.add(cube);

// 5. Adjust the camera position
// Move 5 units toward you (positive Z direction)
camera.position.z = 5;

renderer.render(scene, camera);
