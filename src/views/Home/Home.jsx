import React, { useEffect, useRef, useState } from 'react';
import { Flex, Box, Container } from '@chakra-ui/react';
import { NavBar_WithContext } from '../../components/Navbar';
import { ImageCarousel } from '../../components/Carousel/Carousel';
import { ServicesSection } from '../Services';
import { Why } from '../ChooseUs';
import { PorfolioSection } from '../Portfolio';
import { InstantQuoteMenu } from '../../components/InstantQuote';
import { ContactComponent } from '../../components/Contact';
import { Booking } from '../../components/Booking'; 
import { BlogComponent } from '../../components/Blog/BlogComponent';
import { SomeDesigns } from '../Designs/ConceptDesigns';
import { CustomerReviews } from '../Testimonials/Reviews'; 
import { PromotionalComponent } from '../../components/Leverage_Estimator';
import { Footer } from '../../components/Footer/Footer';
import { Careers_Partners } from '../Career_Partner';


export const Home = ( { currRoute } ) => {

  const[route, setRoute] = useState(currRoute)

  const servicesRef = useRef(null);
  const promotionalRef = useRef(null);
  const whyRef = useRef(null);
  const portfolioRef = useRef(null);
  const designsRef = useRef(null);
  const careersRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);
  const reviewsRef = useRef(null);

  
  
  // Function to handle routing based on the item clicked inside the carousel slide
  const handleRouting = (clickedText) => {
    let currentRoute;
    // Dispatch actions for each possible navigation item - setting the state in the global context
    // Each dispatch checks if the clicked item matches a specific route, and updates the global state accordingly
    currentRoute = clickedText === 'Estimates' ? "Estimates" : currentRoute;

    if(currentRoute === 'Estimates'){
      promotionalRef.current && promotionalRef.current.scrollIntoView({ behavior: 'smooth' });
      return
    }
    setRoute(currRoute)
    
    switch (route) {
      case '/Services':
          servicesRef.current && servicesRef.current.scrollIntoView({ behavior: 'smooth' });
          
        break;
      case '/Designs':
          designsRef.current && designsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case '/Contact':
          contactRef.current && contactRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case '/Portfolio':
          portfolioRef.current && portfolioRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case '/Blog':
          blogRef.current && blogRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case '/Career':
          careersRef.current && careersRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };
  

  useEffect(() => {
    setRoute(currRoute); // This triggers a re-render
  }, [currRoute]);
  
  useEffect(() => {
    
    if(route) {
      handleRouting(route); // Ensure this uses the updated state or pass currRoute directly
    }
  
  }, [route]); 



    return (
    /* Components requiring dynamic behavior are here */
    <Flex flexDirection='column' align={'center'}>
      <NavBar_WithContext />
      <Box height={'3vh'}/>
      <ImageCarousel handleRouting={handleRouting}/>
      <Container maxW={{base:'none', sm: '6xl'}}  marginX='auto'>

      <ServicesSection ref={servicesRef} />

      {/* section spacer 30rem +10rem(to accomodate for the tag cloud*/}
      <Box height={'40rem'}/>

      <PromotionalComponent ref={promotionalRef} />

      {/* section spacer */}
      <Box height={'30rem'}/>

      <Why ref={whyRef} />

      {/* section spacer */}
      <Box height={'30rem'}/>

      <PorfolioSection ref={portfolioRef} />
      {/* section spacer */}
      <Box height={'30rem'}/>
      </Container>

      <SomeDesigns ref={designsRef} />
      
      <Container maxW={{base:'none', sm: '6xl'}}  marginX='auto'>
      {/* section spacer */}
      <Box height={'30rem'}/>

      <Careers_Partners ref={careersRef} />
      {/* section spacer */}
      <Box height={'30rem'}/>

      <BlogComponent ref={blogRef} />

      {/* section spacer */}
      <Box height={'30rem'}/>

      <ContactComponent ref={contactRef} />

      {/* section spacer */}
      <Box height={'20rem'}/>
      </Container>

      <CustomerReviews ref={reviewsRef}/>
      
      {/* section spacer */}
      <Box height={'5rem'}/>
      <Box>
        <Footer />
      </Box>
      {/* <InstantQuoteMenu/>  */}
      
    </Flex>
    
    
    )
}