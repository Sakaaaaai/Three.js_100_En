// Exercise 89: Third-Person Camera (TPS View)
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

// Variables for camera control
let cameraAngle = 0;
let cameraHeight = 5;
let cameraDistance = 10;

// Mouse move event
document.addEventListener("mousemove", (e) => {
  // Update cameraAngle
});

function animate() {
  requestAnimationFrame(animate);

  // Player movement (omitted)

  // Update the camera position
  // camera.position.x = player.position.x + ...
  // camera.position.z = player.position.z + ...
  // camera.lookAt(player.position);

  renderer.render(scene, camera);
}
animate();
