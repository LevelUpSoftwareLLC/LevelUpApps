import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {Box, VStack, Text, Button, Modal } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import { Oauth2 } from './Modal/OAUTH2Modal';



export const EstimatePromo = () => {
  const [showEstimation, setShowEstimation] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const estimationVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const toggleEstimation = () => {
    setShowEstimation(!showEstimation);
  };

  const openModal = () =>{
    setIsModalOpen(!isModalOpen)
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setShowEstimation(false);
  };

  return (
    <VStack display="flex" justifyContent="space-between" alignItems="flex-start" height={'180px'} mb={{base: 20, lg: 8}}>
      <motion.div
        layout
        variants={estimationVariants}
        initial="visible"
        animate={showEstimation ? 'hidden' : 'visible'}
        transition={{ duration: 0.75 }}
        style={{ height: '100%' }}
      >
        {!showEstimation && (
          <Box>
            <Text fontSize={{ base: 'md', md: 'lg' }} mb={2} pr={1}>
            <Text as="span" fontSize="2xl" fontWeight="bold"> Take advantage</Text>  of our Powerful custom-made AI-driven estimation engine, leverage the power of Data
              Structures and Algorithms to fully customize your design and understand your vision. Even choose the pay
              rate you'd prefer for the project, we insist on the realization of solutions that'll exceed your
              expectations.
            </Text>

            <Button rightIcon={<FaArrowRight />} colorScheme="blue" onClick={toggleEstimation}>
              Get Custom Estimate
            </Button>
          </Box>
        )}
      </motion.div>

      <motion.div
        layout
        variants={estimationVariants}
        initial="hidden"
        animate={showEstimation ? 'visible' : 'hidden'}
        transition={{ duration: 0.75 }}
        style={{ height: '100%' }}
      >
        {showEstimation && (
          <Box>
            <Text fontSize="lg">Want your own custom estimate?</Text>
            {/* Add your estimation content here */}
            <Button rightIcon={<FaArrowRight />} colorScheme="blue" onClick={openModal}>
              Get Estimate now
            </Button>
          </Box>
        )}
      </motion.div>

      <Modal isOpen={isModalOpen} onClose={closeModal} isCentered motionPreset="slideInBottom">
        <Oauth2 onClose={closeModal} />
      </Modal>

    </VStack>
  );
};