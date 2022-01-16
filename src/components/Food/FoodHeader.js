import React from 'react';
import { Button, Container, Flex, Heading } from '@chakra-ui/react';

const foodTitle = 'Poultry and Meat Temperature'

export const FoodHeader = ({ onAdd, showAdd }) => {
  return (
    <Flex>
      <Container>
        <Heading as='h3' size='lg' >{foodTitle}</Heading>
        <Button
          m={4}
          size='sm'
          colorScheme={showAdd ? 'red' : 'green'}
          onClick={onAdd}
        >
          {showAdd ? 'close' : 'create'}
        </Button>
      </Container>
    </Flex >
  )
};
