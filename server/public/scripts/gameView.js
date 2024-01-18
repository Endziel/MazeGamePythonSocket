
// import * as THREE from '/MazeGamePythonSocket/server/threejs/build/three.module.js';
import * as THREE from '../../threejs/build/three.module.js';
import { OrbitControls } from '../../threejs/examples/jsm/controls/OrbitControls.js';






const canvas = document.querySelector('#ThreeJsCanvas');
const renderer = new THREE.WebGLRenderer({antialias: true, canvas});
const fov = 75;
const aspect = canvas.clientWidth / canvas.clientHeight;  // the canvas default
const near = 0.1;
const far = 5;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

const controls = new OrbitControls( camera, renderer.domElement );
controls.mouseButtons.RIGHT = THREE.MOUSE.ROTATE;
controls.mouseButtons.MIDDLE = THREE.MOUSE.PAN ;
controls.mouseButtons.LEFT = '';

	// controls.update();




const scene = new THREE.Scene();
// const boxWidth = 1;
// const boxHeight = 1;
// const boxDepth = 1;
const planeWidth = 3;
const planeHeight = 3;
// const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
// const material = new THREE.MeshPhongMaterial({color: 0x44aa88});
// const cube = new THREE.Mesh(geometry, material);
const geometry = new THREE.PlaneGeometry( planeWidth, planeHeight );
const material = new THREE.MeshPhongMaterial({color: 0x44aa88});
const plane = new THREE.Mesh(geometry, material);

scene.add(plane);
renderer.render(scene, camera);


function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}


function render(time) {
  time *= 0.001;  // convert time to seconds
    if (resizeRendererToDisplaySize(renderer))
    {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }



  // cube.rotation.x = time;
  // cube.rotation.y = time;

  renderer.render(scene, camera);

  requestAnimationFrame(render);
}


{
  const color = 0xFFFFFF;
  const intensity = 3;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  scene.add(light);
}

requestAnimationFrame(render);


