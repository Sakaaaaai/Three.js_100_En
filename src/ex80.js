// Exercise 80: Advanced Particle Animation (Morphing)
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

const count = 1000;
const geometry = new THREE.BufferGeometry();
const positions = new Float32Array(count * 3);
geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

const material = new THREE.PointsMaterial({ size: 0.1, color: 0xffffff });
const particles = new THREE.Points(geometry, material);
scene.add(particles);

// Arrays of target coordinates
const boxPositions = []; // Box shape
const spherePositions = []; // Sphere shape

// --- Calculate the coordinates here ---

let currentShape = "box"; // Current shape

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  // --- Move the particles here ---

  renderer.render(scene, camera);
}
animate();
