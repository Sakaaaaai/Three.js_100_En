// Exercise 95: 3D Graph (Surface Plot)
// Write your solution here. Stuck? Open the model answer from the panel in the top-right.

import * as THREE from "three";
// import { ParametricGeometry } ...

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

// Function definition
const graphFunc = (u, v, target) => {
  // u, v (0~1) -> x, z (-10~10)
  const x = (u - 0.5) * 20;
  const z = (v - 0.5) * 20;
  const y = Math.sin(x) * Math.cos(z); // Height

  target.set(x, y, z);
};

// --- Create the geometry here ---

camera.position.set(0, 10, 20);
camera.lookAt(0, 0, 0);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
