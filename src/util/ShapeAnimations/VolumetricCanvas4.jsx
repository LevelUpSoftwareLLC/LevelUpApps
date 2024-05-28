import React, { useRef, useEffect } from 'react';
import { Box } from '@chakra-ui/react';

export const VolumetricCanvas4 = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const width = window.innerWidth
    const height = window.innerHeight;
    const toggle = true
    const particles = [];
    const particleCount = 1000;
    const animationDuration = 20000; // 20 seconds in milliseconds

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1,
        size: Math.random() * 3 + 1, // Varying particle sizes
        sinOffset: Math.random() * Math.PI * 2, // Random offset for sinusoidal movement
      });
    }

    let startTime = null;

    // Animation loop
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      context.clearRect(0, 0, width, height); // Clear the canvas with a transparent background

      // Update and draw particles
      particles.forEach((particle) => {
        // Update particle position based on sinusoidal movement
        particle.x += Math.sin(elapsed * 0.001 + particle.sinOffset) * 2;
        particle.y += Math.cos(elapsed * 0.001 + particle.sinOffset) * Math.random()* 2;

        // Slowly move particles towards the center
        particle.vx += ( width / 2 - particle.x) * 0.0002;
        particle.vy += ( height / 2 - particle.y) * 0.00015;

        // Update particle velocity
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Draw particle
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fillStyle = 'black'; // Set the particle color to black
        context.fill();
      });

      // Stop the animation after the specified duration
      if (toggle) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <Box>
      <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight}  />
    </Box>
  );
};
