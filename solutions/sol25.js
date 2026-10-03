// Exercise 25: Animation Curves (Tween.js Style)
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

// A transparent floor for click detection
const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(20, 20),
  new THREE.MeshBasicMaterial({ visible: false })
);
scene.add(plane);

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
scene.add(cube);

camera.position.z = 10;

const targetPosition = new THREE.Vector3(0, 0, 0);
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

window.addEventListener("click", (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObject(plane);

  if (intersects.length > 0) {
    // Use the clicked 3D coordinates as the target
    targetPosition.copy(intersects[0].point);
    // If you want to fix the Z axis (when sliding across a floor)
    targetPosition.z = 0;
  }
});

function animate() {
  requestAnimationFrame(animate);

  // Move 5% closer to the target position every frame
  // This produces smooth motion that starts fast and slows down as it gets close
  cube.position.lerp(targetPosition, 0.05);

  renderer.render(scene, camera);
}
animate();
