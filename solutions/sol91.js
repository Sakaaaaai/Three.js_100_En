// Exercise 91: Integrating Physics (Cannon.js / Ammo.js)
// Model answer

import * as THREE from "three";
import * as CANNON from "https://unpkg.com/cannon-es@0.20.0/dist/cannon-es.js";

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

// 1. Set up the physics world
const world = new CANNON.World();
world.gravity.set(0, -9.82, 0);

// 2. Ground
const floorGeo = new THREE.PlaneGeometry(10, 10);
const floorMat = new THREE.MeshNormalMaterial();
const floorMesh = new THREE.Mesh(floorGeo, floorMat);
scene.add(floorMesh);

const floorBody = new CANNON.Body({
  mass: 0, // Mass 0 means a static object
  shape: new CANNON.Plane(),
});
floorBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
world.addBody(floorBody);

// Array that manages the mesh and body pairs
const objects = [];

function createBox(x, y, z) {
  const width = 1;
  const height = 1;
  const depth = 1;

  // Three.js
  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(width, height, depth),
    new THREE.MeshNormalMaterial()
  );
  scene.add(mesh);

  // Cannon.js
  const shape = new CANNON.Box(
    new CANNON.Vec3(width / 2, height / 2, depth / 2)
  );
  const body = new CANNON.Body({
    mass: 1,
    position: new CANNON.Vec3(x, y, z),
    shape: shape,
  });
  world.addBody(body);

  objects.push({ mesh, body });
}

// Stack up the boxes
createBox(0, 5, 0);
createBox(0.5, 8, 0);
createBox(-0.5, 12, 0);

camera.position.set(0, 5, 10);
camera.lookAt(0, 2, 0);

function animate() {
  requestAnimationFrame(animate);

  // Advance the physics step
  world.step(1 / 60);

  // Synchronize positions
  objects.forEach((obj) => {
    obj.mesh.position.copy(obj.body.position);
    obj.mesh.quaternion.copy(obj.body.quaternion);
  });

  // Synchronize the ground mesh too (since it is rotated)
  floorMesh.position.copy(floorBody.position);
  floorMesh.quaternion.copy(floorBody.quaternion);

  renderer.render(scene, camera);
}
animate();
