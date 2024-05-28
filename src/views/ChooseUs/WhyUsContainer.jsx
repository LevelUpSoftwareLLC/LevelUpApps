import { Box, Text, VStack} from '@chakra-ui/react';
import { LavaButtonText } from '../../util/buttons/lavaButton/lavaText'

export const WhyChooseUsContainer = () => {

  const handleLearnMoreClick = () => {
    
  };
    return(
        <>
        {/* creates the verticle gray line */}
        <Box bg="gray.300">
          <VStack
            bg={"gray.900"} 
            ml={"5px"}
            spacing={4} 
            pl={4} 
            alignItems="flex-start"
          >
            <Text width={['calc(100vw - 60vw)','calc(100vw - 75vw)']} fontSize="2xl" fontWeight="semibold" >
              Why Choose Us
            </Text>
            <Text width={['calc(100vw - 60vw)','calc(100vw - 75vw)']}>
              LevelUp is synonymous with precision, and craftsmanship. Our teams are
              comprised of experts who bring knowledge and efficient solutions to every
              project, ensuring exceptional outcomes.
            </Text>

            <Box 
              display="flex" 
              justifyContent="flex-start"
            >
            <LavaButtonText
              text={'Get Started'}
              textColor="white"
              background={"black"}
              bubbleStartColor={'black'}
              bubbleEndColor={"gray.400"}
              handleClick={handleLearnMoreClick}
            />
          </Box>
          </VStack>
        </Box>
      </>
    )
}


