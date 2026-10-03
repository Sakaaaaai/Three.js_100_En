// Exercise 35: Loading a GLTF Model
// Model answer

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment";

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

// A fully metallic material needs an environment map, otherwise it renders black
scene.environment = new THREE.PMREMGenerator(renderer)
  .fromScene(new RoomEnvironment(), 0.04).texture;

// Without lights the model is often too dark to see
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Create the GLTFLoader
const loader = new GLTFLoader();

// Load the model
loader.load(
  "https://threejs.org/examples/models/gltf/DamagedHelmet/glTF/DamagedHelmet.gltf",
  (gltf) => {
    // Handling when loading is complete
    const model = gltf.scene;

    // Adjust the size (depending on the model it may be huge or tiny)
    model.scale.set(1.5, 1.5, 1.5);

    scene.add(model);
  },
  undefined, // Progress callback (optional)
  (error) => {
    console.error("An error happened", error);
  }
);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
