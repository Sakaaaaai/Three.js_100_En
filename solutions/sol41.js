// Exercise 41: Creating a Custom Geometry
// Model answer

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

// 1. Create the geometry
const geometry = new THREE.BufferGeometry();

// 2. Create the vertex data (one triangle = 3 vertices)
const vertices = new Float32Array([
  -1.0,
  -1.0,
  0.0, // Bottom left
  1.0,
  -1.0,
  0.0, // Bottom right
  0.0,
  1.0,
  0.0, // Top
]);

// 3. Register it as an attribute
geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));

// 4. Make it a mesh
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  side: THREE.DoubleSide,
});
const triangle = new THREE.Mesh(geometry, material);
scene.add(triangle);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  // Rotate it to check the sense of depth
  triangle.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();
