// Exercise 69: Toon Shading (ToonMaterial)
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

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1);
scene.add(light);
scene.add(new THREE.AmbientLight(0x404040));

// Create the tone texture with a canvas
const canvas = document.createElement("canvas");
canvas.width = 4;
canvas.height = 1;
const ctx = canvas.getContext("2d");
const colors = ["#555555", "#888888", "#bbbbbb", "#ffffff"];
colors.forEach((c, i) => {
  ctx.fillStyle = c;
  ctx.fillRect(i, 0, 1, 1);
});

const texture = new THREE.CanvasTexture(canvas);
// Do not interpolate (important)
texture.minFilter = THREE.NearestFilter;
texture.magFilter = THREE.NearestFilter;

const material = new THREE.MeshToonMaterial({
  color: 0x00aaff,
  gradientMap: texture,
});

const mesh = new THREE.Mesh(
  new THREE.TorusKnotGeometry(1, 0.3, 100, 16),
  material
);
scene.add(mesh);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
