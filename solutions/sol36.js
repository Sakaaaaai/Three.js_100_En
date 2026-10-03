// Exercise 36: Animated GLTF Model
// Model answer

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

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

const light = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(5, 5, 5);
scene.add(light);
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

let mixer;
const clock = new THREE.Clock();

const loader = new GLTFLoader();
loader.load(
  "https://threejs.org/examples/models/gltf/RobotExpressive/RobotExpressive.glb",
  (gltf) => {
    const model = gltf.scene;
    model.scale.set(0.5, 0.5, 0.5);
    scene.add(model);

    // 1. Create the Mixer
    mixer = new THREE.AnimationMixer(model);

    // 2. Get and play the animation
    // gltf.animations may contain multiple clips
    // Here we play the first clip (Running, for example)
    const clip = gltf.animations[0];
    const action = mixer.clipAction(clip);
    action.play();
  }
);

camera.position.set(0, 2, 5);
camera.lookAt(0, 1, 0);

function animate() {
  requestAnimationFrame(animate);

  // 3. Update the Mixer
  if (mixer) {
    const delta = clock.getDelta();
    mixer.update(delta);
  }

  renderer.render(scene, camera);
}
animate();
