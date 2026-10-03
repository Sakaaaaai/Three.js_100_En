// Exercise 14: Setting Up Shadows
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

// 1. Enable the renderer's shadow settings
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

// 2. Configure the light
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
light.castShadow = true; // Make the light generate shadows
scene.add(light);

// 3. Configure the cube (the side that casts a shadow)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
cube.castShadow = true; // Casts a shadow
scene.add(cube);

// 4. Configure the floor (the side that receives a shadow)
const planeGeo = new THREE.PlaneGeometry(10, 10);
const planeMat = new THREE.MeshStandardMaterial({ color: 0xaaaaaa });
const plane = new THREE.Mesh(planeGeo, planeMat);
plane.rotation.x = -Math.PI / 2;
plane.position.y = -1;
plane.receiveShadow = true; // Receives a shadow
scene.add(plane);

camera.position.set(0, 2, 5);
camera.lookAt(0, 0, 0);

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
