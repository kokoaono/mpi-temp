import React, { useState, useEffect } from 'react';
import { FoodItems } from './FoodItems';
import { AddItem } from './AddItem';
import { FoodHeader } from './FoodHeader';
// import { useItems } from './ItemContext';
import { Flex, Box } from '@chakra-ui/react';


export const FoodApp = () => {
  const API_URL = 'http://localhost:3500';
  const [items, setItems] = useState([]);
  // const { items } = useItems();
  const [showAddItem, setShowAddItem] = useState(false);

  // SAVING DATA TO LS
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL)
        const listItems = await response.json()
        setItems(listItems)
        console.log(response);
      } catch (err) {
        console.log(err.message)
      }
    }
    (async () => await fetchItems())()
  }, []);

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

          {items.length > 0 ? <FoodItems /> : 'No Items to show'}
        </Box>
      </Flex >
    </Box >
  )
};