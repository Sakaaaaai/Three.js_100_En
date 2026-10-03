// Exercise 32: Applying a Bump Map
// Model answer

import * as THREE from "three";

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

const loader = new THREE.TextureLoader();
// Example bump map of a stone wall
const bumpTexture = loader.load(
  "https://threejs.org/examples/textures/brick_bump.jpg"
);

const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshStandardMaterial({
  color: 0xaaaaaa,
  bumpMap: bumpTexture, // Set the bump map
  bumpScale: 4, // Depth of the relief (strongly exaggerated)
});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Without a light, the relief is invisible
// Lighting from the side makes the relief stand out
const light = new THREE.DirectionalLight(0xffffff, 1.5);
light.position.set(1, 1, 1);
scene.add(light);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.005;
  cube.rotation.y += 0.005;

  renderer.render(scene, camera);
}
animate();
