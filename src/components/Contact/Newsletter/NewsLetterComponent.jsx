import React, {useState} from 'react';
import { Box, Flex, Text, Input, FormControl, FormLabel, IconButton, Container,  } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';

export const NewsLetterComponent = () => {

return (
        <Container
          padding={0} // container components have default padding
          maxH="container.sm"
          overflow="hidden"
          height="auto"
          justifyContent="flex-start"
          mb={8}
      >
          <Box>
            <Text fontSize="3xl" fontWeight="bold">Newsletter</Text>
            <Text fontSize="lg" mb={4}>
              Sign up for our newsletter to stay updated on the latest LevelUp news, insights into the tech industry, and behind-the-scenes looks at our newest projects and innovations.
            </Text>
            <FormControl id="email">
              <Flex>
                <Input type="email" placeholder="Enter your email" />
                <IconButton
                  colorScheme="blue"
                  aria-label="Subscribe"
                  icon={<FaArrowRight />}
                  ml={1}
                />
              </Flex>
            </FormControl>
          </Box>

        </Container>
    

  );
};