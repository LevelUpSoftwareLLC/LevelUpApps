import React,{useState} from 'react';
import { Box, Heading, Text, Icon, Input, Textarea, Button, VStack, Stack, Spacer } from '@chakra-ui/react';
import {  FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import { TiArrowBackOutline } from "react-icons/ti";

export const Contact = ( { displayForm } ) => {
  const hoverBoxShadow = '0 8px 25px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.10)'
  return (
    <Box 
      bg="gray.300" 
      p={0} 
      borderRadius={10} id="contact" 
      boxShadow='0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)'
      _hover={{
        boxShadow: hoverBoxShadow,
        transition: "transform 0.25s ease-in-out",
        '&:hover': {
          transform: 'scale(1.0)' // This will make the card larger on hover
        }
      }}
      >
      <Heading as="h3" textAlign="center" >
        CONTACT
      </Heading>
      <Text fontSize="xl" textAlign="center">
        Send us a message:
      </Text>

      <Box maxWidth="80%" mx="auto" my="auto">
        <form action="mailto:info@levelupco.com" method="post" encType="text/plain">
          <VStack spacing={4}>
            <Input type="text" _placeholder={{ color: 'black' }} placeholder="Name" name="Name" required width="100%" />
            <Input type="email" _placeholder={{ color: 'black' }} placeholder="Email" name="Email" required width="100%" />
            <Input type="text" _placeholder={{ color: 'black' }} placeholder="Subject" name="Subject" required width="100%" />
            <Textarea _placeholder={{ color: 'black' }} placeholder="Message" name="Message" required height="200px" width="100%" />
            <Stack mx={2} flexDir={['column','row']}>
              <Button
              
              leftIcon={<TiArrowBackOutline />} 
              colorScheme="black" 
              onClick={displayForm} 
              color={'black'}
              _hover={{
                boxShadow: hoverBoxShadow,
                transition: "transform 0.25s ease-in-out",
                '&:hover': {
                  transform: 'scale(1.0)' // This will make the card larger on hover
                }
              }}
              >
                Return
              </Button>
              <Spacer />
              <Button 
                  leftIcon={<FaPaperPlane />} 
                  colorScheme="black" 
                  type="submit" 
                  color={'gray'}
                   _hover={{
                    boxShadow: hoverBoxShadow,
                    transition: "transform 0.25s ease-in-out",
                    '&:hover': {
                      transform: 'scale(1.0)' // This will make the card larger on hover
                    }
                  }} >
                SEND MESSAGE
              </Button>
            </Stack>
          </VStack>
        </form>
      </Box>
    </Box>
  );
};