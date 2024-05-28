import React, { forwardRef } from 'react';
import { About } from "./AboutServices"
import { 
    VStack, 
    Box, 
    Text, 
} from '@chakra-ui/react';

export const ServicesSection = forwardRef((props, ref) =>{

    return(
        <>
        
        {/* Header Section */}
        <VStack align="left" width={["100%","container.sm"]}>
                    <Box p={5}  bg="white" borderRadius='10px'>
                        <Text fontSize="lg" fontWeight="bold" color='gray.500'>
                            Precision Engineered Solutions as Unique as Your Business:
                        </Text>
                    </Box>

                    <Box p={5} boxShadow="xl" width="inherit" bg="black" borderRadius='10px'>
                        <Text fontSize="lg" fontWeight="bold" color='gray.200' ml="5em">
                            LevelUp excels in software development and customized digital marketing strategies, enhancing your vision with unparalleled value from inception to completion.
                        </Text>
                    </Box>
            {/* About Our Services and tag cloud */}
            <Box ref={ref} width={{base:"100%", md:"30vw"}}>
                <About/>
            </Box>
        </VStack>
        </>
    )
})
