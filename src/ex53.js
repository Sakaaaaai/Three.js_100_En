// Exercise 53: A Gradient with the Fragment Shader
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

const vShader = `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

const fShader = `
    varying vec2 vUv;
    void main() {
        // --- Create the gradient here ---
        // vec3 color = mix(..., ..., vUv.y);
        
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
`;

const material = new THREE.ShaderMaterial({
  vertexShader: vShader,
  fragmentShader: fShader,
});

const plane = new THREE.Mesh(new THREE.PlaneGeometry(4, 4), material);
scene.add(plane);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
