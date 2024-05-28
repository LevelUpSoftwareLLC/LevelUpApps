import React, { useRef, useEffect } from 'react';
import { Box } from '@chakra-ui/react';

export const VolumetricCanvas3 = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const width = window.innerWidth;
    const height = window.innerHeight;
    const toggle = true
    const particles = [];
    const particleCount = 1000;
    const animationDuration = 20000; // 20 seconds in milliseconds

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: width / 2,
        y: height / 2,
        vx: Math.random() * 4 - 2,
        vy: Math.random() * 4 - 2,
        life: Math.random() * 100,
        size: Math.random() * 3 + 1,
        sinOffset: Math.random() * Math.PI * 2,
      });
    }

    let startTime = null;

    // Animation loop
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      context.clearRect(0, 0, width, height); // Clear the canvas with a transparent background

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update particle position based on sinusoidal movement
        particle.x += Math.sin(elapsed * 0.0001 + particle.sinOffset) * 2;
        particle.y += Math.cos(elapsed * 0.001 + particle.sinOffset) * 2;

        // Slowly move particles towards the center
        particle.vx += (width / 2 - particle.x) * 0.00015;
        particle.vy += (height / 2 - particle.y) * 0.0001;

        // Update particle velocity
        particle.x += particle.vx;
        particle.y += particle.vy;

        particle.life -= 0.1;

        // Draw the particle only if its life is greater than zero
        if (particle.life > 1) {
          context.beginPath();
          context.arc(particle.x, particle.y, particle.size, 0, Math.PI * Math.PI);
          context.fillStyle = 'black'; // Set the particle color to black
          context.fill();
        }

        // Remove dead particles
        if (particle.life <= 0) {
          particles.splice(index, 1);
          particles.push({
            x: width / 2,
            y: height / 2,
            vx: Math.random() * 4 - 2,
            vy: Math.random() * 4 - 2,
            life: Math.random() * 100,
            size: Math.random() * 3 + 1,
            sinOffset: Math.random() * Math.PI * 2,
          });
        }
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
      <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} />
    </Box>
  );
};

   