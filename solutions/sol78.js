// Exercise 78: Volumetric Light (God Rays)
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

// Spotlight
const spotLight = new THREE.SpotLight(0xffffff, 2);
spotLight.position.set(0, 5, 0);
spotLight.angle = Math.PI / 6;
spotLight.penumbra = 0.5;
scene.add(spotLight);

// Floor
const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(20, 20),
  new THREE.MeshStandardMaterial({ color: 0x222222 })
);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);

// Cone for the volumetric light
const height = 5;
const radius = Math.tan(spotLight.angle) * height;
const geometry = new THREE.ConeGeometry(radius, height, 32, 1, true); // No base
geometry.translate(0, -height / 2, 0); // Move the apex to the origin, so the cone extends toward -Y (straight down)

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
        // Fade using the UV Y coordinate (height direction)
        // Base (1.0) -> Tip (0.0)
        float alpha = pow(vUv.y, 2.0); 
        
        // Fading the edges slightly as well would look more natural
        
        gl_FragColor = vec4(1.0, 1.0, 0.8, alpha * 0.5);
    }
`;

const material = new THREE.ShaderMaterial({
  vertexShader: vShader,
  fragmentShader: fShader,
  transparent: true,
  depthWrite: false, // Do not hide objects behind it
  blending: THREE.AdditiveBlending,
  side: THREE.DoubleSide,
});

const cone = new THREE.Mesh(geometry, material);
cone.position.copy(spotLight.position);
// Only the cone's position is matched to the light (its orientation is not linked to spotLight.target)
scene.add(cone);

camera.position.set(0, 2, 10);

function animate() {
  requestAnimationFrame(animate);

  // Sway the light
  spotLight.position.x = Math.sin(Date.now() * 0.001) * 2;
  cone.position.copy(spotLight.position);

  renderer.render(scene, camera);
}
animate();
