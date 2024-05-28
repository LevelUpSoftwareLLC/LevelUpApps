import React, {useState} from 'react';
import { Text, Image, Button, Container, useColorModeValue } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import { Contact } from './Form';
import { motion } from 'framer-motion';
import trust from '../../../../public/assets/images/trust.png'


export const ContactContainer = () => {
    const [toggleForm, setToggleForm]=useState(false)
    const TextColor = useColorModeValue('button.text.light', 'button.text.dark');
    const formVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    };

    const displayForm=()=>{
      setToggleForm(!toggleForm)
      console.log(toggleForm)
    }
    
    
      return (
        <>
      <Container 
        padding={0}
        overflow='hidden'  // keeps the box fitted despite size changes
        height={'fit-content'} // keeps the box fitted despite size changes
        justifyContent={'flex-start'}
        mb={8}
        color={'white'}
      >
          {!toggleForm && (
          
            <motion.div layout
                variants={formVariants}
                initial="visible"
                animate={toggleForm ? 'hidden' : 'visible'}
                transition={{ duration: 0.5 }}
                style={{ height: '100%' }}
              >
                  <Text fontSize="3xl" fontWeight="bold" mb={4}>
                    Contact Us
                  </Text>
                  <Image src={trust} alt="Trust" objectFit="cover" width={'50%'} borderRadius={10}/>
                  <Text fontSize={{ base: 'md', md: 'lg' }} >
                    Our commitment to transparency, flexibility & quality solutions has established a trusted name fostering confidence among our clients.
                  </Text>
                  <Button rightIcon={<FaArrowRight />} colorScheme="blue" mt={6} onClick={displayForm}>
                    Get in Touch
                  </Button>
                  </motion.div>
             
              )}
              <motion.div layout
                variants={formVariants}
                initial="hidden"
                animate={toggleForm ? 'visible' : 'hidden'}
                transition={{ duration: 0.5 }}
                style={{ height: '100%' }}
              >
            {toggleForm && <Contact displayForm={displayForm}/>}
          </motion.div>
        </Container>
        </>
)}