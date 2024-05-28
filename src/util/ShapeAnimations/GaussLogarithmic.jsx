import React, { useRef, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import * as THREE from 'three';

export const GaussLawPlot = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const width = 600;
    const height = 400;

    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 12;

    // Create a renderer with a transparent background
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); // Set background color to transparent

    // Remove the previous canvas if it exists
    if (canvasRef.current.hasChildNodes()) {
      canvasRef.current.removeChild(canvasRef.current.firstChild);
    }

    // Append the new canvas
    canvasRef.current.appendChild(renderer.domElement);

    // Create a logarithmic scale for the plot
    const logScale = (value) => Math.log2(value + 1);

    // Create a geometry for the plot
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const colors = [];

    const maxDistance = 5;
    const maxAngle = Math.PI * 2;
    const steps = 450;

    for (let i = 0; i <= steps; i++) {
      const distance = (i / steps) * maxDistance;
      for (let j = 0; j <= steps; j++) {
        const angle = (j / steps) * maxAngle;
        const x = distance * Math.cos(angle);
        const y = distance * Math.sin(angle);
        const z = logScale(distance);

        positions.push(x, y, z);

        const grayValue = 1 - distance / maxDistance;
        colors.push(grayValue, grayValue, grayValue);
      }
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    // Create a material for the plot
    const material = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
    });

    // Create a points object for the plot
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Create a sinister ambient light
    const ambientLight = new THREE.AmbientLight(0x222222);
    scene.add(ambientLight);

    // Create a sinister directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the plot with a sinister movement
      points.rotation.y += 0.01;
      points.rotation.x += 0.01;
      points.rotation.z += 0.07;

      // Pulsate the plot size with a sinister rhythm
      const pulsateFactor = Math.sin(Date.now() * 0.001) * 0.05 + 1;
      points.scale.set(pulsateFactor, pulsateFactor, pulsateFactor);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      // Cleanup
      renderer.dispose();
    };
  }, []);

  return <Box ref={canvasRef} />;
};