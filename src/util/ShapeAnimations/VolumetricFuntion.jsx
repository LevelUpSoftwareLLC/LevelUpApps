import React, { useRef, useEffect } from 'react';
import { Box } from '@chakra-ui/react';

export const VolumetricCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    let frameCount = 0;
    let animationFrameId;
    const animationDuration = 20000; // 20 seconds in milliseconds

    // The function to simulate changes in the vector field
    const render = () => {
      frameCount++;
      context.clearRect(0, 0, width, height); // Clear the canvas

      // Draw the vector field
      for (let i = 0; i < width; i += 20) {
        for (let j = 0; j < height; j += 20) {
          const value = Math.floor((Math.sin(frameCount * 0.05 + (i + j) * 0.1) + 1) * 128);
          context.fillStyle = `rgb(${value}, ${value % 255}, 255)`;
          context.fillRect(i, j, 18, 18); // Draw rectangles representing vector magnitudes
        }
      }

      // Stop the animation after the specified duration
      if (frameCount * 1000 / 60 < animationDuration) {
        animationFrameId = window.requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <Box>
      <canvas ref={canvasRef} width={600} height={400} />
    </Box>
  );
};

