import { Button, Container } from '@chakra-ui/react';
import React from 'react';


export const Header = ({ onAdd, showAdd }) => {
  return (
    <Container alignContent='center'>
      <Button
        dir='row'
        size='sm'
        colorScheme={showAdd ? 'red' : 'green'}
        onClick={onAdd}
      >
        {showAdd ? 'close' : 'create'}
      </Button>
    </Container>
  )
}
