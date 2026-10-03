// Exercise 52: A Wavy Plane with the Vertex Shader
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
    void main() {
        vec3 pos = position;
        // --- Manipulate pos.z here ---
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
`;

const fShader = `
    void main() {
        gl_FragColor = vec4(0.0, 0.5, 1.0, 1.0);
    }
`;

const uniforms = {
  uTime: { value: 0.0 },
};

const material = new THREE.ShaderMaterial({
  vertexShader: vShader,
  fragmentShader: fShader,
  uniforms: uniforms,
  wireframe: true, // So the motion is easier to see
});

const plane = new THREE.Mesh(new THREE.PlaneGeometry(5, 5, 32, 32), material);
scene.add(plane);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  // --- Update uTime here ---

  renderer.render(scene, camera);
}
animate();
