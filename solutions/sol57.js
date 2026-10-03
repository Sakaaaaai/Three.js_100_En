// Exercise 57: Rim Lighting (Backlight Effect)
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
        float dotProduct = dot(normalize(vNormal), normalize(vViewPosition));
        // Clamp so it never goes below 0
        float rim = pow(1.0 - clamp(dotProduct, 0.0, 1.0), 4.0);
        
        vec3 baseColor = vec3(0.2, 0.2, 0.2); // Dark gray
        vec3 rimColor = vec3(1.0, 0.8, 0.0);  // Golden rim light
        
        // Add the rim light to the base color
        gl_FragColor = vec4(baseColor + rimColor * rim, 1.0);
    }
`;

const material = new THREE.ShaderMaterial({
  vertexShader: vShader,
  fragmentShader: fShader,
});

const mesh = new THREE.Mesh(
  new THREE.TorusKnotGeometry(1, 0.3, 100, 16),
  material
);
scene.add(mesh);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
