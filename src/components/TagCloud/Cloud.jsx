import React, { useEffect, useRef } from 'react';
import { Box, Flex, Text, VStack, useColorModeValue, useTheme } from '@chakra-ui/react';
import { TagsCloud } from '../../util/dataObjects/tagCloud/TagCloudCLasses';
import { tagsForTheCloud } from '../../util/dataObjects/tagCloud/TagCloudCLasses';

export const Cloud = () => {
  const cloudRef = useRef(null);
  const theme = useTheme();
  const textColor = useColorModeValue(theme.colors.button.text.light, theme.colors.button.text.dark);
  useEffect(() => {
    // Make sure the ref is correctly pointing to the element before initiating the tags cloud
    if (cloudRef.current) {
      const cloud = new TagsCloud(cloudRef.current);

      cloud.start();

      return () => cloud.stop(); // Cleanup function to stop the animation when the component unmounts
    }
  }, []); 

  return (
    <VStack bg="none" height="auto" justifyContent="center" >
      <Flex 
        ref={cloudRef} 
        left={['auto','50%']} 
        transform={{base:'translateY(calc(100% - 75%)) translateX(calc(100% - 90%))' ,sm:"translateY(calc(100% - 80%)) translateX(calc(100% - 140%))"}}
        width={{base:"70vmin",sm:"60vmin"}} 
        height={{base:"80vmin",sm:"70vmin"}} 
        position="absolute" 
        className="tags-cloud"
        
      >
        {tagsForTheCloud.map((tag, index) => (
          <Box key={index} className="tag" position="absolute" >
            <Text color={textColor} fontSize="4vmin">{tag}</Text>
          </Box>
        ))}
      </Flex>
    </VStack>
  );
};
