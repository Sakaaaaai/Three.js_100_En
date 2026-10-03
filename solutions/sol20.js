// Exercise 20: Managing Multiple Objects with Groups
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

// 1. The Sun (center)
const sunGeo = new THREE.SphereGeometry(1, 32, 16);
const sunMat = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  wireframe: true,
});
const sun = new THREE.Mesh(sunGeo, sunMat);
scene.add(sun);

// 2. Create the group (the center of the orbit)
const earthGroup = new THREE.Group();
scene.add(earthGroup);

// 3. Create the Earth
const earthGeo = new THREE.SphereGeometry(0.5, 32, 16);
const earthMat = new THREE.MeshBasicMaterial({
  color: 0x0000ff,
  wireframe: true,
});
const earth = new THREE.Mesh(earthGeo, earthMat);

// Add the Earth to the group and offset its position
earth.position.x = 4;
earthGroup.add(earth);

camera.position.z = 10;

function animate() {
  requestAnimationFrame(animate);

  // The Sun's spin
  sun.rotation.y += 0.005;

  // Rotating the group makes the Earth, its child, go around the origin (orbit)
  earthGroup.rotation.y += 0.02;

  // The Earth's spin
  earth.rotation.y += 0.05;

  renderer.render(scene, camera);
}
animate();
