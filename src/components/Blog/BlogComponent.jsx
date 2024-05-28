import React, { useEffect, useState, forwardRef } from 'react';
import { 
  Box, 
  Heading, 
  Text, 
  Spinner, 
  Center, 
  Stack, 
  Container, 
  GridItem, 
  Grid, 
  Icon, 
  useColorModeValue  
} from '@chakra-ui/react';
import { FaMedium } from "react-icons/fa6";


  function parseXmlToJson(xml) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml, "application/xml");
    const items = xmlDoc.getElementsByTagName("item");
    const result = {
      items: []
    };
  
    for (let i = 0; i < items.length; i++) {
      const title = items[i].getElementsByTagName("title")[0].textContent;
      const pubDate = items[i].getElementsByTagName("pubDate")[0].textContent;
      const contentEncoded = items[i].getElementsByTagName("content:encoded")[0].innerHTML;
      
      // Extracting <p> tags from content:encoded
      const tempDiv = document.createElement("div"); // Create a temporary DIV to parse HTML content
      tempDiv.innerHTML = contentEncoded; // Insert the content:encoded as HTML into the temp DIV
      const paragraphs = tempDiv.querySelectorAll("p"); // Use querySelectorAll to grab <p> elements
      const pTexts = Array.from(paragraphs, p => p.textContent); // Extract the text from each <p> tag
      const combinedParagraphs = pTexts.join(" ");
      result.items.push({
        title,
        pubDate,
        combinedContent: combinedParagraphs
      });
    }
  
    return result;
  }

export const BlogComponent = forwardRef((props, ref) => {
  const [blogData, setBlogData] = useState([]);
  const TextColor = useColorModeValue('button.text.light', 'button.text.dark');
// fake blog data

// fetch blog data from api

useEffect(() => {
  const fetchBlogData = async () => {
    try {
      const targetUrl = 'https://192.168.30.251/medium-proxy/'; // This should match your proxy setup
      const response = await fetch(targetUrl, {
        method: 'GET', // Method is GET by default; included here for clarity
        headers: {
          'Host': '192.168.30.251', // Set to match the Host header you used in your curl command
          'Accept': 'application/xml', // Assuming the server responds with XML
        },
        // Important: When deploying to production or if CORS issues arise, consider the CORS settings
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
      }
  
      const textData = await response.text();
      const data = parseXmlToJson(textData);
      const dataItems = data.items 
      setBlogData(dataItems);
      
    } catch (error) {
      console.error('Error fetching blog data:', error);
    }
    
  };
  

  fetchBlogData();
}, []);
useEffect(() => {
  // console.log(blogData)
}, [blogData]);



if (!blogData) {
    return (
      <Center h="200px">
        <Spinner size="xl" />
      </Center>
    );
  }

  return (
<Box 
  ref={ref}
  bg="none" 
  py={0} 
  px={4} 
  align={'center'}
  color={TextColor}
>
  <Text fontSize="3xl" fontWeight="semibold">
    <Icon as={FaMedium} mr={2} w={8} h={8} /> RSS Blog
  </Text>
  <Container
    maxW="container.lg"
    borderRadius={'lg'}
    border="1px solid black" 
    position="relative" 
    boxShadow="lg"
    overflow="hidden" // Ensure the Container itself does not show overflow.
    height="75vh" // Set a fixed height for the container to enforce the grid's maxHeight.
  >
    {/* Overlay for aesthetics */}
    <Box
      position="absolute"
      top={0}
      left={0}
      width="full"
      height="full"
      bgImage="url('assets/images/logo.png')"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      opacity={0.3}
      zIndex={0}
    />
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
      gap={6}
      overflowY="auto" // Correctly applied overflow for scrolling
      maxHeight="calc(100% - 1rem)" // Ensure this accounts for any non-content space inside the container.
      position="relative" // Ensures the grid is positioned within its container.
      zIndex={1} // Make sure the grid is above the background overlay.
      p={4} // Padding within the grid for spacing, adjust as necessary.
    >
      {blogData.map((item, index) => (
        <GridItem key={index} bgColor="rgba(255, 255, 255, 0.8)" borderRadius="md" boxShadow="lg" marginBottom="4">
          <Heading as="h2" size="xl" marginBottom="4">
            {item.title} - {new Date(item.pubDate).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
          </Heading>
          <Text color={'black'} whiteSpace="pre-line">{item.combinedContent}</Text>
        </GridItem>
      ))}
    </Grid>
  </Container>
</Box>
  );
});

