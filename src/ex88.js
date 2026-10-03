// Exercise 88: Character Movement System (Smooth Rotation)
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

const player = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshNormalMaterial()
);
// Add a protrusion so the front is easy to see
const nose = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 0.2, 0.5),
  new THREE.MeshBasicMaterial({ color: 0x000000 })
);
nose.position.z = 0.5;
player.add(nose);
scene.add(player);

const keys = {};
document.addEventListener("keydown", (e) => (keys[e.code] = true));
document.addEventListener("keyup", (e) => (keys[e.code] = false));

camera.position.set(0, 5, 10);
camera.lookAt(0, 0, 0);

function animate() {
  requestAnimationFrame(animate);

  // --- Movement and rotation logic ---

  renderer.render(scene, camera);
}
animate();
