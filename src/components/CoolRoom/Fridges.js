import React from 'react';
import { Fridge } from './Fridge';
import { Button, Box, Flex } from '@chakra-ui/react';

export const Fridges = ({ fridges, onDelete, onDeleteAll, onEdit }) => {
  return (
    <Flex flexDir={'column'}>
      <Box>
        <Box>
          <Button
            m={4}
            size='sm'
            colorScheme='red'
            onClick={onDeleteAll}
          >
            Clear all
          </Button>
        </Box>
        {fridges.map(fridge => (
          <Fridge
            key={fridge.id}
            fridge={fridge}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </Box>
    </Flex>
  )
};
