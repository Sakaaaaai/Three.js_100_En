// Exercise 27: Creating a Starfield
// Model answer

import * as THREE from "three";

const scene = new THREE.Scene();
// Set the far clipping plane large so that distant things are visible
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  2000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BufferGeometry();
const count = 5000;
const positions = new Float32Array(count * 3);

for (let i = 0; i < count * 3; i++) {
  // Spread over a vast range of -1000 to +1000
  positions[i] = (Math.random() - 0.5) * 2000;
}

geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

const material = new THREE.PointsMaterial({
  size: 2, // A bit larger because the stars are far away
  color: 0xffffff,
});

const starField = new THREE.Points(geometry, material);
scene.add(starField);

function animate() {
  requestAnimationFrame(animate);

  // Rotate extremely slowly to convey the grandeur of space
  starField.rotation.y += 0.0005;

  renderer.render(scene, camera);
}
animate();
