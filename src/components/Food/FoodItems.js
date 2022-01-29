import React from 'react';
import { FoodItem } from "./FoodItem";
import { useItems } from './ItemContext';
import { Button, Box, Flex } from "@chakra-ui/react";

export const FoodItems = ({ onDelete, onDeleteAll, onEdit }) => {
  const { items } = useItems();
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