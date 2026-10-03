// Exercise 77: Subsurface Scattering (SSS) Style Rendering
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

// Environment map (to improve the material look)
const loader = new THREE.TextureLoader();
loader.load(
  "https://threejs.org/examples/textures/2294472375_24a3b8ef46_o.jpg",
  (texture) => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = texture;
    scene.background = texture;
  }
);

// Light from behind
const dirLight = new THREE.DirectionalLight(0xffffff, 5);
dirLight.position.set(0, 2, -5);
scene.add(dirLight);

const material = new THREE.MeshPhysicalMaterial({
  color: 0xffffff,
  roughness: 0.2,
  metalness: 0,
  transmission: 0.8, // Let light through
  thickness: 2.0, // Thickness
  attenuationColor: 0xffaa00, // Turns orange inside
  attenuationDistance: 1.0, // Distance over which the color changes
});

const mesh = new THREE.Mesh(
  new THREE.TorusKnotGeometry(1, 0.3, 100, 16),
  material
);
scene.add(mesh);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  controls.update();

  mesh.rotation.y += 0.005;

  renderer.render(scene, camera);
}
animate();
