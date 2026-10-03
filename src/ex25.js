// Exercise 25: Animation Curves (Tween.js Style)
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

// A transparent floor for click detection
const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(20, 20),
  new THREE.MeshBasicMaterial({ visible: false }) // Invisible floor
);
scene.add(plane);

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
scene.add(cube);

camera.position.z = 10;

const targetPosition = new THREE.Vector3(); // Target position
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

window.addEventListener("click", (event) => {
  // --- Get the click position here and update targetPosition ---
});

function animate() {
  requestAnimationFrame(animate);

  // --- Move using lerp here ---

  renderer.render(scene, camera);
}
animate();
