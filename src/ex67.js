// Exercise 67: Motion Blur (Afterimage)
// Write your solution here. Stuck? Open the model answer from the panel in the top-right.

import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
// import { AfterimagePass } ...

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
  new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
);
scene.add(cube);

// --- Composer and AfterimagePass ---

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  // Fast rotation
  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;

  // composer.render();
}
animate();
