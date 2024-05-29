import React, { useState, forwardRef } from 'react';
import { 
  Box, 
  Text, 
  VStack, 
  HStack,
  Image, 
  useColorModeValue, 
  useTheme, 
  Container
} from '@chakra-ui/react';
import collaboration from '../../../public/assets/images/Collaboration.png'
import { WorkHere } from './Openings';
import { PartnerComponent } from './Partnership';

export const Careers_Partners = forwardRef((props, ref) => {
  const theme = useTheme();
  const textColor = useColorModeValue(theme.colors.button.text.light, theme.colors.button.text.dark);

return (

  <HStack 
    ref={ref}
    display='flex'  
    flexDirection={{base: 'column', md: 'row'}} 
    justifyContent="space-between" 
    spacing={0} 
    color={textColor} 
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
        <Text fontSize="2xl" fontWeight="semibold">
          Partnerships
        </Text>
        
        <Box w={'auto'} mr={4} mb={{ base: 8, md: 0 }}>
          <Image borderRadius={10} src={collaboration} alt="A bunch of people working together" objectFit="cover" />
        </Box>

      </VStack>
    </Box>

    <Box display="flex">

      <VStack>

        <Container padding={0}>
          <PartnerComponent/>
        </Container>

        {/* spacer */}
          <Box height={{ base: 0, sm: 1 }}></Box>

        <Container padding={0}>
          <WorkHere/>
        </Container>

      </VStack>

    </Box>

  </HStack>

  );
});

