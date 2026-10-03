// Exercise 63: Bloom Effect (Glowing Visuals)
// Model answer

import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";

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
// To make it glow, set Emissive (self-illumination) or use a bright color with BasicMaterial
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Place several
const cube2 = new THREE.Mesh(
  geometry,
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
cube2.position.x = 2;
scene.add(cube2);

// Composer setup
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));

// Bloom pass
// resolution, strength, radius, threshold
const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  1.5, // strength
  0.4, // radius
  0.1 // threshold (areas brighter than this glow)
);
composer.addPass(bloomPass);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube2.rotation.x -= 0.01;

  composer.render();
}
animate();
