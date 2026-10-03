// Exercise 84: Mini Racing Game (Basics)
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

const car = new THREE.Mesh(
  new THREE.BoxGeometry(1, 0.5, 2),
  new THREE.MeshNormalMaterial()
);
scene.add(car);

// Variables
let speed = 0;
let angle = 0;
const keys = {};

document.addEventListener("keydown", (e) => (keys[e.code] = true));
document.addEventListener("keyup", (e) => (keys[e.code] = false));

camera.position.set(0, 10, 10);
camera.lookAt(0, 0, 0);

function animate() {
  requestAnimationFrame(animate);

  // --- Movement logic goes here ---

  // Camera follow
  // camera.position.x = car.position.x;
  // camera.position.z = car.position.z + 10;

  renderer.render(scene, camera);
}
animate();
