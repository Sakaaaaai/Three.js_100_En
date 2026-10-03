// Exercise 72: Reflection Probe (CubeCamera)
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

// Surrounding object
const box = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshNormalMaterial()
);
box.position.set(3, 0, 0);
scene.add(box);

// --- CubeCamera setup ---
// const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256);
// const cubeCamera = new THREE.CubeCamera(0.1, 1000, cubeRenderTarget);
// scene.add(cubeCamera);

// Mirror sphere
// const material = new THREE.MeshStandardMaterial({ envMap: cubeRenderTarget.texture, ... });

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  // Move the surrounding object
  box.position.x = Math.sin(Date.now() * 0.001) * 3;
  box.position.z = Math.cos(Date.now() * 0.001) * 3;

  // --- Update the CubeCamera here ---

  renderer.render(scene, camera);
}
animate();
