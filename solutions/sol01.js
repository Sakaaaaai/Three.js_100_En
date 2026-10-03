// Exercise 1: Three.js Basics: Setting Up the Scene, Camera, and Renderer
// Model answer

import * as THREE from "three";

// STEP 1: Create the scene
// The container that holds objects and lights
const scene = new THREE.Scene();

// STEP 2: Create the camera
// PerspectiveCamera(field of view, aspect ratio, near clipping plane, far clipping plane)
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Adjust the camera position (not strictly required here since the scene is empty,
// but a good habit to get into)
camera.position.z = 5;

// STEP 3: Create the renderer
const renderer = new THREE.WebGLRenderer();

// Match the renderer size to the window size
renderer.setSize(window.innerWidth, window.innerHeight);

// STEP 4: Add the renderer to the DOM
// This inserts a <canvas> element into the HTML
document.body.appendChild(renderer.domElement);

// STEP 5: Perform the render
// Render the scene from the camera's viewpoint
renderer.render(scene, camera);
