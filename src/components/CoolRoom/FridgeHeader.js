import React from 'react';
import { Button, Container, Heading, Flex } from '@chakra-ui/react';

const title = 'Daily Fridge Temperature';

export const FridgeHeader = ({ onAdd, showAdd }) => {
  return (
    <Flex>
      <Container>
        <Heading as='h3' size='lg'>{title}</Heading>
        <Button
          m={4}
          size='sm'
          colorScheme={showAdd ? 'red' : 'green'}
          onClick={onAdd}
        >
          {showAdd ? 'close' : 'create'}
        </Button>
      </Container>
    </Flex>
  )
};