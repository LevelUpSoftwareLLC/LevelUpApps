import React, { useRef, useEffect, useState } from 'react';
import { Box, extendTheme, Flex } from '@chakra-ui/react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';



export const PhoneModel = () => {
    // useRef : persistently store a mutable value that does not cause a re-render when updated
    const mountRef = useRef(null);
    const [isMouseDisabled, setIsMouseDisabled] = useState(false);
    const mouseHoldTimeout = useRef(null);
    const mouseDisabledTimeout = useRef(null);
    const [isSpinning, setIsSpinning] = useState(true);
   
    let isMouseDown = false;
    let lastMouseX = null;
    let lastMouseY = null;
    let speedX = 0;
    let speedY = 0;
    let iPhoneModel;
    
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // Enable alpha (transparency)
      
        // Ambient Light
        const ambientLight = new THREE.AmbientLight(0xffffff, 2.0); // white light with intensity of 2
        // Adjusting the second parameter (intensity) will make the ambient light brighter or dimmer
        scene.add(ambientLight);
      
        // Hemisphere Light
        const hemisphereLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 5); // with intensity of 5
        // The first two parameters (skyColor and groundColor) control the colors of the hemisphere light
        // The third parameter (intensity) adjusts the brightness of the hemisphere light
        scene.add(hemisphereLight);
      
        // Directional Lights
        const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
        directionalLight.position.set(7, -7, 5);
        // Adjusting the position (x, y, z) will move the light in the corresponding direction
        // Increasing the y value will move the light upwards, decreasing will move it downwards
        // Increasing the x value will move the light to the right, decreasing will move it to the left
        // Increasing the z value will move the light towards the camera, decreasing will move it away
        scene.add(directionalLight);

        const directionalLight0 = new THREE.DirectionalLight(0xffffff, 5);
        directionalLight0.position.set(3, 1, 5);
        scene.add(directionalLight0);

        const directionalLight1 = new THREE.DirectionalLight(0xffffff, 5);
        directionalLight1.position.set(-3, -1, 5);
        scene.add(directionalLight1);
      
        const directionalLight2 = new THREE.DirectionalLight(0xffffff, 5);
        directionalLight2.position.set(-7, 7, 5);
        scene.add(directionalLight2);
      
        const directionalLight3 = new THREE.DirectionalLight(0xffffff, 20);
        directionalLight3.position.copy(camera.position); // this will copy the position of the camera
        directionalLight3.position.y -= 1; // move light down by 1 unit along the y-axis
        scene.add(directionalLight3);
      
        const directionalLight4 = new THREE.DirectionalLight(0xffffff, 20);
        directionalLight4.position.copy(camera.position); // this will copy the position of the camera
        directionalLight4.position.y += 1; // move light up by 1 unit along the y-axis
        scene.add(directionalLight4);
      
        // Point Lights
        const pointLight1 = new THREE.PointLight(0xffffff, 3.0); // white light with intensity of 3.0
        pointLight1.position.set(2, 3, 2);
        // Adjusting the position (x, y, z) will move the point light in the corresponding direction
        scene.add(pointLight1);
      
        const pointLight2 = new THREE.PointLight(0xffffff, 3.0);
        pointLight2.position.set(-2, -2, -2);
        scene.add(pointLight2);
      
        const pointLight3 = new THREE.PointLight(0xffffff, 3.0);
        pointLight3.position.set(2, -2, 2);
        scene.add(pointLight3);
      
        const pointLight4 = new THREE.PointLight(0xffffff, 3.0);
        pointLight4.position.set(-2, 2, -2);
        scene.add(pointLight4);
      
        ///////////end of lighting/////////////////
  
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);
        renderer.setClearColor(0x000000, 0); // Set clear color with 0 alpha (fully transparent)
        
        
    // Set initial canvas size
    const setCanvasSize = () => {
        //mountRef holds a reference to the DOM element that will be the container for the Three.js rendering typically a div  
        const width = mountRef.current.clientWidth;
        // clientWidth and clientHeight of the mountRef current value, refers to the size of the Box component
        const height = mountRef.current.clientHeight;
        renderer.setSize(width, height);  // The parameters that dictate the canvas size are derived from the dimensions of the Box component,
        camera.aspect = width / height;
        camera.updateProjectionMatrix(); // updates the camera's projection matrix when aspect ration is changed
    };

    /// Controling scale of the phone for responsivness
    const adjustCameraForResponsiveZoom = () => {
        const viewportWidth = window.innerWidth;
    
        if (viewportWidth < 600) { // for small devices
            camera.fov = 26;
        } else if (viewportWidth < 900) { // for medium devices
            camera.fov = 26;
        } else { // for large devices
            camera.fov = 31;
        }

        camera.updateProjectionMatrix();
    };
    
        setCanvasSize();
        adjustCameraForResponsiveZoom();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            setCanvasSize();
            adjustCameraForResponsiveZoom();
        });

        // Load the iPhone model
        const loader = new GLTFLoader();
  
        let modelPath = "/iPhone.glb";
 
        
        loader.load(
            modelPath, // path to your GLB file
            (gltf) => {
                iPhoneModel = gltf.scene;
                iPhoneModel.scale.set(2, 2, 2); // scale 
                scene.add(iPhoneModel);
                iPhoneModel.position.set(0, 0, 4);

                // Set initial rotation
                const radians = THREE.MathUtils.degToRad(125);
                iPhoneModel.rotation.y = radians;

            },
            undefined,
            (error) => {
                console.error('An error happened', error);
            }
        );

        camera.position.z = 5;

        function onMouseDown(event) {
            
            if (!isMouseDisabled) {
              isMouseDown = true;
              lastMouseX = event.clientX;
              lastMouseY = event.clientY;
            
              // disable the mousedown after 3 seconds
              mouseHoldTimeout.current = setTimeout(() => {
                isMouseDown = false;
                setIsMouseDisabled(true);
                // re-enable mousedown after 1.5 seconds
                mouseDisabledTimeout.current = setTimeout(() => {
                  setIsMouseDisabled(false);
                }, 1500);
              }, 1500);
            }
          }
          
          function onMouseUp() {
            
            isMouseDown = false;
            clearTimeout(mouseHoldTimeout.current);
            clearTimeout(mouseDisabledTimeout.current);
            setIsMouseDisabled(false);
          }        

    function onDocumentMouseMove(event) {
        
            if (isMouseDown && iPhoneModel) {
               const deltaX = event.clientX - lastMouseX;
               const deltaY = event.clientY - lastMouseY;
               // controlls the spin speed
               speedX = deltaX * 0.009; // save to speedX
               speedY = deltaY * 0.009; // save to speedY
               iPhoneModel.rotation.y += speedX;
               iPhoneModel.rotation.x += speedY;
               lastMouseX = event.clientX;
               lastMouseY = event.clientY;
           }
         }

        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);
        document.addEventListener('mousemove', onDocumentMouseMove);

        const animate = () => {
            // simulating a drag effect
            if(!isMouseDown) {
                const dragCoefficient = .01; // adjust higher for more wind resistance
                speedX -= dragCoefficient * speedX;
                speedY -= dragCoefficient * speedY;
            }
            if (iPhoneModel) {
                iPhoneModel.rotation.y += speedX;
                iPhoneModel.rotation.x += speedY;
                
            }
            
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
            // calculate active spinning speed
            // setSpeed(Math.sqrt(speedX * speedX + speedY * speedY));
        };

        animate();

        const autoSpin = () => {
            if (isSpinning && iPhoneModel) {
                iPhoneModel.rotation.y += 0.01; // Adjust the speed as needed
            }
            requestAnimationFrame(autoSpin);
        
        };

        // console.log(mountRef.current);
        autoSpin();
        return () => {
            // Cleanup
            mountRef.current.removeChild(renderer.domElement);
            window.removeEventListener('resize', adjustCameraForResponsiveZoom);
            document.removeEventListener('mousedown', onMouseDown);
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onDocumentMouseMove);
            clearTimeout(mouseHoldTimeout.current);
            clearTimeout(mouseDisabledTimeout.current);
          };

    }, []); // end useEffect
      
    return (
    <Flex direction="row"  justifyContent="center" alignItems="center">
        <Box 
        as="main"
        id="main" 
        ref={mountRef}
        height={{ base: "30vh", sm: "35vh", md: "45vh" }} 
        width={{ base: "37vw", sm: "35vw", md: "35vw", lg: "20vw", xl: "20vw" }}  />
    </Flex >
    );
 }


