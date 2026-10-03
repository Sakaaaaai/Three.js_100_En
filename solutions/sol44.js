// Exercise 44: Instancing (Massive Numbers of Objects)
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

const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const material = new THREE.MeshNormalMaterial();

const count = 1000;
const mesh = new THREE.InstancedMesh(geometry, material, count);

const dummy = new THREE.Object3D();

for (let i = 0; i < count; i++) {
  // Random position
  dummy.position.set(
    (Math.random() - 0.5) * 20,
    (Math.random() - 0.5) * 20,
    (Math.random() - 0.5) * 20
  );

  // Random rotation
  dummy.rotation.set(
    Math.random() * Math.PI,
    Math.random() * Math.PI,
    Math.random() * Math.PI
  );

  dummy.updateMatrix();
  mesh.setMatrixAt(i, dummy.matrix);
}

scene.add(mesh);

camera.position.z = 15;

function animate() {
  requestAnimationFrame(animate);

  // You can also rotate the whole thing
  mesh.rotation.y += 0.002;

  renderer.render(scene, camera);
}
animate();
