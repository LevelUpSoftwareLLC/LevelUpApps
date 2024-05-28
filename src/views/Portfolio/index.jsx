import React, {useEffect, useState, forwardRef} from 'react';
import { Flex, HStack, useColorModeValue, useTheme, Box, Spinner } from '@chakra-ui/react';
import { PortfolioContainer } from './PortfolioContainer'; 
import { WorkSection } from './dynamicGrid/WorkGrid';   
import { 
  imagePathsWeb, 
  newImagePathsWeb,
  imagePathsMobile,
  newImagePathsMobile,
  imagePathsSaaS,
  newImagePathsSaaS,
  imagePathsAI,
  newImagePathsAI } from '../../util/PortfolioGidElements/PortfolioItems';
       
export const PorfolioSection = forwardRef((props, ref) => {
  const [imagePaths, setImagePaths] = useState(imagePathsWeb);
  const [newImagePaths, setNewImagePaths] = useState(newImagePathsWeb);
    const [index, setIndex] = useState(0)
    const theme = useTheme();
    const textColor = useColorModeValue(theme.colors.button.text.light, theme.colors.button.text.dark);
    const portfolioTags = ['Web Development', 'Mobile App Development', 'SaaS Development', 'A.i & Algorithms']

    useEffect(() => {
      switch (portfolioTags[index]) {
        case 'Web Development':
            setImagePaths(imagePathsWeb);
            setNewImagePaths(newImagePathsWeb);
            break;
        case 'Mobile App Development':
            setImagePaths(imagePathsMobile);
            setNewImagePaths(newImagePathsMobile);
            break;
        case 'SaaS Development':
            setImagePaths(imagePathsSaaS);
            setNewImagePaths(newImagePathsSaaS);
            break;
        case 'A.i & Algorithms':
            setImagePaths(imagePathsAI);
            setNewImagePaths(newImagePathsAI);
            break;
        default:
            console.error('Unknown portfolio tag selected.');
            break;
      }
    }, [index]); // React to changes in index

    return(
    <>
           {/* Why Choose Us Section */}
           <HStack
              ref={ref} 
              display='flex' 
              flexDirection={['column','row']} 
              // justifyContent={'space-between'} 
              color={'white'} 
              // width={["auto"]}
              // transform={'translateY(calc(0vh - 65vh))'}
              alignItems="flex-start"
              >
                {/* width={['30%','45%']} */}
            <Box  width={['30%','45%']}>
              <PortfolioContainer currIndex={index} changeIndex={setIndex} numTags={portfolioTags.length}/>
            </Box>

            <Box>
                <WorkSection dynamicTitle={index} service={portfolioTags[index]} imagePaths={imagePaths} newImagePaths={newImagePaths} />
            </Box>

            </HStack>
    </>

    )

})
   