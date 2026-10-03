// Exercise 17: Creating a WireframeGeometry
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

const geometry = new THREE.BoxGeometry(2, 2, 2);

// 1. Create the WireframeGeometry
// Generate a geometry dedicated to wireframe display from the normal geometry
const wireframeGeo = new THREE.WireframeGeometry(geometry);

// 2. Create the line material
const lineMat = new THREE.LineBasicMaterial({ color: 0x00ffff });

// 3. Create the LineSegments (not a Mesh)
const wireframeCube = new THREE.LineSegments(wireframeGeo, lineMat);
scene.add(wireframeCube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  wireframeCube.rotation.x += 0.01;
  wireframeCube.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();
