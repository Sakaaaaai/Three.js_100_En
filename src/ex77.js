// Exercise 77: Subsurface Scattering (SSS) Style Rendering
// Write your solution here. Stuck? Open the model answer from the panel in the top-right.

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

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

const controls = new OrbitControls(camera, renderer.domElement);

// Lights
const dirLight = new THREE.DirectionalLight(0xffffff, 3);
dirLight.position.set(0, 0, -5); // From behind
scene.add(dirLight);
scene.add(new THREE.AmbientLight(0x404040));

// --- SSS-style material ---
// const material = new THREE.MeshPhysicalMaterial({ ... });

// --- Create the mesh and add it to the scene here ---
// const mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 0), material);
// scene.add(mesh);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();
