import React, {useState} from 'react';
import { Box, HStack, VStack, Text, Image, Button, Grid } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import { skills } from '../../../util/dataObjects/skills'
import { motion } from 'framer-motion';



export const NewestTechPromo = () => {
const [toggle, setToggle]=useState(false)

  const imageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

const displayImages=()=>{
  setToggle(!toggle)
  console.log(toggle)
}

return (
    <>
      <VStack display="flex" justifyContent="space-between" alignItems="flex-start" height={'300px'}>
          <VStack display="flex" alignItems="flex-start">
            <Text fontSize={{ base: 'md', md: 'lg' }} >
              We leverage the latest, most powerful tools for SaaS, Web, & Mobile Apps. Whether it's a new Development or an existing one, you're covered from UI/UX all the way to customized maintenance options and/or security audits.
            </Text>
            <Button rightIcon={<FaArrowRight />} colorScheme="blue" onClick={() => displayImages()}>
              View Tools
            </Button>
          </VStack>
        <motion.div
          layout
          variants={imageVariants}
          initial="hidden"
          animate={toggle ? 'visible' : 'hidden'}
          transition={{ duration: 0.5 }}
          style={{ height: '100%' }}
          >
          {toggle && (
            <Box>
          <Grid templateColumns="repeat(auto-fill, minmax(50px, 1fr))" gap={0}>
            {skills.map((skillUrl, index) => (
              <Box key={index} p="1">
                <Image src={skillUrl} alt={`Skill ${index + 1}`} boxSize="25px" objectFit="cover" />
              </Box>
            ))}
          </Grid>
        </Box>
          )}
        </motion.div>
      </VStack>
    </>
  );
};