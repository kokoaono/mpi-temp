import React from 'react';
import { FoodItem } from "./FoodItem";
import { useDeleteAll, useItems } from './ItemContext';
import { Button, Box, Flex } from "@chakra-ui/react";

export const FoodItems = () => {
  const { items } = useItems();
  const deleteAllItems = useDeleteAll();
  return (
    <Flex flexDir='column'>
      <Box>
        <Button
          m={4}
          size={'sm'}
          colorScheme={'red'}
          onClick={deleteAllItems}
        >
          Clear all
        </Button>
      </Box>

      <Box>
        {items.map(item => (
          <FoodItem
            key={item.id}
            item={item}
          />
        ))}
      </Box>
    </Flex>
  )
};