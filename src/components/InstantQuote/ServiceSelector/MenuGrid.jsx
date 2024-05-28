import React, { useState, useEffect, useReducer, forwardRef } from "react";
import { Stack, Flex, Grid, Select, HStack, Text, Box, Image, Checkbox } from '@chakra-ui/react' 

export const MenuOutputOptions = ( {selectedOptions, handleCheckboxChange, checkedOption} ) => {

    

    return (
        <>
        <Grid 
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }} 
            gap={6}> 
    {selectedOptions.map((option, index) => (
        <Box
            className="card" 
            margin={1} 
            key={index} 
            padding={4}
            borderRadius="8px"
            background="linear-gradient(145deg, #f5f5f5, #e1e1e1)"
            boxShadow="5px 5px 15px #d1d1d1, -5px -5px 15px #ffffff"
            transition="all 0.3s ease-in-out"
            _hover={{
                boxShadow: "2px 2px 5px #d1d1d1, -2px -2px 5px #ffffff"
            }}>
            <Flex 
                justifyContent="center" 
                alignItems="center" 
                height="150px">
                <Image  
                    boxSize={{ base: "75px", sm: "100px", md: "125px", lg: "125px", xl: "150px" }}
                    borderRadius="8px"
                    objectFit="cover"
                    
                    src={option.image}
                    alt={option.title}
                    transition="transform 0.3s ease-in-out"
                    _hover={{
                        transform: "scale(1.05)"
                    }}/>
            </Flex>
            <Text
                className="title" 
                fontWeight="bold"
                fontSize="1.25rem"
                mb="1rem">
                {option.title}
            </Text>
            <hr></hr>
            <Text 
                fontSize="0.9rem"
                mb="1rem">
                {option.description}
            </Text>
            <Text 
                borderTop="1px solid blue" 
                fontSize="0.85rem"
                color="#888"
                mb="1rem">
                {option.price}
            </Text>
            
            <Checkbox 
                className="check"
                mt={2}
                bg='gray.300'
                borderRadius='4'
                onChange={() => handleCheckboxChange(option)}
                isChecked={checkedOption === option.title}>
                Select
            </Checkbox>
                </Box>
            ))}
        </Grid>
        </>
       
    )
}



