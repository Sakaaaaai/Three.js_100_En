// Exercise 51: A Simple Custom Shader (ShaderMaterial)
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

// 1. Vertex shader
// Converts coordinates in 3D space to coordinates on the 2D screen
const vShader = `
    void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

// 2. Fragment shader
// Determines the color of each pixel
const fShader = `
    void main() {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // Red (R, G, B, A)
    }
`;

// 3. Create the material
const material = new THREE.ShaderMaterial({
  vertexShader: vShader,
  fragmentShader: fShader,
});

const mesh = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), material);
scene.add(mesh);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
