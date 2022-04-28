import React, { useState, useEffect } from 'react';
import { FoodItem } from "./FoodItem";
// import { useDeleteAll, useItems } from './ItemContext';
import api from '../../api/items'
import { Button, Box, Flex } from "@chakra-ui/react";

export const FoodItems = () => {
  const [items, setItems] = useState([]);
  // const { items } = useItems();
  // const deleteAllItems = useDeleteAll();

  const getItems = async () => {
    const response = await api.get('/');
    return response.data
  };

  useEffect(() => {
    const getAllItems = async () => {
      const itemData = await getItems();
      console.log('itemdata is', itemData);
      if (itemData) setItems(itemData);
    };
    getAllItems()
  }, [])
  return (
    <Flex flexDir='column'>
      <Box>
        <Button
          m={4}
          size={'sm'}
          colorScheme={'red'}
        // onClick={deleteAllItems}
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