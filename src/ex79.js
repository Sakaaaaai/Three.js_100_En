// Exercise 79: Lens Flare (Lensflare)
// Write your solution here. Stuck? Open the model answer from the panel in the top-right.

import * as THREE from "three";
// import { Lensflare, LensflareElement } ...

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

const light = new THREE.PointLight(0xffffff, 1.5, 2000);
light.position.set(0, 0, -10);
scene.add(light);

// --- Add the lens flare here ---
// const textureLoader = new THREE.TextureLoader();
// const texture0 = textureLoader.load('...');
// const lensflare = new Lensflare();
// lensflare.addElement(new LensflareElement(texture0, 500, 0));
// light.add(lensflare);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  // Move the light
  light.position.x = Math.sin(Date.now() * 0.001) * 10;

  renderer.render(scene, camera);
}
animate();
