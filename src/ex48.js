// Exercise 48: Moving Along a Path
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

// --- Create the curve here ---
// const curve = new THREE.CatmullRomCurve3([ ... ]);

// The moving object
const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(0.2),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
scene.add(sphere);

let progress = 0;

camera.position.z = 10;
camera.position.y = 5;
camera.lookAt(0, 0, 0);

function animate() {
  requestAnimationFrame(animate);

  // --- Increase progress and update the sphere's position here ---

  renderer.render(scene, camera);
}
animate();
