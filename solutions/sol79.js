// Exercise 79: Lens Flare (Lensflare)
// Model answer

import * as THREE from "three";
import {
  Lensflare,
  LensflareElement,
} from "three/examples/jsm/objects/Lensflare";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
// The flare is hard to see unless the background is black
scene.background = new THREE.Color(0x000000);
document.body.appendChild(renderer.domElement);

const light = new THREE.PointLight(0xffffff, 1.5, 2000);
light.position.set(0, 0, -20);
scene.add(light);

const textureLoader = new THREE.TextureLoader();
const texture0 = textureLoader.load(
  "https://threejs.org/examples/textures/lensflare/lensflare0.png"
);
const texture3 = textureLoader.load(
  "https://threejs.org/examples/textures/lensflare/lensflare3.png"
);

const lensflare = new Lensflare();

// Main light
lensflare.addElement(new LensflareElement(texture0, 700, 0));

// Ghosts (small rings of light)
lensflare.addElement(new LensflareElement(texture3, 60, 0.6));
lensflare.addElement(new LensflareElement(texture3, 70, 0.7));
lensflare.addElement(new LensflareElement(texture3, 120, 0.9));
lensflare.addElement(new LensflareElement(texture3, 70, 1.0));

light.add(lensflare);

// Occluder (the flare disappears when hidden behind it)
const box = new THREE.Mesh(
  new THREE.BoxGeometry(5, 5, 5),
  new THREE.MeshNormalMaterial()
);
box.position.z = -10;
scene.add(box);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  // Move the light left and right
  light.position.x = Math.sin(Date.now() * 0.001) * 30;

  renderer.render(scene, camera);
}
animate();
