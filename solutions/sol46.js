// Exercise 46: Using Sprites
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
const map = loader.load("https://threejs.org/examples/textures/sprite0.png");

const material = new THREE.SpriteMaterial({
  map: map,
  color: 0xffffff,
});

const sprite = new THREE.Sprite(material);
sprite.scale.set(2, 2, 1); // Adjust the size
scene.add(sprite);

// Also place a regular mesh for comparison
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshNormalMaterial()
);
cube.position.x = 2;
scene.add(cube);

function animate() {
  requestAnimationFrame(animate);

  // Rotate the camera around the objects
  const time = Date.now() * 0.001;
  camera.position.x = Math.sin(time) * 5;
  camera.position.z = Math.cos(time) * 5;
  camera.lookAt(0, 0, 0);

  renderer.render(scene, camera);
}
animate();
