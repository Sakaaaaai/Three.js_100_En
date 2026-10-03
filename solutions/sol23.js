// Exercise 23: Move an Object with the Keyboard
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
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

window.addEventListener("keydown", (event) => {
  const speed = 0.1;

  switch (event.code) {
    case "ArrowUp":
      cube.position.y += speed;
      break;
    case "ArrowDown":
      cube.position.y -= speed;
      break;
    case "ArrowRight":
      cube.position.x += speed;
      break;
    case "ArrowLeft":
      cube.position.x -= speed;
      break;
  }
});

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
