import gsap from 'gsap';
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);


const wireframeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
const sphere = new THREE.Mesh(sphereGeometry, wireframeMaterial);
scene.add(sphere);

camera.position.z = 3;

gsap.to(sphere.rotation, { duration: 10, y: Math.PI * 2, repeat: -1, ease: "none" });

function animate() {

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
    
}

animate();
