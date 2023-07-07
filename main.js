import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
//scene

const scene = new THREE.Scene();
const light = new THREE.AmbientLight(0xcccccc);
const directionalLight = new THREE.DirectionalLight( 0xffffff );
directionalLight.position.set( 0, 1, 1 ).normalize();
// scene.add( directionalLight );	
light.position.set(0,5,5);
scene.add(light);
const canvas = document.querySelector(".webgl")

var container = document.getElementById("overlay3");
var w = container.offsetWidth;
var h = container.offsetHeight;
let aspect = w/h;
const camera = new THREE.PerspectiveCamera(100, aspect, 0.01, 20000);
const frustumSize = 10;
// const camera = new THREE.OrthographicCamera( frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, 1, 1000 );
camera.zoom = 50;
scene.add( camera );
camera.position.set(1,1,20);

const helper = new THREE.CameraHelper(camera);
scene.add(helper);

// const geometry = new THREE.BoxGeometry(0.2,0.2,0.2);
// const material = new THREE.MeshStandardMaterial({
//     roughness: 0,
//     color: 0x0000ff
// });
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

const renderer = new THREE.WebGLRenderer({canvas});
// renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0x0000ff);
renderer.setPixelRatio(window.devicePixelRatio);

//UNCOMMENT FOR ANIMATION
// renderer.setAnimationLoop( animation );

renderer.setSize(w, h);
container.appendChild(renderer.domElement);

//Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;

//GLTF Loader
let clock = new THREE.Clock();
let mixer;
const loader = new GLTFLoader();
loader.load(
	// resource URL
	'models/organelle4.glb',
	// called when the resource is loaded
	function ( gltf ) {
        mixer = new THREE.AnimationMixer( gltf.scene );
        const object = gltf.scene;
        gltf.scene.scale.set(1,1,1);
        gltf.scene.position.x = 0;
        gltf.scene.position.y = 0;
        gltf.scene.position.z = 0;
        
        //UNCOMMENT THIS FOR ANIMATIONS
        // console.log(gltf.animations[0]);
        // let action = mixer.clipAction( gltf.animations[ 0 ] );
        // action.play();
        
        scene.add(gltf.scene);
		
	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);


// update
function update() {
    // mixer.update(clock.getDelta());
    controls.update();
}

// update function to the render loop
function renderLoop() {
    requestAnimationFrame(renderLoop);
    update();
    renderer.render(scene, camera);
}

// fire-up the render loop
renderLoop();




//responsiveness
const sizes = {
    width: container.offsetWidth,
    height: container.offsetHeight,
}

window.addEventListener('resize', () => {
    w = container.offsetWidth;
    h = container.offsetHeight;
    //Update Camera
    camera.updateProjectionMatrix();
    //Update Renderer
    renderer.setSize(w,h);
})
