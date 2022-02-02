import React, { useState, useEffect } from 'react';
import { FoodItems } from './FoodItems';
import { AddItem } from './AddItem';
import { FoodHeader } from './FoodHeader';
import { useItems } from './ItemContext';
import { Flex, Box } from '@chakra-ui/react';


export const FoodApp = () => {
  const { items } = useItems();
  const [showAddItem, setShowAddItem] = useState(false);

  // SAVING DATA TO LS
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items]);

  return (
    <Box>
      <Flex m={10}>
        <Box
          p={2}
          shadow='md'
          maxW='lg'
          borderWidth='1px'
          borderRadius='lg'
          overflow='hidden'
        >
          <FoodHeader
            onAdd={() => setShowAddItem(!showAddItem)}
            showAdd={showAddItem}
          />
          {showAddItem && <AddItem />}
          
          {items.length > 0 ? (<FoodItems />) : ('No Items to show')}
        </Box>
      </Flex >
    </Box >
  )
};