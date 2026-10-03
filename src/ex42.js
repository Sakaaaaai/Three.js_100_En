// Exercise 42: Setting Vertex Colors
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

const geometry = new THREE.BufferGeometry();
const vertices = new Float32Array([
  -1.0, -1.0, 0.0, 1.0, -1.0, 0.0, 0.0, 1.0, 0.0,
]);
geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));

// --- Set the vertex colors here ---
// const colors = new Float32Array([ ... ]);
// geometry.setAttribute('color', ...);

// --- Enable vertexColors: true on the material ---
const material = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide });

const triangle = new THREE.Mesh(geometry, material);
scene.add(triangle);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
