// Exercise 37: Creating a Ground
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

const loader = new THREE.TextureLoader();
const texture = loader.load(
  "https://threejs.org/examples/textures/terrain/grasslight-big.jpg"
);

// 1. Configure the texture repeat
texture.wrapS = THREE.RepeatWrapping; // Repeat horizontally
texture.wrapT = THREE.RepeatWrapping; // Repeat vertically
texture.repeat.set(10, 10); // Repeat 10 times

// 2. Create the ground
const geometry = new THREE.PlaneGeometry(100, 100);
const material = new THREE.MeshBasicMaterial({ map: texture });
const ground = new THREE.Mesh(geometry, material);

// Make it horizontal
ground.rotation.x = -Math.PI / 2;
scene.add(ground);

camera.position.set(0, 5, 10);
camera.lookAt(0, 0, 0);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
