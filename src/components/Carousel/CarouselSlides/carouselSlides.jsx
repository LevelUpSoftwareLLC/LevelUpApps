import React from 'react';
import { Box, Heading, UnorderedList, ListItem, Image, useColorModeValue, useTheme, Spacer } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { LavaButtonText } from '../../../util/buttons/lavaButton/lavaText'
import codeGif from '../../../../public/assets/codeGif.gif'
import variousBusinesses from '../../../../public/assets/images/variousBusiness.png'
import entrepreneur from '../../../../public/assets/images/entrepreneur.png'
import highTech from '../../../../public/assets/images/highTech.png'


const listItemVariants = {
  hidden: { x: 100, opacity: 0, transition: { duration: 0.25 } },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.25 } },
};

export const Slide1 = ({handleRouting, activeIndex, Headline, text1, text2, text3, image1, image2, image3 }) => {

  const theme = useTheme();
  const textColor = useColorModeValue(theme.colors.button.text.light, theme.colors.button.text.dark);

    return (
      <Box>
        <Heading as="h2" size={{base:'md',lg:"lg"}} mb={4} color={textColor} textAlign="center">
          {Headline}
        </Heading>
        <UnorderedList color={textColor}>
  
          <motion.div
            variants={listItemVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <ListItem>
              <Box display="flex" alignItems="center">
                <Box mr={4}>{text1}</Box>
              </Box>
            </ListItem>
          </motion.div>
        <Box h={5}></Box>
          <motion.div
            variants={listItemVariants}
            initial="hidden"
            animate={activeIndex == 0 ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <ListItem>
              <Box display="flex" alignItems="center">
                <Box mr={4}>{text2}</Box>
              </Box>
            </ListItem>
          </motion.div>
  
          <motion.div
            variants={listItemVariants}
            initial="hidden"
            animate={activeIndex == 0 ? "visible" : "hidden"}
            transition={{ duration: 0.25, delay: .75 }}
          >
              <Box display="flex" alignItems="center">
                <LavaButtonText 
                  size={{base:'md',lg:"lg"}}
                  text={text3} 
                  textColor={"white"} 
                  background={'red'} 
                  effectBackground={'red'} 
                  bubbleStartColor={'red'} 
                  bubbleEndColor={'blue'} 
                  handleClick={() => handleRouting('Estimates')} 
                />
              </Box>
            
          </motion.div>
        </UnorderedList>
      </Box>
    );
};

export const Slide2 = ({handleRouting, activeIndex, Headline, text1, text2, text3, image1, image2, image3 }) => {

  const theme = useTheme();
  const textColor = useColorModeValue(theme.colors.button.text.light, theme.colors.button.text.dark);
  const [part1, part2] = Headline.split('?');
    return (
<Box overflow="hidden">
  <Heading as="h2" size={{ base: 'md', lg: "lg" }} textAlign="center" mb={4} color={textColor}>
    {part1}?
  </Heading>
 
  <Box size={{ base: 'sm', lg: "md" }} mb={4} textAlign="center" color={textColor}>
    {part2}
  </Box>


      {/* Correcting for intended cropping */}
      <Box  overflow="hidden">
        <Box width="auto" height="auto" display="flex" justifyContent="center">
          <Image src={codeGif} borderRadius={10} alt="Code image" width='100%' height='auto'/>
        </Box>
      </Box>

      <UnorderedList color={textColor}>
        {/* Your list items go here */}
      </UnorderedList>
    </Box>
    );
};

export const Slide3 = ({ handleRouting, activeIndex, Headline, text1, text2, text3, image1, image2, image3 }) => {

  const theme = useTheme();
  const textColor = useColorModeValue(theme.colors.button.text.light, theme.colors.button.text.dark);

  return (
    <Box mb={4}>
      <Heading as="h2" size={{base:'md',lg:"lg"}} textAlign="center" mb={4} color={textColor}>
        {Headline}
      </Heading>
      <UnorderedList color={textColor}>

        <motion.div
          variants={listItemVariants}
          initial="hidden"
          animate={activeIndex == 2 ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <ListItem>
            <Box display="flex" alignItems="center" mb={1}>
              <Box mr={4}>{text1}</Box>
              <Image src={variousBusinesses} alt="Slide 3 Image" boxSize="100px" borderRadius={10}/>
            </Box>
          </ListItem>
        </motion.div>

        <motion.div
          variants={listItemVariants}
          initial="hidden"
          animate={activeIndex == 2 ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <ListItem>
            <Box display="flex" alignItems="center" mb={1}>
              <Box mr={4}>{text2}</Box>
              <Image src={entrepreneur} alt="Slide 3 Image" boxSize="100px" borderRadius={10}/>
            </Box>
          </ListItem>
        </motion.div>

        <motion.div
          variants={listItemVariants}
          initial="hidden"
          animate={activeIndex == 2 ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <ListItem>
            <Box display="flex" alignItems="center">
              <Box mr={4}>{text3}</Box>
              <Image src={highTech} alt="Slide 3 Image" boxSize="100px" borderRadius={10}/>
            </Box>
          </ListItem>
        </motion.div>
      </UnorderedList>
    </Box>
  );
};