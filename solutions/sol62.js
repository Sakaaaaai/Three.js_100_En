// Exercise 62: Explosion Effect (Spreading in All Directions)
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

const material = new THREE.MeshBasicMaterial({ color: 0xff5500 });
const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);

const particles = [];
const particleCount = 200;

// Create the pool
for (let i = 0; i < particleCount; i++) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.visible = false;
  scene.add(mesh);
  particles.push({
    mesh: mesh,
    velocity: new THREE.Vector3(),
    life: 0,
  });
}

function explode() {
  particles.forEach((p) => {
    p.mesh.visible = true;
    p.mesh.position.set(0, 0, 0);

    // Random direction
    p.velocity
      .set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5)
      .normalize()
      .multiplyScalar(Math.random() * 0.5); // Random speed too

    p.life = 1.0;
  });
}

window.addEventListener("click", explode);
// The first one
setTimeout(explode, 1000);

camera.position.z = 10;

function animate() {
  requestAnimationFrame(animate);

  particles.forEach((p) => {
    if (p.life > 0) {
      p.mesh.position.add(p.velocity);
      p.velocity.multiplyScalar(0.95); // Deceleration (friction)
      p.life -= 0.02;

      p.mesh.scale.setScalar(p.life); // Shrink it
      p.mesh.rotation.x += 0.1;

      if (p.life <= 0) p.mesh.visible = false;
    }
  });

  renderer.render(scene, camera);
}
animate();
