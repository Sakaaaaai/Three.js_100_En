// Exercise 19: A Cylinder with CylinderGeometry
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

// 1. Create the CylinderGeometry
// Top 0.5, bottom 1, height 2, 32 segments
const geometry = new THREE.CylinderGeometry(0.5, 1, 2, 32);
const material = new THREE.MeshBasicMaterial({
  color: 0xffff00,
  wireframe: true,
});
const cylinder = new THREE.Mesh(geometry, material);
scene.add(cylinder);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  cylinder.rotation.x += 0.01;
  cylinder.rotation.z += 0.01;

  renderer.render(scene, camera);
}
animate();
