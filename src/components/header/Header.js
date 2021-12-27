import React from 'react';
import { VStack, Heading, Text } from '@chakra-ui/react';

const Header = () => (
  <VStack p={5}>
    <Heading as='h2' size='xl'>
      <Text color='#38B2AC'>
        Daily Temperature Record
      </Text>
    </Heading>
  </VStack >
);

export default Header;