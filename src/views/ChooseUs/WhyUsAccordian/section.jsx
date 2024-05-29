import React, { useState, useEffect } from 'react';
import { Box, Flex, Link, Text, Image, Button, Grid, GridItem } from "@chakra-ui/react";

export const Section = ({ backgroundImage, children, onClick }) => {
  const [flexValue, setFlexValue] = useState(1);

  const handleClick = () => {
    setFlexValue(13); // Set flex to 13 on click
    setTimeout(() => {
      setFlexValue(1); // Revert flex to 1 after 3 seconds
    }, 3000);
    
  };
    return (
    <Flex
   
      borderRadius={'25px'}  
      marginX={1}
      flex={flexValue}
      justifyContent="center"
      alignItems="center"
      h="100%"
      overflow="hidden"
      bgSize="cover"
      bgPosition="center"
      color="#ffffff"
      transition="flex 0.5s ease"
      position="relative"
      onClick={handleClick}
      backgroundImage={backgroundImage}
    >
      <Box
        top={0}
        right={0}
        bottom={0}
        left={0}
        display="flex"
        alignItems="center"
        justifyContent="center"
        zIndex={2}
        fontSize="4xl"
        transition="background-color .8s ease"
        _hover={{ backgroundColor: "rgba(0, 0, 0, 0.95)" }}
      >
      <Box
        onClick={onClick}
        position="absolute"
        top={0}
        right={0}
        bottom={0}
        left={0}
        display="flex"
        alignItems="center"
        justifyContent="center"
        zIndex={2}
        fontSize="4xl"
        transition="background-color .8s ease"
        _hover={{ backgroundColor: "rgba(0, 0, 0, 0.95)", textDecoration: "underline" }}
        w="100%"
        h="100%"
      >
        {children}
      </Box>
      </Box>
      <Box
      
        backgroundColor="rgba(0, 0, 0, 0.7)"
        w="100%"
        h="100%"
        position="absolute"
        transition="background-color .8s ease"
        _hover={{ backgroundColor: "rgba(0, 0, 0, 0.95)" }}
      />
    </Flex>
  );
}