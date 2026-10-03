// Exercise 15: Loading a Texture
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

// 1. Create a TextureLoader
const loader = new THREE.TextureLoader();

// 2. Load the image
// A texture object is returned immediately (its contents are updated after loading)
const texture = loader.load("https://threejs.org/examples/textures/crate.gif");

// 3. Apply it to the material
// Specify the texture in the map property
const geometry = new THREE.PlaneGeometry(2, 2);
const material = new THREE.MeshBasicMaterial({ map: texture });
const plane = new THREE.Mesh(geometry, material);
scene.add(plane);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
