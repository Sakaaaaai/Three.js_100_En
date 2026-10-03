// Exercise 70: Flat Shading (Low-Poly Look)
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

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);
scene.add(new THREE.AmbientLight(0x404040));

const geometry = new THREE.IcosahedronGeometry(2, 1); // A slightly coarse sphere

const material = new THREE.MeshStandardMaterial({
  color: 0xff4400,
  flatShading: true, // Enable this
  roughness: 0.5,
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  mesh.rotation.x += 0.005;
  mesh.rotation.y += 0.005;

  renderer.render(scene, camera);
}
animate();
