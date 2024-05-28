import React, {useState} from 'react';
import {  Container } from '@chakra-ui/react';
import { NewsLetterComponent } from './NewsLetterComponent';



export const NewsLetterIndex = () => {

return (

        <Container
          padding={0} // container components have default padding
          maxH="container.sm"
          overflow="hidden"
          height="auto"
          justifyContent="flex-start"
          mb={8}
        >
            
            <NewsLetterComponent />

        </Container>
    

  );
};