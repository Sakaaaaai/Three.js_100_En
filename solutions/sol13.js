// Exercise 13: Adding Light (SpotLight)
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

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Floor
const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(10, 10),
  new THREE.MeshStandardMaterial({ color: 0xaaaaaa })
);
plane.rotation.x = -Math.PI / 2;
plane.position.y = -1;
scene.add(plane);

camera.position.set(0, 2, 5);
camera.lookAt(0, 0, 0);

// 1. Create the spotlight
const spotLight = new THREE.SpotLight(0xffffff, 10);
spotLight.position.set(0, 5, 0); // From directly above
spotLight.angle = Math.PI / 6; // Cone angle (narrow)
spotLight.penumbra = 0.2; // Soften the edge a little
scene.add(spotLight);

// 2. Add the helper
const spotLightHelper = new THREE.SpotLightHelper(spotLight);
scene.add(spotLightHelper);

// Ambient light (supplementary)
const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.y += 0.01;
  spotLightHelper.update(); // Needed when the light moves
  renderer.render(scene, camera);
}
animate();
