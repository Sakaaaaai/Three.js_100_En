// Exercise 74: Refraction with Environment Maps (Refraction Mapping)
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
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

const loader = new THREE.TextureLoader();
// Load the panorama image
loader.load(
  "https://threejs.org/examples/textures/2294472375_24a3b8ef46_o.jpg",
  (texture) => {
    // Set it to refraction mapping (important)
    texture.mapping = THREE.EquirectangularRefractionMapping;

    scene.background = texture;

    // Refraction material
    const material = new THREE.MeshBasicMaterial({
      envMap: texture,
      refractionRatio: 0.98, // Refractive index (1.0 means no change; smaller values distort more)
    });

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(2, 64, 64),
      material
    );
    scene.add(sphere);
  }
);

camera.position.z = 6;

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();
