import { useRouteContext } from "../../util/routingContext/routeContext"
import { Navbar } from "./Navbar";
import { Box } from "@chakra-ui/react"; 
import {
    HOME, 
    DESIGNS, 
    LOGIN, 
    CONTACT, 
    SERVICES,
    PORTFOLIO, 
    BLOG, 
} from '../../util/actions/actions';

export const NavBar_WithContext = () =>{


 // Accessing the context's dispatch function to update global state its essential to use dispatch from the context or it will only update locally
 const { dispatch } = useRouteContext();
    
     // Function to handle routing based on the navbar item clicked
     const handleRouting = (clickedText) => {
        // Dispatch actions for each possible navigation item - setting the state in the global context
        // Each dispatch checks if the clicked item matches a specific route, and updates the global state accordingly
        dispatch({ type: HOME, payload: clickedText === 'Home' ? 1 : 0 });
        dispatch({ type: DESIGNS, payload: clickedText === 'Designs' ? 1 : 0 });
        dispatch({ type: LOGIN, payload: clickedText === 'Login' ? 1 : 0 });
        dispatch({ type: CONTACT, payload: clickedText === 'Contact' ? 1 : 0 });
        dispatch({ type: SERVICES, payload: clickedText === 'Services' ? 1 : 0 });
        dispatch({ type: PORTFOLIO, payload: clickedText === 'Portfolio' ? 1 : 0 });
        dispatch({ type: CONTACT, payload: clickedText === 'Contact' ? 1 : 0 });

        dispatch({ type: BLOG, payload: clickedText === 'Blog' ? 1 : 0 });
    };


 return(
    <>
        <Navbar handleRouting={handleRouting} position={'fixed'} opacity={.9} zIndex={100}/>
        <Box paddingTop='10vh'>
               {/* moves the content below the nav down  */}
        </Box>
    </>
    )

}