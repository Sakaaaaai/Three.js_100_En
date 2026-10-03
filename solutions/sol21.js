// Exercise 21: Changing an Object's Color with a Mouse Click
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

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

window.addEventListener("click", (event) => {
  // 1. Normalize the mouse coordinates (convert to the range -1 to +1)
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // 2. Set the ray from the camera toward the mouse position
  raycaster.setFromCamera(mouse, camera);

  // 3. Intersection test with the objects in the scene
  const intersects = raycaster.intersectObjects(scene.children);

  if (intersects.length > 0) {
    // Get the first intersected object (the frontmost)
    const object = intersects[0].object;

    // Change the color randomly
    object.material.color.set(Math.random() * 0xffffff);
  }
});

function animate() {
  requestAnimationFrame(animate);

  // Rotate it a little
  cube.rotation.x += 0.005;
  cube.rotation.y += 0.005;

  renderer.render(scene, camera);
}
animate();
