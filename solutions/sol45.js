// Exercise 45: Implementing LOD (Level of Detail)
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

const material = new THREE.MeshNormalMaterial({ wireframe: true });
const lod = new THREE.LOD();

// Level 1: high detail (distance 0 and beyond)
const geoHigh = new THREE.IcosahedronGeometry(2, 3);
const meshHigh = new THREE.Mesh(geoHigh, material);
lod.addLevel(meshHigh, 0);

// Level 2: medium detail (distance 10 and beyond)
const geoMed = new THREE.IcosahedronGeometry(2, 1);
const meshMed = new THREE.Mesh(geoMed, material);
lod.addLevel(meshMed, 10);

// Level 3: low detail (distance 20 and beyond)
const geoLow = new THREE.IcosahedronGeometry(2, 0);
const meshLow = new THREE.Mesh(geoLow, material);
lod.addLevel(meshLow, 20);

scene.add(lod);

camera.position.z = 30;

function animate() {
  requestAnimationFrame(animate);

  // Automatically move the camera back and forth
  // As the distance changes, you can see the polygon detail change
  camera.position.z = 15 + Math.sin(Date.now() * 0.001) * 12;

  renderer.render(scene, camera);
}
animate();
