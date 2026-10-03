// Exercise 43: Using BufferGeometry (Massive Particles)
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
const count = 1000;
const positions = new Float32Array(count * 3);

for (let i = 0; i < count * 3; i++) {
  // Random in the range -10 to 10
  positions[i] = (Math.random() - 0.5) * 20;
}

geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

const material = new THREE.PointsMaterial({
  color: 0xffffff,
  size: 0.1,
});

const particles = new THREE.Points(geometry, material);
scene.add(particles);

camera.position.z = 15;

function animate() {
  requestAnimationFrame(animate);

  particles.rotation.y += 0.002;
  particles.rotation.x += 0.001;

  renderer.render(scene, camera);
}
animate();
