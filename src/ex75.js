// Exercise 75: Glass Material (PhysicalMaterial)
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
renderer.toneMapping = THREE.ACESFilmicToneMapping;
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

// Environment map
const loader = new THREE.TextureLoader();
loader.load(
  "https://threejs.org/examples/textures/2294472375_24a3b8ef46_o.jpg",
  (texture) => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = texture;
    scene.background = texture;
  }
);

// Contents (the thing seen through the glass)
const innerCube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshNormalMaterial()
);
scene.add(innerCube);

// --- Create the glass sphere here ---
// const material = new THREE.MeshPhysicalMaterial({ ... });

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  innerCube.rotation.x += 0.01;
  renderer.render(scene, camera);
}
animate();
