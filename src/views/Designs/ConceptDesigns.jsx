import React, { useEffect, forwardRef, useRef } from 'react';
import { VStack, HStack, Box, Text, Image, useColorModeValue, useBreakpointValue, useTheme, SimpleGrid, Heading } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { designItems } from '../../util/designPageURI\'s/designs';

export const SomeDesigns = forwardRef((props, ref) => {
  const theme = useTheme();
  const textColor = useColorModeValue(theme.colors.button.text.light, theme.colors.button.text.dark);
  const containerRef = useRef();

  useEffect(() => {
    const totalWidth = containerRef.current.scrollWidth;
    containerRef.current.style.setProperty('--scroll-width', `${totalWidth}px`);
  }, []);

  const scrollAnimations = css`
  @keyframes scrollHorizontal {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-1 * var(--scroll-width))); }
  }

  animation: scrollHorizontal 35s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

  return (
    <>
      <VStack 
        spacing={8} 
        alignItems="center" 
        py={8} 
        px={4}
      >
        <Heading ref={ref} color={textColor}>
          Design Samples
        </Heading>
        <Box overflow="hidden" width="100%">
          <Box
            ref={containerRef}
            display="flex"
            width="auto"
            css={scrollAnimations} // Apply the animation CSS here
          >
            {[...designItems, ...designItems].map((item, index) => (
              <Box 
                key={`${item.id}-${index}`} 
                p={6} 
                rounded="md" 
                bg='gray.900' 
                mr={2} 
                minWidth={{base:"300px", sm:"300px"}}
               >
                <Text fontSize="xl" fontWeight="bold" color={textColor}>
                  {item.title}
                </Text>
                <Image 
                src={item.imageUrl} 
                alt={item.title} 
                borderRadius="md" mb={4} 
                objectFit="cover"  
                _hover={{
                  transition: "transform 0.5s ease-in-out",
                  cursor: "pointer",
                  height: "fit-content",
                  position: "absolute"
                }}
                />
                <Text mt={2} color={textColor}>
                  {item.description}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>
      </VStack>
    </>
  );
});