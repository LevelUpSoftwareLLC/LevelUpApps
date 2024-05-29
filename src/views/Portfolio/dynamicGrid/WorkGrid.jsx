import React, { useState, useEffect } from 'react';
import { 
  Image, 
  Heading, 
  Text, 
  Box,
  Grid,
  AspectRatio,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  UnorderedList,
  useDisclosure, } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
// import { ModalForImages } from './ImageModal';
/**
 * Displays the work portfolio. `imagePaths` should be an array of 6 elements,
 * and `newImagePaths` should be an array of 8 elements. The grid size in the
 * UI needs to be adjusted if the sizes of these arrays change.
 *
 * @param {string[]} imagePaths - The initial set of images to display, expected to be an array of 6.
 * @param {string[]} newImagePaths - The new set of images to potentially display, expected to be an array of 8.
 */

export const WorkSection = ({dynamicTitle, service, imagePaths , newImagePaths }) => {
    // `currentSet` holds the currently displayed images, each with a unique `key`.
  const [currentSet, setCurrentSet] = useState(
    imagePaths.map((path, index) => ({ path, key: `image-${index}` }))
  );
  // `animateSet` keeps track of which images are currently being animated out.
  const [animateSet, setAnimateSet] = useState(new Set());

  // `newImages` will store the new images that will replace the ones that are being faded out.
  const [newImages, setNewImages] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedImage, setSelectedImage] = useState(null);
    // This effect runs on component mount. It sets up an interval to cycle images between old and new.
  useEffect(() => {
    // Defined a function to handle the fading out and in of images.
    const cycleAnimateSet = () => {
    // Combine the two sets of images to allow selecting from all available options.
      const allImages = [...newImagePaths, ...imagePaths]
    // Choose which images are going to fade out.
      const fadeOutIndexes = selectRandomIndexes(currentSet.length, 2);
    // Choose new images that will fade in.
      const fadeInImages = selectRandomImages(allImages, 8);

      if (fadeInImages.length > 0) {
        // Prepare to animate selected images out.
        setAnimateSet(fadeOutIndexes);
        // Store new images to be used when fading in.
        setNewImages(fadeInImages);
        // After a delay, replace the faded out images with new ones.
        setTimeout(() => {
          setCurrentSet((prevSet) => {
            const updatedSet = [...prevSet];
            fadeOutIndexes.forEach((index, i) => {
              updatedSet[index] = { path: fadeInImages[i], key: `image-${Date.now()}-${i}` };
            });
            return updatedSet;
          });
          // Clear the set to allow for new animations.
          setAnimateSet(new Set());
        }, 750); // This delay matches the fade-out animation
      }
    };
    // Start the initial animation cycle and set up an interval for continuous cycling.
    cycleAnimateSet();
    // Clear the interval.
    const interval = setInterval(cycleAnimateSet, 1750);
    return () => clearInterval(interval);
  }, []);
    // Select a given number of unique random indexes from the current set.
    function selectRandomIndexes(total, numToSelect) {
        let indexes = new Set();
        while (indexes.size < numToSelect) {
        let r = Math.floor(Math.random() * total);
        indexes.add(r);
        }
        return indexes;
    }
    // Choose a specified number of images from the available paths. This ensures no duplicates.
    function selectRandomImages(imagePaths, numToSelect) {
        // Filter out any invalid image paths first.
        const validImagePaths = imagePaths.filter((path) => path && path.trim() !== '');
        // Return an empty array if no valid images are found.
        if (validImagePaths.length === 0) {
            return [];
        }
        // Shuffle the array and select the required number of images.
        const shuffled = [...validImagePaths].sort(() => 0.5 - Math.random());
        const selectedImages = [];
        let i = 0;
        while (selectedImages.length < numToSelect && i < shuffled.length) {
            const path = shuffled[i];
            if (path && path.trim() !== '') {
            selectedImages.push(path);
        }
        i++;
        }
        return selectedImages;
    }

    const handleImageClick = (path) => {
      setSelectedImage(path);
      onOpen();
    };

    const modifiedOnClose = () => {
      onClose(); // from useDisclosure
      setSelectedImage(null); // Make sure you have access to setSelectedImage, may require lifting the state or passing the function as a prop
    };

    // Render the Box container
  return (
    <Box id="work" >
     {dynamicTitle >= 0 && (
        <motion.div
          key={service} // Add a unique key based on the service
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ duration: 0.5 }}
        >
          <Heading as="h1" mb={4}>
            {service}
          </Heading>
        </motion.div>
      )}
      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        {currentSet.map(({ path, key }, index) => (
          <AnimatePresence key={key} >
            <motion.div
                  key={key}
                  // initial={{ opacity: 0 }}
                  // animate={{ opacity: 1 }}
                  // exit={{ opacity: 0 }}
                  whileHover={{ scale: 2.05, zIndex:'5' }}
                >
            {/* AspectRatio keeps the images in a correct aspect ratio. */}
              <AspectRatio ratio={1}>
                <Image
                  src={path}
                  alt={`Work image ${index}`}
                  objectFit="cover"
                  borderRadius="md"
                  boxSize="100%"
                  onClick={() => handleImageClick(path)}
                  cursor="pointer"
                  border={selectedImage === path ? '4px solid' : 'none'}
                  borderColor={selectedImage === path ? 'blue.500' : 'transparent'}
                />
              </AspectRatio>
            </motion.div>
          </AnimatePresence>
        ))}
      </Grid>
      <ModalForImages imagePath={selectedImage} onClose={modifiedOnClose} />
    </Box>
  );
};

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
        <ModalCloseButton onClick={onClose} />
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