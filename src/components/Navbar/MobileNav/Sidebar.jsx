import React from 'react';
import {
    Box,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    VStack,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Link,
} from '@chakra-ui/react';

export const Sidebar = ( { handleRouting } ) => {


  
    return (
    <>
    <DrawerOverlay />
    <DrawerContent bg="black" color="white">
    <DrawerCloseButton size="lg" />
    <DrawerHeader borderBottomWidth="1px" fontSize="2xl" p={4}>
        Menu
    </DrawerHeader>
    <DrawerBody>
        <VStack spacing={4} align="stretch">
        <Accordion allowMultiple>
        <AccordionItem>
            <AccordionButton>
                <Box flex="1" textAlign="left">
                Info
                </Box>
                <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
                <VStack align="stretch">
                <Link onClick={(e) => {handleRouting("Services")}}>
                    About
                </Link>
                <Link onClick={(e) => {handleRouting("Portfolio")}}>
                    Portfolio
                </Link>
                <Link onClick={(e) => {handleRouting("Blog")}}>
                    Blog
                </Link>
                </VStack>
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <Link onClick={(e) => {handleRouting("Designs")}}>
                <Box p={4} flex="1" textAlign="left" borderBottomWidth="1px">
                    Designs
                </Box>
            </Link>
            <Link onClick={(e) => {handleRouting("Contact")}}>
                <Box p={4} flex="1" textAlign="left" borderBottomWidth="1px">
                    Contact Us
                </Box>
            </Link>
        </AccordionItem>
        </Accordion>
        </VStack>
    </DrawerBody>
    </DrawerContent>
    </>
  );
};