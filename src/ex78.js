// Exercise 78: Volumetric Light (God Rays)
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

// Spotlight
const spotLight = new THREE.SpotLight(0xffffff, 10);
spotLight.position.set(0, 5, 0);
spotLight.angle = Math.PI / 6;
scene.add(spotLight);

// Floor
const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(10, 10),
  new THREE.MeshStandardMaterial({ color: 0x444444 })
);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);

// --- Create the shaft of light (cone) here ---
// const geometry = new THREE.ConeGeometry(...);
// const material = new THREE.ShaderMaterial(...);

camera.position.set(0, 2, 8);
camera.lookAt(0, 2, 0);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
