// Exercise 83: Solar System Simulation (Hierarchy)
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

// Sun
const sun = new THREE.Mesh(
  new THREE.SphereGeometry(1.5),
  new THREE.MeshBasicMaterial({ color: 0xffff00 })
);
scene.add(sun);

// Group for the Earth's orbit (placed at the center of the Sun)
const earthOrbit = new THREE.Group();
sun.add(earthOrbit);

// Earth
const earth = new THREE.Mesh(
  new THREE.SphereGeometry(0.5),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
);
earth.position.x = 5; // Distance from the Sun
earthOrbit.add(earth);

// Group for the Moon's orbit (placed at the center of the Earth)
const moonOrbit = new THREE.Group();
earth.add(moonOrbit);

// Moon
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(0.15),
  new THREE.MeshBasicMaterial({ color: 0x888888 })
);
moon.position.x = 1.5; // Distance from the Earth
moonOrbit.add(moon);

camera.position.z = 10;
camera.position.y = 5;
camera.lookAt(0, 0, 0);

function animate() {
  requestAnimationFrame(animate);

  sun.rotation.y += 0.005; // Sun's rotation
  earthOrbit.rotation.y += 0.01; // Earth's orbit
  earth.rotation.y += 0.02; // Earth's rotation
  moonOrbit.rotation.y += 0.05; // Moon's orbit

  renderer.render(scene, camera);
}
animate();
