// Exercise 74: Refraction with Environment Maps (Refraction Mapping)
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

const loader = new THREE.TextureLoader();
// Image for the environment map
const texture = loader.load(
  "https://threejs.org/examples/textures/2294472375_24a3b8ef46_o.jpg"
);

// --- Change the mapping mode here ---
// texture.mapping = ...

scene.background = texture;

// --- Create the material here ---
// const material = new THREE.MeshBasicMaterial({ envMap: texture });
// material.refractionRatio = 0.98;

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(2, 32, 32),
  new THREE.MeshNormalMaterial()
);
scene.add(sphere);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();
