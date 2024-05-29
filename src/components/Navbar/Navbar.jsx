import React, {useState, useReducer, useEffect} from 'react';
import {
    Box,
    Flex,
    Spacer,
    Image,
    IconButton,
    Button,
    Drawer,
    useBreakpointValue,
    useColorModeValue,
    chakra,
} from '@chakra-ui/react';

import { Sidebar } from './MobileNav/Sidebar';
import { HamburgerIcon, SearchIcon, ChevronDownIcon } from '@chakra-ui/icons';
import logo from '/assets/images/logo.png';
import brand from '/assets/images/brandName.png';
import { LavaButton } from '../../util/buttons/lavaButton/lavaB';
import { CustomGooeyButton } from '../../util/buttons/GooeyButton/gButton';

// The Navbar functional component definition
const ComponentNavbar = ({handleRouting, ...rest}) => {
  // const boxSize = useBreakpointValue({ base: '100vw' ,sm:'100%' });
  const buttonTextColor = useColorModeValue('button.text.light', 'button.text.dark');
  // State hook to manage open/close status of a sidebar/drawer
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the sidebar/drawer's open/close status
    const toggleDrawer = () => setIsOpen(!isOpen);

    // Function to close the sidebar/drawer
    const onClose = () => setIsOpen(false);

  return (
    <>
    <Box bg="gray.900" py={2} zIndex={3} {...rest} flexDir={{base: 'column', sm: 'row'}}>

    <Flex 
    // alignItems="center" 
    >
      
      {/* Box for images */}
      <Box 
        position={'absolute'}
        ml={{base:'1rem', sm:'auto'}}
        display="flex" 
        alignItems="center" 
        justifyContent={{ base: 'flex-start', sm: 'space-around' }} 
        width='1rem' height="3rem"
        zIndex={100}
      >  
        <a href="index.html">
          <Image 
            src={logo} 
            transform='scaleX(1.75) scaleY(1.75)'  
            alt="Logo" width="auto" ml={10} 
            borderRadius='50%' 
           
          />
        </a>
        <Image
          src={brand}
          // ml={{base:'0%', sm:'auto'}} 
          // display={{ base: 'flex', sm:'none', md: 'flex' }} 
          alt="Brand" 
          maxW={".8rem"}
          transform='scaleX(25) scaleY(24) translateY(9%)'  

          bg={'white'}
          ml={40}
          h={.5}
          mb={3} 
          pl={.5}
          pr={.2}
          
          borderRadius={.2}
          zIndex={-1}
        />
      </Box>
        {/* Box for buttons */}
        <Box display={{base: 'none', sm: 'flex' }} flexGrow={1} mr={'2%'} alignItems="center" justifyContent={'flex-end'}>
 
          <Button color={buttonTextColor} variant="ghost" width={'auto'} onClick={() => handleRouting("Services")}>
            Services
          </Button>
          <Button variant="ghost" color={buttonTextColor} width={'auto'} onClick={() => handleRouting("Portfolio")}>
            Portfolio
          </Button>
          <Button  variant="ghost" color={buttonTextColor} width={'auto'} onClick={() => handleRouting("Designs")}>
            Designs
          </Button>
          <Button variant="ghost" color={buttonTextColor} width={'auto'} onClick={() => handleRouting("Login")}>
            Login
          </Button>
          <CustomGooeyButton display={{ base: 'none', lg: 'block' }} button1Text={'Contact'} onClick={() => handleRouting("Contact")} />
        </Box>
        <IconButton
          display={{ base: 'flex', sm: 'none' }}
          flexDir={{base: 'column', sm: 'row'}}
          size={'lg'}
          icon={<HamburgerIcon />}
          color={'white'}
          variant="ghost"
          aria-label="Toggle Navigation"
          // justifyContent={'space-between'}
          onClick={toggleDrawer}  /*Button to toggle the navigation drawer on smaller screens.*/
          ml={{base:"88%"}} // moves it all the way left
          // mr={{ base: '4%', sm: '5%' }}
        />
      </Flex>

      <Drawer isOpen={isOpen} placement="top" onClose={onClose} >
        {isOpen && <Sidebar handleRouting={handleRouting}/>} {/*Render the sidebar component when the drawer is open.*/}
        </Drawer>
    </Box>
    </>
  );
};

export const Navbar = chakra(ComponentNavbar)