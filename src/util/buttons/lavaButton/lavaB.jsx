// import React from 'react';
// import { Box, Button, keyframes, Image, chakra } from '@chakra-ui/react';

// // Define keyframes for animations
// const move = (distance) => keyframes`
//   0% { transform: translate(0, 0); background-color: white; }
//   26% { background-color: white; }
//   27% { background-color: blue; } 
//   28% { background-color: blue; } 
//   29% { background-color: white; } 
//   50% { background-color: white; }
//   60% { background-color: white; }
//   99% { transform: translate(0, ${distance}); background-color: black; }
//   100% { transform: translate(0, 0); opacity: 0; background-color: black; }
// `;

// const CustomButton = ({ image, alt, ...rest }) => {
//   // Array of distances for the bubble animations
//   const animationDistances = [
//     `${-Math.random() + 1.5 * 80}px`, 
//     `${-Math.random() + 1.5 * 82}px`,  
//     `${-Math.random() + 1.5 * 83}px`, 
//     `${-Math.random() + 1.5 * 90}px`, 
//     `${-Math.random() + 1.5 * 91}px`,  
//     `${-Math.random() + 1.5 * 85}px`,  
//     `${-Math.random() + 1.5 * 81}px`,  
//     `${-Math.random() + 1.5 * 85}px`,  
//     `${-Math.random() + 1.5 * 86}px`,  
//     `${-Math.random() + 1.5 * 90}px`,

//   ];

//   // Create an array of bubbles with animations
//   const bubbles = animationDistances.map((distance, index) => (
//     <Box
//       key={`bubble-${index}`}
//       className="bubble"
//       width="25px"
//       height="25px"
//       borderRadius="50%"
//       backgroundColor="white"
//       position="absolute"
//       zIndex={-1}
//       left={`${(index + 4) * Math.random() * 15}px`} 
//       css={{
//         animation: `${move(distance)} 4s infinite`,
//         animationDelay: `${index * 0.2}s`,
//       }}
//     />
//   ));

//   return (
//     <Box
//       display="flex"
//       alignItems="center"
//       justifyContent="center"
//       height="auto"
//       backgroundColor="none"
//       fontFamily="Roboto"
//       fontSize="1em"
//       m={0}
//       pl={0}
//       w="fit-content"
//     >
//       <Box as="svg"  xmlns="http://www.w3.org/2000/svg" version="1.1"  display={{base: 'none', sm: 'flex'}}>
//         <defs>
//           <filter id="gooey">
//             <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
//             <feColorMatrix
//               in="blur"
//               type="matrix"
//               values="1 0 0 0 0  0 1 0 0 0  1 1 1 0 0  0 0 0 19 -9"
//               result="highContrastGraphic"
//             />
//             <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
//           </filter>
//         </defs>
//       </Box>
//       <Button
//         zIndex={-1} // places it below the brand icon
//         id="gooey-button"
//         p="1.9rem"
//         {...rest}
//         fontSize="1rem"
//         border="white"
//         // color="white"
//         filter="url('#gooey')"
//         position="relative"
//         bg="white"
//         _focus={{ outline: 'none' }}
//         _hover={{
//           bg: "gray.900", // Keeps the background the same on hover
//           color: "#171923", // Optional: Adjust if you have a specific color on hover you want to keep consistent
//           transform: "none", // If there's any transformation on hover, negate it here
//           // Include any other property you want to remain unchanged on hover
//         }}
//       >
//         <a href="index.html">
//           <Image src={image} alt={alt} />
//         </a>
//         <Box position="absolute" top={0} left={0} bottom={0} right={0} className="bubbles">
//           {bubbles}
//         </Box>
//       </Button>
//     </Box>
//   );
// };

// export const LavaButton = chakra(CustomButton);

