import React, { useState } from 'react'
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { Section } from './section';
import logo from '../../../../public/assets/images/logo.png'
import { sections } from '../../../util/dataObjects/JSONStructures/ExpandCardData'


export const ExpandCard = () => {
    const [isToggled, setIsToggled] = useState(false);
    const [slideIndex, setSlideIndex] = useState(null);

      // Function to handle mouse enter
  const handleMouseEnter = (index) => {
    setIsToggled(true); // Set the toggle state to true when mouse enters
    setSlideIndex(index)
  };

  // Function to handle mouse leave
  const handleMouseLeave = () => {
    setIsToggled(false); // Set the toggle state to false when mouse leaves
    setSlideIndex(null);
  };

  const renderText = (text, size) => {
    // Calculate dynamic sizes based on the provided 'size' parameter
    const baseSize = `${size}rem`; // Default size for small screens
    const mdSize = `${size * 1.05}rem`; // Slightly larger on medium screens
    const lgSize = `${size * 1.25}rem`; // Largest size for large screens
  
    return (
      <>
        <Text
          fontFamily="EB Garamond"
          paddingX={2}
          lineHeight="1.5"
          fontWeight="bold"
          fontSize={{ base: baseSize, md: mdSize, lg: lgSize }} // Dynamic font size based on 'size'
          textShadow="1px 1px 1px rgba(255, 255, 255, 0.1), -1px -1px 1px rgba(255, 255, 255, 0.0), 4px 4px 5px rgba(255, 255, 255, 0.2), 1px 1px 2px rgba(255, 255, 255, 0.1)"
          color="white"
        >
          {text}
        </Text>
      </>
    );
  }
  return (
    <Box boxSizing="border-box" >
      <Flex h="50vh" >
      {sections.map((section, index) => (
        <Section key={section.name} backgroundImage={section.backgroundImage}>
          {index >= 0 && (
            
          <Box    
              position="absolute"
              flexDirection="column"
              top={0}
              right={0}
              bottom={0}
              left={0}
              display="flex"
              alignItems="center"
              zIndex={3}
              objectFit="contain"
              transition="background-color .8s ease"
              onClick={
                () => {
                  handleMouseEnter(index)
                  setTimeout(() => {
                    handleMouseLeave()
                  }, 3000)
              }}
              backgroundColor={
                slideIndex === index ? "rgba(0, 0, 0, 0.95)" : "transparent"
              }
            >
              
              <Image
                  src={logo}
                  alt='Your Logo'
                  boxSize={{ base: '75%', md: '55%'}}
                  transform={{base:"translateY(1rem)", md: "translateY(-1rem)" }}
                  zIndex={-1}
                  h="auto"
                  objectFit="contain"
                  borderRadius={'50%'}
              />
            {slideIndex === index ? renderText(section.description, 1.0) : renderText(section.description, .5)}
            {/* {renderText(section.description)} */}
          </Box>
          )}
          {/* moves the headline text */}
        <Text
          zIndex={3}
          transform={slideIndex === index ? { base:"translateY(12rem) scale(.8)", md: "translateY(-1rem)" } : { base:"scale(.35)", md: "scale(.55)" }}
          transition="transform 0.5s ease-in-out"
          position="relative"
          > {section.name}
        </Text>
        </Section >
      ))}
      </Flex>
    </Box>
  );
};
  