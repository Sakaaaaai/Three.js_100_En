// Exercise 56: The Fresnel Effect (Glowing Outlines)
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
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    void main() {
        vNormal = normalize(normalMatrix * normal);
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vViewPosition = -mvPosition.xyz;
        gl_Position = projectionMatrix * mvPosition;
    }
`;

const fShader = `
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    void main() {
        // --- Do the Fresnel calculation here ---
        
        gl_FragColor = vec4(0.0, 1.0, 1.0, 1.0);
    }
`;

const material = new THREE.ShaderMaterial({
  vertexShader: vShader,
  fragmentShader: fShader,
  transparent: true,
  blending: THREE.AdditiveBlending, // Make it glow with additive blending
});

const sphere = new THREE.Mesh(new THREE.SphereGeometry(2, 32, 32), material);
scene.add(sphere);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
