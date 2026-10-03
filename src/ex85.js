// Exercise 85: Jumping Game (Implementing Gravity)
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
player.position.y = 0.5; // So it isn't half buried
scene.add(player);

// Ground
const ground = new THREE.Mesh(
  new THREE.PlaneGeometry(10, 10),
  new THREE.MeshBasicMaterial({ color: 0x555555 })
);
ground.rotation.x = -Math.PI / 2;
scene.add(ground);

let velocityY = 0;
const gravity = 0.01;
const jumpPower = 0.2;
let isJumping = false;

document.addEventListener("keydown", (e) => {
  if (e.code === "Space" && !isJumping) {
    velocityY = jumpPower;
    isJumping = true;
  }
});

camera.position.set(0, 2, 5);

function animate() {
  requestAnimationFrame(animate);

  // --- Physics goes here ---

  renderer.render(scene, camera);
}
animate();
