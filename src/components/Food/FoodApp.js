import React, { useState, useEffect } from 'react';
// import { useQuery } from 'react-query';
import { FoodItems } from './FoodItems';
import { AddItem } from './AddItem';
import { FoodHeader } from './FoodHeader';
import api from '../../api/api';
import { Flex, Box } from '@chakra-ui/react';

export const FoodApp = () => {
  const [items, setItems] = useState([])
  const [showAddItem, setShowAddItem] = useState(false);

  // const query = useQuery('items', () => { return api.get('/items').then(res => res.data) })

  const getItems = async () => {
    const response = await api.get('/items');
    return response.data.items
  };

  useEffect(() => {
    const getAllItems = async () => {
      try {
        const response = await getItems();
        console.log(response);
        if (response) setItems(response);
      } catch (err) {
        console.log("Error", err.message);
      }
    }
    getAllItems()
  }, [])

  return (
    <Box mx={5}>
      <Flex m={10}>
        <Box
          p={2}
          shadow='md'
          maxW='lg'
          borderWidth='1px'
          borderRadius='lg'
          overflow='hidden'
        >
          <Box alignItems={'center'} p={5}>
            <FoodHeader
              onAdd={() => setShowAddItem(!showAddItem)}
              showAdd={showAddItem}
            />
          </Box>
          {showAddItem && <AddItem />}

          {items.length > 0 ? <FoodItems items={items} /> : 'No items to show'}
        </Box>
      </Flex >
    </Box >
  )
};