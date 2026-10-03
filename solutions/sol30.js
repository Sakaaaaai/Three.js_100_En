// Exercise 30: Adding Fog
// Model answer

import * as THREE from "three";

const scene = new THREE.Scene();

// 1. Set the background color
const color = 0xcccccc;
scene.background = new THREE.Color(color);

// 2. Set the fog
// Fog(color, start distance, end distance)
// Fog starts to appear 10 m away and objects become completely invisible at 30 m
scene.fog = new THREE.Fog(color, 10, 30);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Place cubes going toward the back
for (let i = 0; i < 30; i++) {
  const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  );
  cube.position.z = -i * 1.5; // Toward the back at 1.5 m intervals
  cube.position.x = Math.sin(i) * 5; // Spread widely left and right
  scene.add(cube);
}

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  // An effect where the camera advances little by little
  camera.position.z -= 0.05;

  renderer.render(scene, camera);
}
animate();
