// Exercise 3: Create a Sphere with SphereGeometry
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

// 1. Create the sphere geometry
// Radius 1, 32 horizontal segments, 16 vertical segments
const geometry = new THREE.SphereGeometry(1, 32, 16);

// 2. Create a blue wireframe material
const material = new THREE.MeshBasicMaterial({
  color: 0x0000ff,
  wireframe: true,
});

// 3. Create the mesh and add it to the scene
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 5;
renderer.render(scene, camera);
