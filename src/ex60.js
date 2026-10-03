// Exercise 60: A Water Surface Shader (Simple Version)
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
    uniform float uTime;
    varying float vElevation;
    void main() {
        vec3 pos = position;
        // Create complex waves
        float wave1 = sin(pos.x * 2.0 + uTime);
        float wave2 = sin(pos.y * 1.5 + uTime * 0.5);
        
        pos.z = (wave1 + wave2) * 0.2;
        vElevation = pos.z;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
`;

const fShader = `
    varying float vElevation;
    void main() {
        // --- Decide the color based on height here ---
        
        gl_FragColor = vec4(0.0, 0.5, 1.0, 0.8);
    }
`;

const material = new THREE.ShaderMaterial({
  vertexShader: vShader,
  fragmentShader: fShader,
  uniforms: { uTime: { value: 0 } },
  transparent: true,
  side: THREE.DoubleSide,
});

const plane = new THREE.Mesh(new THREE.PlaneGeometry(5, 5, 64, 64), material);
plane.rotation.x = -Math.PI / 2; // Lay it flat
scene.add(plane);

camera.position.set(0, 3, 5);
camera.lookAt(0, 0, 0);

function animate() {
  requestAnimationFrame(animate);
  material.uniforms.uTime.value += 0.05;
  renderer.render(scene, camera);
}
animate();
