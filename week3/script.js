import gsap from 'gsap';
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.getElementById("scene").appendChild( renderer.domElement );

const boxGeometry = new THREE.BoxGeometry( 1, 1, 1 );
const boxMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( boxGeometry, boxMaterial );
scene.add( cube );
cube.position.x=-2;
camera.position.z = 5;

gsap.to(cube.position,{duration:2, x:2, repeat:-1, yoyo:true});
gsap.to(cube.rotation, { duration: 2, y: Math.PI * 2, repeat: -1, ease: "none" });
gsap.to(cube.rotation, { duration: 2, x: Math.PI * 2, repeat: -1, ease: "none" });
  


const animate = ()=>{
     console.log("A")

    //cube.rotation.x += 0.01;
	//cube.rotation.y += 0.01;
    
    renderer.render( scene, camera );
    requestAnimationFrame(animate)

}

animate();

