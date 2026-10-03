// Exercise 28: Camera Movement Animation
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

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
);
scene.add(cube);

// Add a grid (to make the camera movement easier to see)
const gridHelper = new THREE.GridHelper(20, 20);
scene.add(gridHelper);

let angle = 0;
const radius = 5;

function animate() {
  requestAnimationFrame(animate);

  // Increase the angle little by little
  angle += 0.01;

  // Compute the circular motion
  camera.position.x = radius * Math.sin(angle);
  camera.position.z = radius * Math.cos(angle);
  camera.position.y = 2; // From a slightly elevated position

  // Always look at the origin (the cube's position)
  camera.lookAt(0, 0, 0);

  renderer.render(scene, camera);
}
animate();
