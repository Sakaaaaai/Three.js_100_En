// Exercise 68: Outline Effect (OutlinePass)
// Model answer

import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass";

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

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshNormalMaterial()
);
cube1.position.x = -2;
scene.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshNormalMaterial()
);
cube2.position.x = 2;
scene.add(cube2);

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));

const outlinePass = new OutlinePass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  scene,
  camera
);
composer.addPass(outlinePass);

// Select only the left cube
outlinePass.selectedObjects = [cube1];

// Adjust the parameters
outlinePass.edgeStrength = 3.0; // Thickness
outlinePass.edgeGlow = 0.5; // Glow
outlinePass.visibleEdgeColor.set("#ffffff"); // Color of the visible line
outlinePass.hiddenEdgeColor.set("#190a05"); // Color of the hidden line

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  cube1.rotation.x += 0.01;
  cube2.rotation.x += 0.01;

  composer.render();
}
animate();
