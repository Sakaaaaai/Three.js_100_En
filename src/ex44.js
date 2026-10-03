// Exercise 44: Instancing (Massive Numbers of Objects)
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

const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const material = new THREE.MeshNormalMaterial();

// --- Create the InstancedMesh here ---
// const count = 1000;
// const mesh = new THREE.InstancedMesh(geometry, material, count);
// const dummy = new THREE.Object3D();

// for (let i = 0; i < count; i++) {
//     ...
// }

camera.position.z = 15;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
