// Exercise 41: Creating a Custom Geometry
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

// --- Create the custom geometry here ---
// const geometry = new THREE.BufferGeometry();
// const vertices = new Float32Array([ ... ]);
// geometry.setAttribute( ... );

const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  side: THREE.DoubleSide,
});
// const triangle = new THREE.Mesh(geometry, material);
// scene.add(triangle);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
