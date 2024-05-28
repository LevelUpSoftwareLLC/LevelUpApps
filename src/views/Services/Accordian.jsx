import React, { useState } from 'react';
import {   
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Box,
    Text,
    useColorModeValue
} from '@chakra-ui/react';
import { tagsForTheCloud } from '../../util/dataObjects/tagCloud/TagCloudCLasses';
import { getDescriptionForHeader } from './LerMoreFilter';
import { motion } from 'framer-motion';

export const AccordionComponent = () => {

    const bgColor = useColorModeValue('black', 'gray.800');
    const textColor = useColorModeValue('white', 'gray.100');

    return (
        
        <Accordion allowToggle>
      
                {tagsForTheCloud.map((header, index) => (
                    <AccordionItem key={index}>
                        <AccordionButton
                            _expanded={{ bg: 'gray.600', color: textColor }}
                            bg={bgColor}
                            color={textColor}
                        >
                            <Box flex="1" textAlign="left">
                                {header}
                            </Box>
                        </AccordionButton>
                        <AccordionPanel pb={4} bg="white" color="black">
                            <Text>
                                {getDescriptionForHeader(header)}
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>
                ))}
        
        </Accordion>
      
    );
};