// Exercise 90: Inventory System UI (HTML Integration)
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

// Create the UI
const ui = document.createElement("div");
ui.style.position = "absolute";
ui.style.bottom = "0";
ui.style.width = "100%";
ui.style.height = "100px";
ui.style.backgroundColor = "rgba(0,0,0,0.5)";
ui.style.display = "flex";
document.body.appendChild(ui);

// Place the items
const items = [];
// ...

// Click event
window.addEventListener("click", (e) => {
  // Raycaster detection
  // ...
  // addToInventory(object);
});

function addToInventory(obj) {
  obj.visible = false;
  const icon = document.createElement("div");
  icon.innerText = "Item";
  icon.style.color = "white";
  icon.style.margin = "10px";
  icon.onclick = () => {
    // Put-back handling
  };
  ui.appendChild(icon);
}

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
