// Exercise 76: Metallic Material (Clearcoat)
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

const material = new THREE.MeshPhysicalMaterial({
  color: 0xff0000, // Red paint
  metalness: 0.6, // Slightly metallic
  roughness: 0.5, // The base is slightly matte
  clearcoat: 1.0, // Enable the clearcoat layer
  clearcoatRoughness: 0.0, // The coating is glossy
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

  mesh.rotation.x += 0.005;
  mesh.rotation.y += 0.005;

  renderer.render(scene, camera);
}
animate();
