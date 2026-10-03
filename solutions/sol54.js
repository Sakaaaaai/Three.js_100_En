// Exercise 54: A Shader Using Noise
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
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

const fShader = `
    varying vec2 vUv;
    uniform float uTime;
    
    float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }

    void main() {
        // Add time to make the noise move
        float rnd = random(vUv + uTime);
        gl_FragColor = vec4(vec3(rnd), 1.0);
    }
`;

const uniforms = {
  uTime: { value: 0.0 },
};

const material = new THREE.ShaderMaterial({
  vertexShader: vShader,
  fragmentShader: fShader,
  uniforms: uniforms,
});

const plane = new THREE.Mesh(new THREE.PlaneGeometry(4, 4), material);
scene.add(plane);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  material.uniforms.uTime.value += 0.1;
  renderer.render(scene, camera);
}
animate();
