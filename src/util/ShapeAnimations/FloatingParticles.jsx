import React, { useRef, useEffect } from 'react';
import { Box } from '@chakra-ui/react';

export const VolumetricCanvas2 = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const toggle = true;
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
      });
    }

    let startTime = null;

    // Animation loop
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / animationDuration, 1);

      context.clearRect(0, 0, width, height);

      // Create a circular clipping region
      context.beginPath();
      context.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, Math.PI * 2);
      context.clip();

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce particles off the edges
        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;

        context.beginPath();
        context.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
        context.fillStyle = 'black'; // Set particle color to black
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
    <Box bg={'transparent'}>
      <canvas ref={canvasRef} width={600} height={600} />
    </Box>
  );
};