import * as THREE from 'three';

const scene = new THREE.Scene();

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

const cubeGeometry = new THREE.BoxGeometry();
const cubeMaterial = new THREE.MeshPhongMaterial({
    color: 0xffffff, 
    shininess: 100,   
    specular: 0x555555
});
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.x = -4; 
scene.add(cube);

const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const sphereMaterial = new THREE.MeshPhongMaterial({
    color: 0xffffff, 
    shininess: 100,    
    specular: 0x555555 
});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.x = 4;
scene.add(sphere);

const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
const cylinderMaterial = new THREE.MeshPhongMaterial({
    color: 0xffffff, 
    shininess: 100,  
    specular: 0x555555 
});
const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
cylinder.position.y = 0; 
scene.add(cylinder);


const aspect = window.innerWidth / window.innerHeight;

const camera = new THREE.OrthographicCamera(-10, 10, 10, -10, 0, 120);
    

camera.position.z = 10; 
camera.position.y = 2; 

//camera.lookAt(sphere.position); 

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById("scene").appendChild(renderer.domElement);


function animate() {
    requestAnimationFrame(animate);
    cylinder.position.x +=0.03;
    console.log(cylinder.position);
    renderer.render(scene, camera);
}
animate();
