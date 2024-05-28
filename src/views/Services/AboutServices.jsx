import React, { useState } from 'react';
import { VStack, HStack, Box, Text, Image, useColorModeValue, useBreakpointValue, useTheme} from '@chakra-ui/react';
import { LavaButtonText } from '../../util/buttons/lavaButton/lavaText'
import { AccordionComponent } from './Accordian'
import { Cloud } from '../../components/TagCloud/Cloud';
import { motion } from 'framer-motion';

export const About = () => {

  const theme = useTheme();
  const textColor = useColorModeValue(theme.colors.button.text.light, theme.colors.button.text.dark);
    // Responsive settings can be adjusted using useBreakpointValue
    
    const [learnMore, setLearnMore] = useState(false);
    
    const handleLearnMoreClick = () => {
      setLearnMore(!learnMore);
    };



    return (
      <>
        {/*Services Section & Tag Cloud*/}
        <HStack 
          display='flex'  
          flexDirection={{base: 'column', md: 'row'}} 
          justifyContent="space-between" 
          spacing={0} 
          color={textColor} 
          alignItems="flex-start" 
        >
          {/* Creates the gray verticle line*/}
        <Box 
          bg="gray.300" 
        > 
          <VStack 
            ml={"5px"} 
            spacing={4} 
            pl={4} 
            bg={"gray.900"} 
            alignItems="flex-start"
          >
            {!learnMore ? 
            <>
              <Text fontSize="2xl" fontWeight="semibold">
                Our Services
              </Text>
              <Text>
                LevelUp offers a comprehensive range of end-to-end services,
                including UI/UX design, mobile app development, software engineering, web development and more...
              </Text>
            </> :
                <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
              >
                <AccordionComponent/>
              </motion.div>
            }

            <Box 
              display="flex" 
              justifyContent="flex-start"
            >
              <LavaButtonText 
                h={'auto'}
                text={learnMore ? 'Return' : "Learn More"} 
                textColor="white" 
                background={"black"} 
                bubbleStartColor={'black'} 
                bubbleEndColor={"gray.400"}
                handleClick={handleLearnMoreClick}
              />
            </Box>

          </VStack>
          </Box>
          <Box position={'absolute'} display="flex" transform={learnMore ? 'translateY(70vh) translateX(15vh)':'translateY(60vh)'} zIndex={learnMore? -5 : 0 }>

            <Cloud/>
            
          </Box>
          
        </HStack>
        </>
    );
  };