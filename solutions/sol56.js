// Exercise 56: The Fresnel Effect (Glowing Outlines)
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
        // Dot product of the normal and the view (0 to 1)
        // 1 when seen head-on, 0 when seen from the side
        float dotProduct = dot(normalize(vNormal), normalize(vViewPosition));
        
        // Invert and raise to a power to make the edges glow sharply
        float fresnel = pow(1.0 - dotProduct, 3.0);
        
        // Glow in light blue
        gl_FragColor = vec4(0.0, 0.8, 1.0, fresnel);
    }
`;

const material = new THREE.ShaderMaterial({
  vertexShader: vShader,
  fragmentShader: fShader,
  transparent: true,
  blending: THREE.AdditiveBlending, // Additive blending
  side: THREE.DoubleSide,
});

const sphere = new THREE.Mesh(new THREE.SphereGeometry(2, 32, 32), material);
scene.add(sphere);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.y += 0.005;
  renderer.render(scene, camera);
}
animate();
