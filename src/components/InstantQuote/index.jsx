
import React, { useState, useEffect, useReducer, forwardRef } from "react";
import { Stack, Flex, Grid, Select, HStack, Text, Box, Image, Checkbox } from '@chakra-ui/react' 
import { MenuSelector } from "./ServiceSelector/Menu"; 
import { Booking } from "../Booking";

export const InstantQuoteMenu = React.forwardRef(({ setTitle }, ref) => {

    return (
    <Flex 
        align="center" 
        justify="start" 
        minHeight="auto" 
        direction="column" ref={ref} 
        // transform={'translateY(calc(0vh - 65vh))'}
    >
         <Stack width="auto" height="auto" maxWidth="100%" background="none">
         <Text fontFamily="Noto Sans"
                lineHeight="1.43"
                fontWeight="regular"
                fontSize="28px"
                color="#000000"
                width="100%"
                height="1.5em"
                maxWidth="100%"
                textAlign="center">
                Instant Quote and Consultation Scheduler 
            </Text>
            <Text fontFamily="Inter"
                lineHeight="1.43"
                fontWeight="regular"
                fontSize="20px"
                color="#000000"
                width="100%"
                height="2em"
                maxWidth="100%"
                textAlign="center"
                marginBottom={1}>
            Select from the fields below to build your solution, and recieve an instant quote.
            </Text>
            <MenuSelector setTitle={setTitle} />
         </Stack>
         <Box>
            <Booking/>
         </Box>
    </Flex>
    )
})



