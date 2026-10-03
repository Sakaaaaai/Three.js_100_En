// Exercise 10: Add OrbitControls
// Write your solution here. Stuck? Open the model answer from the panel in the top-right.

import * as THREE from "three";
// --- Import OrbitControls here ---

// ...setup...

// --- Create the controls here ---

function animate() {
  requestAnimationFrame(animate);

  // --- Call update if needed ---

  renderer.render(scene, camera);
}
animate();
