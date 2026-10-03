// Exercise 97: AR Experience Basics (WebXR AR)
// Model answer

import * as THREE from "three";
import { ARButton } from "three/examples/jsm/webxr/ARButton";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  70,
  window.innerWidth / window.innerHeight,
  0.01,
  20
);

// In AR the background must be transparent
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.xr.enabled = true;
document.body.appendChild(renderer.domElement);

// AR button
document.body.appendChild(ARButton.createButton(renderer));

// A smallish cube
const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
const material = new THREE.MeshNormalMaterial();
const cube = new THREE.Mesh(geometry, material);
cube.position.set(0, 0, -0.3); // 30 cm in front of the camera
scene.add(cube);

// Light (for when using something like MeshStandardMaterial)
const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
scene.add(light);

renderer.setAnimationLoop(function () {
  cube.rotation.z += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
});
