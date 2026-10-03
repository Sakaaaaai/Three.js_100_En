// Exercise 95: 3D Graph (Surface Plot)
// Model answer

import * as THREE from "three";
import { ParametricGeometry } from "three/examples/jsm/geometries/ParametricGeometry";

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

const graphFunc = (u, v, target) => {
  const range = 10;
  const x = (u - 0.5) * range;
  const z = (v - 0.5) * range;

  // A rippling function
  const y = Math.sin(x) * Math.cos(z) * 2;

  target.set(x, y, z);
};

// 50x50 subdivisions
const geometry = new ParametricGeometry(graphFunc, 50, 50);
const material = new THREE.MeshNormalMaterial({
  side: THREE.DoubleSide,
  wireframe: false,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Overlaying a wireframe makes it easier to see
const wireMat = new THREE.MeshBasicMaterial({
  color: 0x000000,
  wireframe: true,
  transparent: true,
  opacity: 0.3,
});
const wireMesh = new THREE.Mesh(geometry, wireMat);
scene.add(wireMesh);

camera.position.set(0, 10, 15);
camera.lookAt(0, 0, 0);

function animate() {
  requestAnimationFrame(animate);

  mesh.rotation.y += 0.005;
  wireMesh.rotation.y += 0.005;

  renderer.render(scene, camera);
}
animate();
