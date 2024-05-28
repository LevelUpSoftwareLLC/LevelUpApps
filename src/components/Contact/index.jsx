import React, { useState, forwardRef } from 'react';
import { Flex, VStack, useColorModeValue } from '@chakra-ui/react';
import { ContactContainer } from './FormElement/index';

// import { PromotionalComponent } from './PromoSection';
import { NewsLetterIndex } from './Newsletter';

export const ContactComponent = forwardRef((props, ref) => {

return (

  <Flex 
    ref={ref}
    flexDir={'column-reverse'} 
    bg="none"  
    align="center" 
    color={'white'}
    // justify="space-around" 
    // minH="100vh" 
    // transform={'translateY(calc(0vh - 65vh))'}
    >

    {/* Begin Contact Section */}
    <VStack 
      spacing={2} 
      align="stretch" 
      w={{ base: '100%', md: '50%' }} 
      height="auto" >
      
      <ContactContainer/>

      <NewsLetterIndex/>
     
        </VStack>
      </Flex>

  );
});