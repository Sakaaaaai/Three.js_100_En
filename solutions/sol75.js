// Exercise 75: Glass Material (PhysicalMaterial)
// Model answer

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

const loader = new THREE.TextureLoader();
loader.load(
  "https://threejs.org/examples/textures/2294472375_24a3b8ef46_o.jpg",
  (texture) => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = texture;
    scene.background = texture;
  }
);

const innerCube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshNormalMaterial()
);
scene.add(innerCube);

// Glass material
const material = new THREE.MeshPhysicalMaterial({
  color: 0xffffff,
  metalness: 0,
  roughness: 0,
  transmission: 1.0, // Transmission
  thickness: 1.5, // Thickness (affects refraction)
  ior: 1.5, // Index of refraction (glass is around 1.5)
  clearcoat: 1.0, // Surface coating
  clearcoatRoughness: 0,
});

const sphere = new THREE.Mesh(new THREE.SphereGeometry(2, 32, 32), material);
scene.add(sphere);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  controls.update();

  innerCube.rotation.x += 0.01;
  innerCube.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();
