// Exercise 96: Integrating HTML Elements (CSS2DRenderer)
// Write your solution here. Stuck? Open the model answer from the panel in the top-right.

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { CSS2DRenderer, CSS2DObject } ...

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

// --- Create the CSS2DRenderer here ---
// const labelRenderer = ...

const controls = new OrbitControls(camera, renderer.domElement);
// In some cases you need to attach the controls to the labelRenderer's domElement

const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshNormalMaterial();
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// --- Create the label here ---
// const div = document.createElement('div');
// div.textContent = 'Earth';
// const label = new CSS2DObject(div);
// sphere.add(label);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
  // labelRenderer.render(scene, camera);
}
animate();
