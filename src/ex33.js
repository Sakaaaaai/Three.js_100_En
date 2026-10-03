// Exercise 33: Applying a Normal Map
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

const loader = new THREE.TextureLoader();
const normalTexture = loader.load(
  "https://threejs.org/examples/textures/water/Water_1_M_Normal.jpg"
);

// --- Apply the normal map here ---

const light = new THREE.PointLight(0xffffff, 2);
light.position.set(2, 2, 2);
scene.add(light);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  // Moving the light makes the effect easier to see
  light.position.x = Math.sin(Date.now() * 0.001) * 3;
  renderer.render(scene, camera);
}
animate();
