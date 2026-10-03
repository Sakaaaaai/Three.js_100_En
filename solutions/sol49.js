// Exercise 49: Camera Path Animation (Roller Coaster)
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

// Reference objects (without these you can't tell whether you're moving)
const gridHelper = new THREE.GridHelper(100, 100);
scene.add(gridHelper);

// Place random boxes
for (let i = 0; i < 50; i++) {
  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(2, 2, 2),
    new THREE.MeshNormalMaterial()
  );
  mesh.position.set(
    (Math.random() - 0.5) * 80,
    (Math.random() - 0.5) * 20 + 10,
    (Math.random() - 0.5) * 80
  );
  scene.add(mesh);
}

// Create the course
const curve = new THREE.CatmullRomCurve3(
  [
    new THREE.Vector3(0, 5, 20),
    new THREE.Vector3(20, 10, 0),
    new THREE.Vector3(0, 20, -20),
    new THREE.Vector3(-20, 5, 0),
  ],
  true
);

// Visualize the course
const points = curve.getPoints(100);
const line = new THREE.Line(
  new THREE.BufferGeometry().setFromPoints(points),
  new THREE.LineBasicMaterial({ color: 0xffff00 })
);
scene.add(line);

let progress = 0;

function animate() {
  requestAnimationFrame(animate);

  progress += 0.001;
  if (progress > 1) progress = 0;

  // 1. Place the camera at the current position
  const currentPos = curve.getPoint(progress);
  camera.position.copy(currentPos);

  // 2. Look slightly ahead (face the direction of travel)
  const lookAtPos = curve.getPoint((progress + 0.01) % 1);
  camera.lookAt(lookAtPos);

  renderer.render(scene, camera);
}
animate();
