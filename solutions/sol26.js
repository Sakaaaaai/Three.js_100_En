// Exercise 26: Particle System Basics
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
const count = 1000;
const positions = new Float32Array(count * 3); // 3x the length, for x, y, z

// 2. Generate random coordinates
for (let i = 0; i < count * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 20; // Range of -10 to +10
}

// 3. Register the attribute
geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

// 4. Create the material
const material = new THREE.PointsMaterial({
  size: 0.1,
  color: 0xffffff,
});

// 5. Create the Points object
const particles = new THREE.Points(geometry, material);
scene.add(particles);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  // Slowly rotate the whole thing
  particles.rotation.y += 0.002;

  renderer.render(scene, camera);
}
animate();
