// Exercise 45: Implementing LOD (Level of Detail)
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

const lod = new THREE.LOD();

// --- Create three levels of meshes here and add them to lod ---
// lod.addLevel(meshHigh, 0);
// lod.addLevel(meshMed, 10);
// lod.addLevel(meshLow, 20);

scene.add(lod);

camera.position.z = 30;

function animate() {
  requestAnimationFrame(animate);

  // Move the camera closer and farther away
  camera.position.z = 15 + Math.sin(Date.now() * 0.001) * 10;

  renderer.render(scene, camera);
}
animate();
