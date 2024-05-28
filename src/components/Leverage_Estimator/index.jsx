import React, { forwardRef } from 'react';
import { VStack, HStack, Box, Text, Image, useColorModeValue, useBreakpointValue, useTheme, Container} from '@chakra-ui/react';
import cubes from '../../../public/assets/images/cubes.png'
import { NewestTechPromo } from './LeverageSection/LatestTechPromo';
import { EstimatePromo } from './LeverageSection/EstimatePromo';




export const PromotionalComponent = forwardRef((props, ref) => {
  const theme = useTheme();
  const textColor = useColorModeValue(theme.colors.button.text.light, theme.colors.button.text.dark);

  return (
  <>
  <HStack 
    ref={ref}
    display='flex'  
    flexDirection={{base: 'column', md: 'row'}} 
    justifyContent="space-between" 
    spacing={0} 
    color={textColor} 
    alignItems="flex-start" 
    // transform={'translateY(calc(0vh - 65vh))'}
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
          Estimates
        </Text>
        
        <Box w={'auto'} mb={{ base: 8, md: 0 }} >
          <Image src={cubes} alt="LevelUp Cube Image" objectFit="cover" height={'auto'} overflow={'visible'}/>
        </Box>

      </VStack>
    </Box>

    <Box display="flex">

      <VStack>

        <Container padding={0}>
            <EstimatePromo/>
        </Container>

        {/* spacer */}
          <Box height={{ base: 0, sm: 1 }}></Box>

        <Container padding={0}>
            <NewestTechPromo/>
        </Container>

      </VStack>

    </Box>

  </HStack>
</>

  )})


        