import React, {useState} from 'react';
import { VStack,   Button, 
  Modal, 
  ModalOverlay, 
  ModalContent,
  FormControl,
  FormLabel,
  Input,
  Text,
  ModalHeader,
  ModalBody, 
  ModalFooter  } from '@chakra-ui/react';
import { FaGoogle, FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';

export const Oauth2 = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // This assumes you're redirecting to another page where the email is handled.
    const targetUrl = `https://yourgithubpage.com/nextpage?email=${encodeURIComponent(email)}`;
    
    // Redirect to the target URL
    window.location.href = targetUrl;
  };

  return (
    <Modal isOpen={!isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent mx={4}>
        <ModalHeader>Join the Pre-Release Waitlist</ModalHeader>
        <ModalBody>
          {isSubmitted ? (
            <Text>Thank you for joining the waitlist! We'll keep you updated.</Text>
          ) : (
            <form onSubmit={handleSubmit}>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <Button type="submit" colorScheme="blue" mt={4} width="full">
                Join Waitlist
              </Button>
            </form>
          )}
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose} variant="ghost">
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

  // <ModalOverlay />
  // <ModalContent mx={4}>
  //   <ModalHeader>Choose Authentication Provider</ModalHeader>
  //   <ModalBody>
  //     <VStack spacing={4}>
  //       <Button leftIcon={<FaGoogle />} colorScheme="red" onClick={() => handleOAuth2('Google')} width="full">
  //         Sign in with Google
  //       </Button>
  //       <Button leftIcon={<FaFacebook />} colorScheme="facebook" onClick={() => handleOAuth2('Facebook')} width="full">
  //         Sign in with Facebook
  //       </Button>
  //       <Button leftIcon={<FaGithub />} colorScheme="gray" onClick={() => handleOAuth2('GitHub')} width="full">
  //         Sign in with GitHub
  //       </Button>
  //       <Button leftIcon={<FaTwitter />} colorScheme="twitter" onClick={() => handleOAuth2('X')} width="full">
  //         Sign in with X (formerly Twitter)
  //       </Button>
  //     </VStack>
  //   </ModalBody>
  //   <ModalFooter>
  //     <Button onClick={onClose} variant="ghost">Cancel</Button>
  //   </ModalFooter>
  // </ModalContent>

  // Create a new RTCPeerConnection
// const peerConnection = new RTCPeerConnection();

// // Listen for ICE candidates to send to the other peer
// peerConnection.onicecandidate = event => {
//     if (event.candidate) {
//         console.log("New ICE candidate: ", event.candidate);
//         // Here you would typically send the candidate to the remote peer via your signaling channel
//     }
// };

// // Handling data channels
// const dataChannel = peerConnection.createDataChannel("myChannel");

// dataChannel.onopen = () => {
//     console.log("Data channel is open and ready to be used.");
// };

// dataChannel.onmessage = event => {
//     console.log("New message from data channel:", event.data);
// };

// // Setup handlers to receive data channel from the remote peer
// peerConnection.ondatachannel = event => {
//     const receiveChannel = event.channel;
//     receiveChannel.onmessage = event => {
//         console.log("Received message:", event.data);
//     };
// };