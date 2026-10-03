// Exercise 72: Reflection Probe (CubeCamera)
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

// Background
scene.background = new THREE.Color(0x222222);

// Object orbiting around the sphere
const box = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshNormalMaterial()
);
scene.add(box);

// 1. Create the render target
const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256); // Resolution

// 2. Create the CubeCamera
const cubeCamera = new THREE.CubeCamera(0.1, 1000, cubeRenderTarget);
scene.add(cubeCamera);

// 3. Mirror sphere
const material = new THREE.MeshStandardMaterial({
  envMap: cubeRenderTarget.texture,
  roughness: 0,
  metalness: 1,
});
const sphere = new THREE.Mesh(new THREE.SphereGeometry(1.5, 32, 32), material);
scene.add(sphere);

camera.position.z = 5;
camera.position.y = 2;
camera.lookAt(0, 0, 0);

function animate() {
  requestAnimationFrame(animate);

  // Move the surrounding object
  const time = Date.now() * 0.001;
  box.position.x = Math.sin(time) * 3;
  box.position.z = Math.cos(time) * 3;
  box.rotation.x += 0.01;

  // 4. Update the reflection
  sphere.visible = false; // Hide the sphere itself so it is not captured
  cubeCamera.position.copy(sphere.position); // Move the camera to the sphere's position
  cubeCamera.update(renderer, scene); // Capture
  sphere.visible = true; // Restore it

  renderer.render(scene, camera);
}
animate();
