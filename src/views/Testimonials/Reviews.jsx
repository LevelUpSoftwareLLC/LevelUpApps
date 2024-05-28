import React, { forwardRef } from 'react';
import { 
  Box, 
  Container, 
  Heading, 
  SimpleGrid, 
  Card, 
  CardBody, 
  Image, 
  Text, 
  Icon, 
  useColorModeValue 
} from '@chakra-ui/react';
import { css  } from '@emotion/react';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Angela H.',
    stars: 5,
    source: '',
    text: "Morgan and his team did an excellent job on our project! They were timely, professional and friendly. They went way above and beyond to ensure we were happy and did a great job of letting us know the plan for the day and of cleaning up. The work turned out great. Tim couldn't be nicer! We were very happy!",
  },
  {
    name: 'Tiffany C.',
    stars: 5,
    source: '',
    text: 'They did a quick development job for my small business and everything turned out great! We had a several features we needed to implement. Communication was seamless and everything went smoothly.',
  },
  {
    name: 'Jenna N.',
    stars: 5,
    source: '',
    text: 'This company was so easy to work with and has great prices. I was needing some ongoing service from a previous project I had paid to have developed. Definitely will use this company again.',
  },
  {
    name: 'JT V.',
    stars: 5,
    source: '',
    text: 'Excellent job, appreciate how efficent and easy they were to work with, very different than any experience I had before.',
  },
];
export const CustomerReviews = forwardRef((props, ref) => {

  const TextColor = useColorModeValue('button.text.light', 'button.text.dark');
  
  const renderStars = (stars) => {
    return Array(stars)
      .fill()
      .map((_, index) => (
        <Icon as={FaStar} key={index} color="yellow.500" />
      ));
  };

  const scrollAnimation = css`
    @keyframes scrollVertical {
      0% { transform: translateY(-100%); }
      100% { transform: translateY(0%); }
    }

    animation: scrollVertical ${testimonials.length*5}s linear infinite;
      
    &:hover {
        animation-play-state: paused;
      }
`;

  return (
    <>
    <Box ref={ref} py={0} id="team" color={TextColor}>
      <Heading as="h3" textAlign="center" mb={2}>
        TESTIMONIES
      </Heading>
      <Container maxW="container.lg" maxH="15rem" overflow="hidden" py={0}>
        <Box
          display="flex"
          width="auto"
          css={scrollAnimation}
        >
          <SimpleGrid columns={[1]} spacing={8}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index}>
                <CardBody>
                  <Box display="flex" justifyContent="center" mb={4}>
                    {renderStars(testimonial.stars)}
                  </Box>
                  <Heading as="h3" size="md" mt={4}>
                    {testimonial.name}
                  </Heading>
                  <Text fontSize="sm" color="gray.500" mt={1}>
                    {testimonial.source}
                  </Text>
                  <Text mt={4}>{testimonial.text}</Text>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
    </>
  );
});
