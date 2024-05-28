import React, { forwardRef } from 'react';
import { Flex, HStack, useColorModeValue, useTheme, Box } from '@chakra-ui/react';
import { WhyChooseUsContainer } from './WhyUsContainer';
import { ExpandCard } from './WhyUsAccordian/CardSections'
              
              
              
export const Why = forwardRef((props, ref) => {
    const theme = useTheme();
    const textColor = useColorModeValue(theme.colors.button.text.light, theme.colors.button.text.dark);

    return(
    <>
           {/* Why Choose Us Section */}
           <HStack 
              ref={ref}
              display='flex' 
              flexDirection={'row'} 
              flexWrap={{base:'wrap',sm:'nowrap'}}
              // justifyContent={'space-between'} 
              color={textColor} 
             
              // transform due to tag cloud abstract complexities
              // transform={'translateY(calc(0vh - 65vh))'}
              alignItems="flex-start"
              >
              <Box width={['100%','45%']} >
                <WhyChooseUsContainer/>
              </Box>

              <Box>
                <ExpandCard/>
              </Box>

            </HStack>
    </>

    )

})
   