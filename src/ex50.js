// Exercise 50: Post-Processing Basics (EffectComposer)
// Write your solution here. Stuck? Open the model answer from the panel in the top-right.

import * as THREE from "three";
// --- Import the required classes here ---
// import { EffectComposer } ...

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
  new THREE.BoxGeometry(2, 2, 2),
  new THREE.MeshNormalMaterial()
);
scene.add(cube);

// --- Set up the Composer here ---
// const composer = new EffectComposer(renderer);
// composer.addPass(new RenderPass(scene, camera));
// ...

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Instead of renderer.render(scene, camera);
  // composer.render();
}
animate();
