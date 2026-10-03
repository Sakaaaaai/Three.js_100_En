// Exercise 2: Display a Cube with BoxGeometry
// Write your solution here. Stuck? Open the model answer from the panel in the top-right.

import * as THREE from "three";

// Set up the scene, camera, and renderer
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

// 1. Create the geometry (shape)

// 2. Create the material (surface)

// 3. Create the mesh (object)

// 4. Add it to the scene

// 5. Adjust the camera position

// --- To here ---

renderer.render(scene, camera);
