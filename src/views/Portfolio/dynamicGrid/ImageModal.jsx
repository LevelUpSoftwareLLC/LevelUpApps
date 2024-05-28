import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    UnorderedList,
    ListItem,
    Grid,
    Box,
  } from '@chakra-ui/react';

export const ModalForImages = ({ imagePath, onClose }) => {

    // const imageDescriptions = {
    //     'image1.jpg': {
    //       title: 'Image 1',
    //       description: 'Description for Image 1',
    //       bullets: ['Bullet 1', 'Bullet 2', 'Bullet 3'],
    //     },
    //     'image2.jpg': {
    //       title: 'Image 2',
    //       description: 'Description for Image 2',
    //       bullets: ['Bullet 1', 'Bullet 2', 'Bullet 3'],
    //     },
    //     // Add more image descriptions as needed
    //   };

    // const { title, description, bullets } = imageDescriptions[imagePath] || {};
  
    return (
        <Modal isOpen={imagePath !== null} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Image</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Grid templateColumns="1fr 1fr" gap={4}>
                <Image src={imagePath} alt="Selected Image" objectFit="cover" />
                <Box>
                  <UnorderedList>
                    {/* Add your custom logic to populate the bulleted list */}
                    {/* Example: */}
                    {/* {bullets.map((bullet, index) => (
                      <ListItem key={index}>{bullet}</ListItem>
                    ))} */}
                  </UnorderedList>
                </Box>
              </Grid>
            </ModalBody>
          </ModalContent>
        </Modal>
      );
    };