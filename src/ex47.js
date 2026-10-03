// Exercise 47: Billboard Effect (Implemented with a Mesh)
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

const geometry = new THREE.PlaneGeometry(2, 2);
const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  side: THREE.DoubleSide,
});
const plane = new THREE.Mesh(geometry, material);
scene.add(plane);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  // Move the camera
  camera.position.x = Math.sin(Date.now() * 0.001) * 3;

  // --- Point the plane at the camera here ---

  renderer.render(scene, camera);
}
animate();
