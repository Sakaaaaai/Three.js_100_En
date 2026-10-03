// Exercise 98: Multiplayer Preparation (The Concept of Synchronization)
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

const playerMeshes = {}; // Manages the meshes currently on display

function updatePlayers(serverData) {
  // Handle the IDs present in the server data
  for (const id in serverData) {
    const data = serverData[id];

    if (!playerMeshes[id]) {
      // A new player
      const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
      const material = new THREE.MeshNormalMaterial();
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      playerMeshes[id] = mesh;
    }

    // Update the position
    const mesh = playerMeshes[id];
    mesh.position.set(data.x, 0, data.z);
  }

  // Delete the IDs that are not in the server data
  for (const id in playerMeshes) {
    if (!serverData[id]) {
      scene.remove(playerMeshes[id]);
      delete playerMeshes[id];
    }
  }
}

// Mock server
let mockData = {
  user1: { x: 0, z: 0 },
  user2: { x: 2, z: 0 },
};

setInterval(() => {
  // Move them randomly
  for (const id in mockData) {
    mockData[id].x += (Math.random() - 0.5) * 0.5;
    mockData[id].z += (Math.random() - 0.5) * 0.5;
  }

  // Occasionally add or remove players
  if (Math.random() < 0.05) {
    const newId = "user" + Math.floor(Math.random() * 1000);
    mockData[newId] = { x: 0, z: 0 };
  }
  if (Math.random() < 0.05) {
    const ids = Object.keys(mockData);
    if (ids.length > 0) delete mockData[ids[0]];
  }

  updatePlayers(mockData);
}, 100);

camera.position.set(0, 5, 10);
camera.lookAt(0, 0, 0);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
