import React, {useState} from 'react';
import { Text} from '@chakra-ui/react';

export const PartnerComponent = () => {

return (
          <>
            <Text fontSize={{ base: 'md', md: 'lg' }}>
              <Text as="span" fontSize="2xl" fontWeight="bold"> Our </Text> internal & external access to 
              <Text as="span" fontWeight="bold"> cross-functional talent</Text>, 
              sets us apart enabling us to offer a spectrum of services with deep specialization. 
              By leveraging advanced tools and resources from industry leaders like 
              <Text as="span" fontWeight="bold"> Google</Text>, 
              <Text as="span" fontWeight="bold"> Apple</Text>, and 
              <Text as="span" fontWeight="bold"> Amazon</Text>, we are empowered to deliver 
              <Text as="span" fontWeight="bold"> robust</Text>,
              <Text as="span" fontWeight="bold"> secure</Text> 
              <Text as="span" fontWeight="bold"> high-availability</Text> software solutions, with your own custom 
              <Text as="span" fontWeight="bold"> SLA </Text> (Service Level Agreement) if needed. 
              This capability underlines our commitment to crafting solutions 
              that increase value, reduce risk, and 
              <Text as="span" fontWeight="bold"> partner </Text> with you.
            </Text>
        </>

  );
};