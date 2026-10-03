// Exercise 58: The Hologram Effect (Scanlines)
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
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    void main() {
        vNormal = normalize(normalMatrix * normal);
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vViewPosition = -mvPosition.xyz;
        vPosition = position; // Local coordinates
        gl_Position = projectionMatrix * mvPosition;
    }
`;

const fShader = `
    uniform float uTime;
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    
    void main() {
        // Fresnel
        float dotProduct = dot(normalize(vNormal), normalize(vViewPosition));
        float fresnel = pow(1.0 - dotProduct, 3.0);
        
        // --- Create the scanlines here ---
        
        gl_FragColor = vec4(0.0, 1.0, 1.0, 1.0);
    }
`;

const material = new THREE.ShaderMaterial({
  vertexShader: vShader,
  fragmentShader: fShader,
  uniforms: { uTime: { value: 0 } },
  transparent: true,
  blending: THREE.AdditiveBlending,
  side: THREE.DoubleSide,
});

const mesh = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 3, 32), material);
scene.add(mesh);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  material.uniforms.uTime.value += 0.1;
  mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
