import React, {useState} from 'react';
import { PhoneModel } from './3DImage/3DPhone.jsx';
import { Box, Flex } from '@chakra-ui/react';
import { useRouteContext } from '../../util/routingContext/routeContext.jsx';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Slide1, Slide2, Slide3 } from './CarouselSlides/carouselSlides.jsx';

export const ImageCarousel = ( { handleRouting } ) => {
  
  const [activeIndex, setActiveIndex] = useState(0);
  // Accessing the context's dispatch function to update global state its essential to use dispatch from the context or it will only update locally

  const slides = [
    {
      component: (props) => 
      <Slide1 
        activeIndex={props.activeIndex} 
        handleRouting={props.handleRouting} 
        Headline={'Got a Brilliant App or Software Idea? 💡'} 
        text1={'Receive an instant, AI-powered estimate tailored just for you. Set your rate and let our AI demystify any complexities.'} 
        text2={'Choose to build with us at your preferred rate, or take the estimate to your trusted developers.'} 
        text3={'Get Your Instant Quote'} 
      />,
    },
    {
      component: (props) => 
      <Slide2 
        activeIndex={props.activeIndex} 
        // handleRouting={handleRouting} 
        Headline={'Looking for Maintenance on an Existing Platform? Let Our AI-Powered Estimator Help Out! 🤖'}
      />,
    },
    {
      component: (props) => 
      <Slide3 activeIndex={props.activeIndex} 
        // handleRouting={handleRouting} 
        Headline={'From Solo Entrepreneurs to Large Corporations—Your Business Matters. 🏢'} 
        text1={'Tailored Solutions for Every Business Type.'} 
        text2={'We can work with you'} 
        text3={'Our Adaptive Software Management Platform Customizes Services to Meet Your Unique Business Needs, No Matter the Size.'} 
      />,
    },
  ];

  const handleSlideChange = (swiper) => {
    // console.log('Active slide index:', swiper.activeIndex);
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <Flex justifyContent="center" alignItems="center">
      <Box 
        width={{base:'60%',sm:"40%"}} 
        ml={{base:'0%', sm:'13%'}} 
        // Add this line for hover effect
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500, // Delay in ms before transitioning to the next slide
            disableOnInteraction: false, // Continue autoplay after user interaction
          }}
          onSlideChange={handleSlideChange}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>{slide.component({ activeIndex, handleRouting })}</SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Box width="40%">
        <PhoneModel />
      </Box>
    </Flex>
  );
};