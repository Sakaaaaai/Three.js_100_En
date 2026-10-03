// Exercise 69: Toon Shading (ToonMaterial)
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

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1);
scene.add(light);

// --- Create the gradient map here ---
// const texture = ...
// texture.minFilter = THREE.NearestFilter;
// texture.magFilter = THREE.NearestFilter;

// --- Create the ToonMaterial ---
// const material = new THREE.MeshToonMaterial({ gradientMap: texture, color: ... });

// --- Create and add the mesh here (needs material) ---
// const mesh = new THREE.Mesh(
//   new THREE.TorusKnotGeometry(1, 0.3, 100, 16),
//   material
// );
// scene.add(mesh);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  // mesh.rotation.x += 0.01;
  // mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
