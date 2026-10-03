// Exercise 92: Collision Detection System (Custom)
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
scene.add(player);

const wall = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
wall.position.set(3, 0, 0);
scene.add(wall);

const keys = {};
document.addEventListener("keydown", (e) => (keys[e.code] = true));
document.addEventListener("keyup", (e) => (keys[e.code] = false));

camera.position.set(0, 5, 5);
camera.lookAt(0, 0, 0);

function animate() {
  requestAnimationFrame(animate);

  // --- Movement and collision detection ---

  renderer.render(scene, camera);
}
animate();
