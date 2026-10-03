// Exercise 50: Post-Processing Basics (EffectComposer)
// Model answer

import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { DotScreenShader } from "three/examples/jsm/shaders/DotScreenShader";

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
  new THREE.MeshNormalMaterial()
);
scene.add(cube);

// 1. Create the Composer
const composer = new EffectComposer(renderer);

// 2. Add the RenderPass (normal scene rendering)
const renderPass = new RenderPass(scene, camera);
composer.addPass(renderPass);

// 3. Add the effect pass (dot screen)
const effectPass = new ShaderPass(DotScreenShader);
effectPass.uniforms["scale"].value = 4; // Dot size
composer.addPass(effectPass);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // 4. Render through the Composer
  composer.render();
}
animate();
