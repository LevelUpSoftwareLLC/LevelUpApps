import React, {useState} from 'react';
import { Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex, 
  Heading, 
  Text, 
  Link, 
  UnorderedList, 
  ListItem, 
  Icon, 
  Modal, 
  ModalBody, 
  ModalCloseButton, 
  ModalOverlay, 
  ModalHeader, 
  ModalContent,
  VStack,
  HStack, 
  useColorModeValue,
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaGithub, FaDiscord, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import { BsThreads } from "react-icons/bs";
import { useRouteContext } from '../../util/routingContext/routeContext';
import { HamburgerIcon, SearchIcon, ChevronDownIcon } from '@chakra-ui/icons';
import {
  HOME,
  SERVICES,
  PORTFOLIO,
  DESIGNS,
  BLOG, 
  CAREER,
  ADMIN,
  PARTNER,
  TERMS,
  PRIVACY,
  PAYMENT_GATEWAY,  
  LOGIN,
} from '../../util/actions/actions';

export const Footer = () => {

  const TextColor = useColorModeValue('button.text.light', 'button.text.dark');


  const [isOpen, setIsOpen] = useState(false);
      // Function to smoothly scroll to the top
  const scrollToTop = (e) => {
    e.preventDefault(); // Prevent the default anchor tag behavior
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: 'smooth', // Enable smooth scrolling
    });
  };

  const onOpen = () =>{
    setIsOpen(true);
  }

  const onClose = () =>{
    setIsOpen(false);
  }

   // Accessing the context's dispatch function to update global state its essential to use dispatch from the context or it will only update locally
    const { dispatch } = useRouteContext();

    // Function to handle routing based on the navbar item clicked
    const handleRouting = (clickedText) => {
      // Dispatch actions for each possible navigation item - setting the state in the global context
      // Each dispatch checks if the clicked item matches a specific route, and updates the global state accordingly


      dispatch({ type: HOME, payload: clickedText === 'Home' ? 1 : 0 });
      dispatch({ type: SERVICES, payload: clickedText === 'Services' ? 1 : 0 });
      dispatch({ type: PORTFOLIO, payload: clickedText === 'Portfolio' ? 1 : 0 });
      dispatch({ type: DESIGNS, payload: clickedText === 'Designs' ? 1 : 0 });
      dispatch({ type: BLOG, payload: clickedText === 'Blog' ? 1 : 0 });
      dispatch({ type: LOGIN, payload: clickedText === 'Login' ? 1 : 0 });
      dispatch({ type: CAREER, payload: clickedText === 'Career' ? 1 : 0 });
      dispatch({ type: ADMIN, payload: clickedText === 'Admin' ? 1 : 0 });
      dispatch({ type: PARTNER, payload: clickedText === 'Partner' ? 1 : 0 });
      dispatch({ type: TERMS, payload: clickedText === 'Terms' ? 1 : 0 });
      dispatch({ type: PRIVACY, payload: clickedText === 'Privacy' ? 1 : 0 });
      dispatch({ type: PAYMENT_GATEWAY, payload: clickedText === 'Payment_Gateway' ? 1 : 0 });

  };

  return (
    <>
    <Box as="footer" bg="black" py={16} textAlign="center" color={TextColor}>
      <Flex flexWrap="wrap" justifyContent="center">
        {/* Map */}
        <Box width={['100%', '50%', '25%']} mb={8}>
          <Heading as="h4" size="md" mb={2}>
            Level Up Apps & Software LLC
          </Heading>
            <Text>
              <Link
                href="https://www.google.com/maps/@39.8317804,-105.004315,18.15z?entry=ttu"
                target="_blank"
                isExternal
              >
                1411 W 33rd Ave
              </Link>
            </Text>
            <Box display="flex" justifyContent="center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6132.330914483945!2d-105.01660822361546!3d39.78084209409564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7866bb40149b%3A0x433eb9a0251eb7e4!2s4630%20Wyandot%20St%2C%20Denver%2C%20CO%2080211!5e0!3m2!1sen!2sus!4v1714408285448!5m2!1sen!2sus"
                width="200"
                height="150"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
          </Box>
        </Box>
        {/* Contact */}
        <Box width={['100%', '50%', '25%']} mb={8}>
          <Heading as="h4" size="md" mb={2}>
            Contact Us
          </Heading>
          <Text>
            <Link onClick={() => onOpen('email')}>info@levelupco.com</Link>
          </Text>
          <Text>
            <Link onClick={() => onOpen('phone')}>Contact</Link>
          </Text>
        </Box>
        {/* Home */}
        <Box width={['100%', '50%', '25%']} mb={8}>
          <UnorderedList styleType="none">
            <ListItem>
              <Link onClick={() => window.scrollTo(0, 0)}>HOME</Link>
            </ListItem>

            <ListItem><Link onClick={() => handleRouting("Portfolio")}>Portfolio</Link></ListItem>
            <ListItem><Link onClick={() => handleRouting("Services")}>About Us</Link></ListItem>

            <Menu matchWidth>

              <MenuButton as={Button} variant={TextColor} pl={6}>
                Services
                <ChevronDownIcon />
              </MenuButton>

              <MenuList bg={"transparent"}>
                <MenuItem onClick={() => handleRouting("Services")} color={"gray.700"} borderRadius={10} mb={1}>Mobile App Development</MenuItem>
                <MenuItem onClick={() => handleRouting("Services")} color={"gray.700"} borderRadius={10} mb={1}>Custom Software Solutions</MenuItem>
                <MenuItem onClick={() => handleRouting("Services")} color={"gray.700"} borderRadius={10} mb={1}>UI/UX Design Services</MenuItem>
                <MenuItem onClick={() => handleRouting("Services")} color={"gray.700"} borderRadius={10} mb={1}>Web Development</MenuItem>
                <MenuItem onClick={() => handleRouting("Services")} color={"gray.700"} borderRadius={10} mb={1}>CyberSecurity</MenuItem>
                <MenuItem onClick={() => handleRouting("Services")} color={"gray.700"} borderRadius={10} mb={1}>A.i</MenuItem>
                <MenuItem onClick={() => handleRouting("Services")} color={"gray.700"} borderRadius={10} mb={1}>Databases</MenuItem>
                <MenuItem onClick={() => handleRouting("Services")} color={"gray.700"} borderRadius={10}>B.i</MenuItem>
              </MenuList>
            </Menu>
          </UnorderedList>
        </Box>
        {/* Blog */}
        <Box 
          width={['100%', '50%', '25%']} 
          mb={8}
        >
          <UnorderedList styleType="none">
            <ListItem>
              <Link onClick={() => handleRouting("Blog")}>Blog</Link>
              </ListItem>
            <ListItem>
              <Link onClick={() => handleRouting("Career")}>Careers</Link>
              </ListItem>
            <ListItem>
              <Link onClick={() => handleRouting("Designs")}>Designs</Link>
              </ListItem>
            <Menu matchWidth >
                <MenuButton as={Button} variant={TextColor} pl={6}>
                  Admin Portal
                  <ChevronDownIcon />
                </MenuButton>
                <MenuList bg={"transparent"} >
                  <MenuItem onClick={() => handleRouting("Admin")} color={"gray.700"} borderRadius={10} mb={1}>Admin</MenuItem>
                  <MenuItem onClick={() => handleRouting("Partner")} color={"gray.700"} borderRadius={10}>Partner</MenuItem>
                </MenuList>
            </Menu>
          </UnorderedList>

        </Box>
      </Flex>

      <Link href="#home" bg="gray.300" color="black" py={2} px={4} borderRadius="md" mb={8} display="inline-flex" alignItems="center" onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
      }}>
        {/* Bottom links & Socials */}
      <Icon as={FaArrowUp} mr={2} />
        To the top
      </Link>

      <Flex justifyContent="center" mt={4}>
        <Link href="https://www.facebook.com" isExternal mx={2}><Icon as={FaFacebook} w={6} h={6} /></Link>
        <Link href="https://www.instagram.com" isExternal mx={2}><Icon as={FaInstagram} w={6} h={6} /></Link>
        <Link href="https://www.threads.com" isExternal mx={2}><Icon as={BsThreads} w={6} h={6} /></Link>
        <Link href="https://www.discord.com" isExternal mx={2}><Icon as={FaDiscord} w={6} h={6} /></Link>
        <Link href="https://www.github.com" isExternal mx={2}><Icon as={FaGithub} w={6} h={6} /></Link>
        <Link href="https://www.linkedin.com" isExternal mx={2}><Icon as={FaLinkedin} w={6} h={6} /></Link>
      </Flex>

      <Text mt={4} textDecoration={'underline'}>© 2024 LevelUp Apps & Software LLC</Text>

      <VStack flexDirection={'column'}>
        
        <HStack flexDirection={'row'} justifyContent={'center'}>
            <Link onClick={() => handleRouting("Terms")}>Terms of Service</Link>
              <Box width={'1rem'}/>
            <Link onClick={() => handleRouting("Privacy")}>Privacy Policy</Link>
        </HStack>
      
          <Menu matchWidth>
            <MenuButton as={Button} variant={TextColor} pl={6}>
              Client Portal
              <ChevronDownIcon />
            </MenuButton>
            <MenuList bg={"transparent"}>
              <MenuItem onClick={() => handleRouting("LOGIN")} color={"gray.700"} borderRadius={10} mb={1} >SignIn</MenuItem>
              <MenuItem onClick={() => handleRouting("Payment_Gateway")} color={"gray.700"} borderRadius={10} >Payment Portal</MenuItem>
            </MenuList>
          </Menu>
        
      </VStack>
    </Box>
         <Modal isOpen={isOpen} onClose={onClose} isCentered>
         <ModalOverlay />
         <ModalContent>
           <ModalHeader><Text>LevelUp Apps & Software LLC</Text></ModalHeader>
           <ModalCloseButton />
           <ModalBody>
       
               <Text>info@levelupco.com.com</Text>

           </ModalBody>
         </ModalContent>
       </Modal>
       </>
  );
};

