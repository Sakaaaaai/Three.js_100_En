// Exercise 58: The Hologram Effect (Scanlines)
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
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    void main() {
        vNormal = normalize(normalMatrix * normal);
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vViewPosition = -mvPosition.xyz;
        vPosition = position;
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
        
        // Scanlines (build a sine wave from the Y coordinate)
        float scanline = sin(vPosition.y * 20.0 - uTime * 5.0);
        // You could also use it as -1 to 1 without remapping to 0 to 1 and make it blink
        // Here you could use a step function to emphasize the stripes, but we keep it simple
        if(scanline < 0.0) discard; // Make half of the stripes transparent
        
        vec3 color = vec3(0.0, 1.0, 1.0); // Cyan
        
        // Combine Fresnel and the scanlines
        float alpha = fresnel + 0.5;
        
        gl_FragColor = vec4(color, alpha);
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
  material.uniforms.uTime.value += 0.05;
  mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
