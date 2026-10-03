// Exercise 20: Managing Multiple Objects with Groups
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

// The Sun (center)
const sunGeo = new THREE.SphereGeometry(1, 32, 16);
const sunMat = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  wireframe: true,
});
const sun = new THREE.Mesh(sunGeo, sunMat);
scene.add(sun);

// --- Create the group and the Earth here ---

camera.position.z = 10;

function animate() {
  requestAnimationFrame(animate);

  // --- Rotate the group here ---

  renderer.render(scene, camera);
}
animate();
