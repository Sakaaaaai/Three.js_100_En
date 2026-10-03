// Exercise 11: Place Multiple Objects
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

// 1. The green cube
const boxGeo = new THREE.BoxGeometry(1, 1, 1);
const boxMat = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(boxGeo, boxMat);
cube.position.x = -2; // To the left
scene.add(cube);

// 2. The blue sphere
const sphereGeo = new THREE.SphereGeometry(0.7, 32, 16);
const sphereMat = new THREE.MeshBasicMaterial({
  color: 0x0000ff,
  wireframe: true,
});
const sphere = new THREE.Mesh(sphereGeo, sphereMat);
sphere.position.x = 2; // To the right
scene.add(sphere);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  // Rotate both
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  sphere.rotation.x -= 0.01;
  sphere.rotation.y -= 0.01;

  renderer.render(scene, camera);
}

animate();
