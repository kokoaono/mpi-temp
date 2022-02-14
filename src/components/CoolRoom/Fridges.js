import React from 'react';
import { Fridge } from './Fridge';
import { useDeleteAllFridges, useFridges } from './FridgeContext';
import { Button, Box, Flex } from '@chakra-ui/react';

export const Fridges = () => {
  const { fridges } = useFridges();
  const deleteAll = useDeleteAllFridges();

  return (
    <Flex flexDir={'column'}>
      <Box>
        <Button
          m={4}
          size='sm'
          colorScheme='red'
          onClick={deleteAll}
        >
          Clear all
        </Button>
      </Box>
      {fridges.map(fridge => (
        <Fridge
          key={fridge.id}
          fridge={fridge}
        />
      ))}
    </Flex>
  )
};
