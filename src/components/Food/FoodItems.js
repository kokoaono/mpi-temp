import React from 'react';
import { FoodItem } from "./FoodItem";
// import { ItemsContext } from './FoodApp';
import { Button, Box, Flex } from "@chakra-ui/react";
import { useItems } from './ItemContext';

export const FoodItems = ({ onDelete, onDeleteAll, onEdit }) => {
  const { items } = useItems()

  console.log(items);
  return (
    <Flex flexDir='column'>
      <Box>
        <Button
          m={4}
          size={'sm'}
          colorScheme='red'
          onClick={onDeleteAll}
        >
          Clear all
        </Button>
      </Box>

      <Box>
        {items.map(item => (
          <FoodItem
            key={item.id}
            item={item}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </Box>
    </Flex>
  )
};