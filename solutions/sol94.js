// Exercise 94: Data Visualization (Bar Chart)
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

const data = [10, 50, 30, 80, 20, 90, 40, 60, 100, 10];

// The base geometry (height 1)
// Shift it by 0.5 in Y so the bottom face lines up with the origin
const geometry = new THREE.BoxGeometry(0.8, 1, 0.8);
geometry.translate(0, 0.5, 0);

data.forEach((value, index) => {
  // Change the color according to the value (normalize 0-100 to 0-1 and set it in HSL)
  const color = new THREE.Color();
  const normalized = value / 100;
  color.setHSL(0.7 - normalized * 0.7, 1.0, 0.5); // Blue (0.7) -> Red (0.0)

  const material = new THREE.MeshBasicMaterial({ color: color });
  const bar = new THREE.Mesh(geometry, material);

  // Position
  bar.position.x = index * 1.2;

  // Height (scale)
  bar.scale.y = value * 0.1; // Adjust to an easy-to-read size

  scene.add(bar);
});

// Grid
scene.add(new THREE.GridHelper(20, 20));

camera.position.set(5, 10, 15);
camera.lookAt(5, 0, 0);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
