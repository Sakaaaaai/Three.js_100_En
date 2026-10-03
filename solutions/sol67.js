// Exercise 67: Motion Blur (Afterimage)
// Model answer

import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { AfterimagePass } from "three/examples/jsm/postprocessing/AfterimagePass";

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

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2),
  new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
);
scene.add(cube);

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));

// Afterimage pass
const afterimagePass = new AfterimagePass();
afterimagePass.uniforms["damp"].value = 0.96; // How long the afterimage lingers
composer.addPass(afterimagePass);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  // Move it vigorously
  cube.rotation.x += 0.05;
  cube.rotation.y += 0.05;
  cube.position.x = Math.sin(Date.now() * 0.005) * 3;

  composer.render();
}
animate();
