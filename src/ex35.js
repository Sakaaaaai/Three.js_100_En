// Exercise 35: Loading a GLTF Model
// Write your solution here. Stuck? Open the model answer from the panel in the top-right.

import * as THREE from "three";
// --- Import GLTFLoader here ---

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

const light = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(2, 2, 2);
scene.add(light);

// --- Load the model here ---

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
