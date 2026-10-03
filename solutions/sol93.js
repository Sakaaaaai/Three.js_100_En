// Exercise 93: Particle-Based VFX (Magic Circle)
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
// Darken the background
scene.background = new THREE.Color(0x050510);
document.body.appendChild(renderer.domElement);

const particleCount = 2000;
const geometry = new THREE.BufferGeometry();
const positions = new Float32Array(particleCount * 3);
const colors = new Float32Array(particleCount * 3);

const color = new THREE.Color();

for (let i = 0; i < particleCount; i++) {
  // Make three rings
  const radiusBase = ((i % 3) + 1) * 2;
  // Add a little variation
  const radius = radiusBase + (Math.random() - 0.5) * 0.5;
  const angle = Math.random() * Math.PI * 2;

  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;
  const y = (Math.random() - 0.5) * 0.5;

  positions[i * 3] = x;
  positions[i * 3 + 1] = y;
  positions[i * 3 + 2] = z;

  // Color (cyan to purple)
  color.setHSL(0.5 + Math.random() * 0.2, 1.0, 0.5);
  colors[i * 3] = color.r;
  colors[i * 3 + 1] = color.g;
  colors[i * 3 + 2] = color.b;
}

geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

const material = new THREE.PointsMaterial({
  size: 0.1,
  vertexColors: true,
  blending: THREE.AdditiveBlending,
  transparent: true,
  depthWrite: false,
});

const magicCircle = new THREE.Points(geometry, material);
scene.add(magicCircle);

camera.position.set(0, 8, 12);
camera.lookAt(0, 0, 0);

function animate() {
  requestAnimationFrame(animate);

  const time = Date.now() * 0.002;

  // Overall rotation
  magicCircle.rotation.y = time * 0.2;

  // Rippling motion
  const pos = geometry.attributes.position.array;
  for (let i = 0; i < particleCount; i++) {
    // Update the Y coordinate
    // The original Y coordinate isn't stored, so simply overwrite it with a sine wave
    // Ideally the initial positions should be saved, but this is a simplified version
    const angle = Math.atan2(pos[i * 3 + 2], pos[i * 3]); // Recalculate the angle
    pos[i * 3 + 1] = Math.sin(angle * 5 + time) * 0.5;
  }
  geometry.attributes.position.needsUpdate = true;

  renderer.render(scene, camera);
}
animate();
