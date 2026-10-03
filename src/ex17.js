// Exercise 17: Creating a WireframeGeometry
// Write your solution here. Stuck? Open the model answer from the panel in the top-right.

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

const geometry = new THREE.BoxGeometry(2, 2, 2);

// --- Create the line drawing with WireframeGeometry here ---

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  // Rotate it (rename the variable as appropriate)
  // line.rotation.x += 0.01;
  // line.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
