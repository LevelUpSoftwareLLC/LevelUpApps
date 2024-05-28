import React, {useState} from 'react';
import {
    Box,
    Text,
    Link,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    UnorderedList,
    ListItem,
  } from '@chakra-ui/react';



export const WorkHere = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const handleLinkClick = (event) => {
        event.preventDefault();
        openModal();
      };
    
      return (
        <>
          <Box>
            <Text fontSize="3xl" fontWeight="bold">
              Careers
            </Text>
            <Text fontSize={{ base: 'md', md: 'lg' }}>
              Join our team of innovative thinkers, project managers and skilled crafts-men and women. Check out our current job openings.
            </Text>
            <Link color="blue.500" display="inline-block" onClick={handleLinkClick}>
              View Openings
            </Link>
    
            <Modal isOpen={isOpen} onClose={closeModal}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Current Job Openings</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                <UnorderedList>
                    <ListItem>
                    <Link href="/jobs/software-engineer" isExternal>
                        Software Engineer
                    </Link>
                    </ListItem>
                    <ListItem>
                    <Link href="/jobs/ui-ux-designer" isExternal>
                        UI/UX Designer
                    </Link>
                    </ListItem>
                    <ListItem>
                    <Link href="/jobs/project-manager" isExternal>
                        Project Manager
                    </Link>
                    </ListItem>
                    <ListItem>
                    <Link href="/jobs/data-analyst" isExternal>
                        Data Analyst
                    </Link>
                    </ListItem>
                </UnorderedList>
                </ModalBody>
            </ModalContent>
            </Modal>
          </Box>
        </>
      );
    };