// Exercise 61: A Fire Effect (Particles)
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

const texture = new THREE.TextureLoader().load(
  "https://threejs.org/examples/textures/sprites/spark1.png"
);

const material = new THREE.SpriteMaterial({
  map: texture,
  color: 0xffaa00,
  blending: THREE.AdditiveBlending,
  transparent: true,
});

const particles = [];
const count = 100;

for (let i = 0; i < count; i++) {
  const sprite = new THREE.Sprite(material);
  // Initialize
  resetParticle(sprite);
  // Vary the lifespan so the particles start at random times
  sprite.userData.life = Math.random();

  scene.add(sprite);
  particles.push(sprite);
}

function resetParticle(p) {
  p.position.set(
    (Math.random() - 0.5) * 0.5, // Start near the center
    0,
    (Math.random() - 0.5) * 0.5
  );
  p.userData.life = 1.0;
  p.userData.velocity = new THREE.Vector3(
    (Math.random() - 0.5) * 0.02,
    Math.random() * 0.05 + 0.02, // Rising
    (Math.random() - 0.5) * 0.02
  );
  p.scale.setScalar(1.0); // Reset the size
}

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  particles.forEach((p) => {
    p.userData.life -= 0.02; // Decrease the lifespan

    if (p.userData.life <= 0) {
      resetParticle(p);
    } else {
      p.position.add(p.userData.velocity);
      p.scale.setScalar(p.userData.life * 2); // Shrink as it fades
      p.material.opacity = p.userData.life;
    }
  });

  renderer.render(scene, camera);
}
animate();
