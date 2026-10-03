// Exercise 52: A Wavy Plane with the Vertex Shader
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

const vShader = `
    uniform float uTime;
    void main() {
        vec3 pos = position;
        // Make Z wobble with a sine wave based on the X coordinate
        pos.z = sin(pos.x * 2.0 + uTime) * 0.5;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
`;

const fShader = `
    void main() {
        gl_FragColor = vec4(0.0, 0.8, 1.0, 1.0); // Light blue
    }
`;

const uniforms = {
  uTime: { value: 0.0 },
};

const material = new THREE.ShaderMaterial({
  vertexShader: vShader,
  fragmentShader: fShader,
  uniforms: uniforms,
  wireframe: true,
  side: THREE.DoubleSide,
});

const plane = new THREE.Mesh(new THREE.PlaneGeometry(5, 5, 32, 32), material);
plane.rotation.x = 0.5; // Tilt it so it is easier to see
scene.add(plane);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  // Update the time
  material.uniforms.uTime.value += 0.05;

  renderer.render(scene, camera);
}
animate();
