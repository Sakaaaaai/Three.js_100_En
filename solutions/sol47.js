// Exercise 47: Billboard Effect (Implemented with a Mesh)
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

// Load the texture
const loader = new THREE.TextureLoader();
const texture = loader.load(
  "https://threejs.org/examples/textures/uv_grid_opengl.jpg"
);

const geometry = new THREE.PlaneGeometry(2, 2);
const material = new THREE.MeshBasicMaterial({
  map: texture,
  side: THREE.DoubleSide,
});
const plane = new THREE.Mesh(geometry, material);
scene.add(plane);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  // Sway the camera left and right
  camera.position.x = Math.sin(Date.now() * 0.001) * 4;
  camera.lookAt(0, 0, 0);

  // Point the mesh at the camera (billboard behavior)
  plane.lookAt(camera.position);

  renderer.render(scene, camera);
}
animate();
