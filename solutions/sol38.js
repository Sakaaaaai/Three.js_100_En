// Exercise 38: Implementing a Skybox
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
const path = "https://threejs.org/examples/textures/cube/Bridge2/";
const urls = [
  "posx.jpg",
  "negx.jpg",
  "posy.jpg",
  "negy.jpg",
  "posz.jpg",
  "negz.jpg",
];

const materials = urls.map((url) => {
  return new THREE.MeshBasicMaterial({
    map: loader.load(path + url),
    side: THREE.BackSide, // Render the inside
  });
});

const geometry = new THREE.BoxGeometry(500, 500, 500);
const skybox = new THREE.Mesh(geometry, materials);
scene.add(skybox);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  // Rotate the camera to check the full panorama
  camera.rotation.y += 0.002;

  renderer.render(scene, camera);
}
animate();
