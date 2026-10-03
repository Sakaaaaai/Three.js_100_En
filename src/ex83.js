// Exercise 83: Solar System Simulation (Hierarchy)
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

// Sun
const sun = new THREE.Mesh(
  new THREE.SphereGeometry(1),
  new THREE.MeshBasicMaterial({ color: 0xffff00 })
);
scene.add(sun);

// --- Create the Earth and the Moon here and set up the parent-child relationships ---

camera.position.z = 10;

function animate() {
  requestAnimationFrame(animate);

  // --- Rotate here ---

  renderer.render(scene, camera);
}
animate();
