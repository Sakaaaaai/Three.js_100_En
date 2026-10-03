// Exercise 88: Character Movement System (Smooth Rotation)
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

// Floor
scene.add(new THREE.GridHelper(20, 20));

// Player
const player = new THREE.Group();
const body = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshNormalMaterial()
);
const nose = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 0.2, 0.5),
  new THREE.MeshBasicMaterial({ color: 0x000000 })
);
nose.position.set(0, 0, 0.6); // Treat the positive Z direction as the front
player.add(body);
player.add(nose);
scene.add(player);

const keys = {};
document.addEventListener("keydown", (e) => (keys[e.code] = true));
document.addEventListener("keyup", (e) => (keys[e.code] = false));

camera.position.set(0, 10, 10);
camera.lookAt(0, 0, 0);

function animate() {
  requestAnimationFrame(animate);

  let dx = 0;
  let dz = 0;

  if (keys["ArrowUp"] || keys["KeyW"]) dz = -1; // Toward the back (negative Z)
  if (keys["ArrowDown"] || keys["KeyS"]) dz = 1;
  if (keys["ArrowLeft"] || keys["KeyA"]) dx = -1;
  if (keys["ArrowRight"] || keys["KeyD"]) dx = 1;

  if (dx !== 0 || dz !== 0) {
    // Move
    const speed = 0.1;
    player.position.x += dx * speed;
    player.position.z += dz * speed;

    // Target angle (Math.atan2 takes (y, x), but on the 3D XZ plane mind the (x, z) order)
    // If you want the positive Z axis to be the front (0 degrees), some adjustment is needed here
    // Math.atan2(dx, dz) gives the angle of the vector (dx, dz)
    const targetAngle = Math.atan2(dx, dz);

    // Smooth rotation with a quaternion
    const targetQuaternion = new THREE.Quaternion();
    targetQuaternion.setFromAxisAngle(new THREE.Vector3(0, 1, 0), targetAngle);

    player.quaternion.slerp(targetQuaternion, 0.1);
  }

  // Camera follow
  camera.position.x = player.position.x;
  camera.position.z = player.position.z + 10;

  renderer.render(scene, camera);
}
animate();
