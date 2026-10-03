// Exercise 48: Moving Along a Path
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

// 1. Create the curve (path)
const curve = new THREE.CatmullRomCurve3(
  [
    new THREE.Vector3(-5, 0, 5),
    new THREE.Vector3(-5, 5, -5),
    new THREE.Vector3(5, 0, -5),
    new THREE.Vector3(5, -5, 5),
  ],
  true
); // true = closed loop

// Visualize the path (draw a line)
const points = curve.getPoints(50);
const geometry = new THREE.BufferGeometry().setFromPoints(points);
const material = new THREE.LineBasicMaterial({ color: 0xffffff });
const curveObject = new THREE.Line(geometry, material);
scene.add(curveObject);

// 2. The moving object
const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(0.5),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
scene.add(sphere);

let progress = 0;

camera.position.set(0, 10, 15);
camera.lookAt(0, 0, 0);

function animate() {
  requestAnimationFrame(animate);

  // Loop between 0 and 1
  progress += 0.002;
  if (progress > 1) progress = 0;

  // 3. Get the position on the path and apply it
  const position = curve.getPoint(progress);
  sphere.position.copy(position);

  renderer.render(scene, camera);
}
animate();
