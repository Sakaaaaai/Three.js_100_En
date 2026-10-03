// Exercise 97: AR Experience Basics (WebXR AR)
// Write your solution here. Stuck? Open the model answer from the panel in the top-right.

import * as THREE from "three";
// import { ARButton } ...

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Transparent background
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.xr.enabled = true;
document.body.appendChild(renderer.domElement);

// document.body.appendChild(ARButton.createButton(renderer));

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 0.2, 0.2),
  new THREE.MeshNormalMaterial()
);
cube.position.set(0, 0, -0.5); // A little in front of the phone
scene.add(cube);

renderer.setAnimationLoop(function () {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
});
