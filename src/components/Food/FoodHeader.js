import React from 'react';
import { Button, Box, Flex, Heading } from '@chakra-ui/react';

export const FoodHeader = ({ foodTitle, onAdd, showAdd }) => {
  return (
    <Flex
      align={'center'}
      justify={'center'}
    >
      <Box>
        <Heading as='h3' size='lg' p={2} >{foodTitle}</Heading>
        <Button
          m={4}
          size='sm'
          colorScheme={showAdd ? 'red' : 'green'}
          onClick={onAdd}
        >
          {showAdd ? 'close' : 'create'}
        </Button>
      </Box>
    </Flex >
  )
};

FoodHeader.defaultProps = {
  foodTitle: 'Poultry and Meat Temperature'
};
