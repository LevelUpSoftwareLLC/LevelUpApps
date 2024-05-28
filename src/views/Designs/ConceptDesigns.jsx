import React, { useState, forwardRef } from 'react';
import { VStack, HStack, Box, Text, Image, useColorModeValue, useBreakpointValue, useTheme, SimpleGrid, Heading } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { designItems } from '../../util/designPageURI\'s/designs';

export const SomeDesigns = forwardRef((props, ref) => {
  const theme = useTheme();
  const textColor = useColorModeValue(theme.colors.button.text.light, theme.colors.button.text.dark);

  const scrollAnimations = css`
  @keyframes scrollHorizontal {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  animation: scrollHorizontal ${designItems.length*1}s linear infinite;

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
          Our Designs
        </Heading>
        <Box overflow="hidden" width="100%">
          <Box
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
                minWidth={{base:"200px", sm:"300px"}}
               >
                <Image src={item.imageUrl} alt={item.title} borderRadius="md" mb={4} 
                height="400"
                // objectFit="cover"  
                _hover={{
                  // transform: "scale(1.3)",
                  transition: "transform 0.5s ease-in-out",
                  cursor: "pointer",
                  objectFit: "none",
                  overflow: "visible",
                  height: "fit-content",
                  position: "absolute"
            }}
                  onClick={() => {
                    // Handle image click event, e.g., open a modal or navigate to a new page
                  }}/>
                <Text fontSize="xl" fontWeight="bold" color={textColor}>
                  {item.title}
                </Text>
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