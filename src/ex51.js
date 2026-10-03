// Exercise 51: A Simple Custom Shader (ShaderMaterial)
// Write your solution here. Stuck? Open the model answer from the panel in the top-right.

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

// --- Shader definitions ---
const vShader = `
    void main() {
        // Calculate the vertex position here
    }
`;

const fShader = `
    void main() {
        // Output the color here
    }
`;

// --- Create the material ---
// const material = new THREE.ShaderMaterial({ ... });

// const mesh = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), material);
// scene.add(mesh);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  // mesh.rotation.x += 0.01;
  // mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
