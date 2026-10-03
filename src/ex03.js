// Exercise 3: Create a Sphere with SphereGeometry
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

// --- Write your code from here ---

// 1. Create the sphere geometry

// 2. Create a blue wireframe material

// 3. Create the mesh and add it to the scene

// --- To here ---

camera.position.z = 5;
renderer.render(scene, camera);
