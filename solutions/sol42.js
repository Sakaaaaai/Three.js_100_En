// Exercise 42: Setting Vertex Colors
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

const geometry = new THREE.BufferGeometry();

// Vertex positions
const vertices = new Float32Array([
  -2.0,
  -2.0,
  0.0, // Bottom left
  2.0,
  -2.0,
  0.0, // Bottom right
  0.0,
  2.0,
  0.0, // Top
]);
geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));

// Vertex colors (R, G, B)
const colors = new Float32Array([
  1.0,
  0.0,
  0.0, // Red
  0.0,
  1.0,
  0.0, // Green
  0.0,
  0.0,
  1.0, // Blue
]);
geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

// Material setup
const material = new THREE.MeshBasicMaterial({
  vertexColors: true, // This is the important part
  side: THREE.DoubleSide,
});

const triangle = new THREE.Mesh(geometry, material);
scene.add(triangle);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  triangle.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
