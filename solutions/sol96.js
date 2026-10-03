// Exercise 96: Integrating HTML Elements (CSS2DRenderer)
// Model answer

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {
  CSS2DRenderer,
  CSS2DObject,
} from "three/examples/jsm/renderers/CSS2DRenderer";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// WebGL renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// CSS2D renderer
const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(window.innerWidth, window.innerHeight);
labelRenderer.domElement.style.position = "absolute";
labelRenderer.domElement.style.top = "0px";
// Let mouse events pass through (if needed)
// labelRenderer.domElement.style.pointerEvents = 'none';
document.body.appendChild(labelRenderer.domElement);

// Controls (when layered on top of the CSS renderer, attach the events here or find another workaround)
// Here, applying OrbitControls to the labelRenderer's element makes it easier to operate
const controls = new OrbitControls(camera, labelRenderer.domElement);

const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshNormalMaterial();
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// Create the label
const div = document.createElement("div");
div.className = "label";
div.textContent = "Sphere Object";
div.style.color = "white";
div.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
div.style.padding = "5px";
div.style.borderRadius = "5px";
div.style.marginTop = "-1em"; // Position adjustment

const label = new CSS2DObject(div);
label.position.set(0, 1.2, 0); // Slightly above the sphere
sphere.add(label);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  controls.update();

  renderer.render(scene, camera);
  labelRenderer.render(scene, camera);
}
animate();
