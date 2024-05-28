import React, { useState } from 'react';
import { VStack, HStack, Box, Text, Image, useColorModeValue, useBreakpointValue, useTheme} from '@chakra-ui/react';
import { LavaButtonText } from '../../util/buttons/lavaButton/lavaText'
import logo from '../../../public/assets/images/logo.png'



export const PortfolioContainer = ({ changeIndex, numTags, currIndex }) => {
  const theme = useTheme();
  const textColor = useColorModeValue(theme.colors.button.text.light, theme.colors.button.text.dark);
  const [currentLogo, setCurrentLogo] = useState(logo);

  const handleLearnMoreClick = () => {
    let tempIndex = currIndex
    if(tempIndex >= numTags-1){
      changeIndex(0)
      return
    }
    tempIndex += 1;
    changeIndex(tempIndex)
  };
  
  return (
    <>
      {/* Portfolio Section */}
        {/* creates the verticle gray line */}
        <Box bg="gray.300">
          <VStack
            bg={"gray.900"} 
            ml={"5px"}
            spacing={4} 
            pl={4} 
            alignItems="flex-start"
          >
          <Text width={['calc(100vw - 20vw)','calc(100vw - 75vw)']} fontSize="2xl" fontWeight="semibold" >
            Portfolio
          </Text>
          <Text width={['calc(100vw - 20vw)','calc(100vw - 75vw)']} >
            Showcasing a selection of our groundbreaking projects, including mobile apps and
            software that exemplify our commitment to innovation and quality.
          </Text>

          <Box 
            display="flex" 
            justifyContent="flex-start"
          >
            <LavaButtonText
              text={'See More'}
              textColor="white"
              background={"black"}
              bubbleStartColor={'black'}
              bubbleEndColor={"gray.400"}
              handleClick={handleLearnMoreClick}
            />
          </Box>
          </VStack>
        </Box>
    </>
  );
};


