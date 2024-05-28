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
  const boxSize = useBreakpointValue({ base: '100vw' ,sm:'100%' });
  const buttonTextColor = useColorModeValue('button.text.light', 'button.text.dark');
  // State hook to manage open/close status of a sidebar/drawer
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the sidebar/drawer's open/close status
    const toggleDrawer = () => setIsOpen(!isOpen);

    // Function to close the sidebar/drawer
    const onClose = () => setIsOpen(false);

  return (
    <>
    <Box bg="gray.900" py={2} zIndex={3} {...rest}>

    <Flex alignItems="center" >
      {/* Box for images */}
      <Box 
        display="flex" 
        alignItems="center" 
        justifyContent={{ base: 'flex-start', sm: 'space-around' }} 
        width='1rem' height="3rem"
      >  
        <a href="index.html">
          <Image 
            src={logo} 
            transform='scaleX(1.75) scaleY(1.75)'  
            alt="Logo" width="auto" ml={10} 
            borderRadius='50%' 
          />
        </a>
        <LavaButton 
          ml={{base:'40%', sm:'auto'}} 
          display={{ base: 'flex', sm:'none,', md: 'flex' }} 
          image={brand} alt="Brand" width={boxSize} 
          transform={'translateX(calc(-55%))'}
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
          size={'lg'}
          icon={<HamburgerIcon />}
          color={'white'}
          variant="ghost"
          aria-label="Toggle Navigation"
          justifyContent={'space-between'}
          onClick={toggleDrawer}  /*Button to toggle the navigation drawer on smaller screens.*/
          ml={{base:"70%", sm:"calc(100vw - 15vw)"}} // moves it all the way left
          mr={{ base: '4%', sm: '5%' }}
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