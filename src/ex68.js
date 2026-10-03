// Exercise 68: Outline Effect (OutlinePass)
// Write your solution here. Stuck? Open the model answer from the panel in the top-right.

import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
// import { OutlinePass } ...

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

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshNormalMaterial()
);
cube1.position.x = -2;
scene.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshNormalMaterial()
);
cube2.position.x = 2;
scene.add(cube2);

// --- Composer and OutlinePass ---

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  // composer.render();
}
animate();
