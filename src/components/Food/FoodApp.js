import React, { useState, useEffect } from 'react';
import { FoodItems } from './FoodItems';
import { AddItem } from './AddItem';
import { FoodHeader } from './FoodHeader';
import { Flex, Box } from '@chakra-ui/react';
import { getItemData } from '../Lsfunctions';


export const FoodApp = () => {
  const [items, setItems] = useState(getItemData());
  const [showAddItem, setShowAddItem] = useState(false);

  //Add new item
  const addItem = item => {
    const id = Math.floor(Math.random() * 100);
    const date = Date();
    const newItem = { id, date, ...item }
    setItems([...items, newItem])
  };

  //Delete item by its ID
  const deleteItem = id => {
    const filteredItems = items.filter(item => item.id !== id)
    setItems(filteredItems)
  };

  //Delete all
  const deleteAllItems = () => (
    setItems([])
  );

  //Update Item
  const updateFoodItem = (id, updatedItem) => {
    setItems(items.map(item => item.id === id ? updatedItem : item))
  };

  // SAVING DATA TO LS
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items]);

  return (
    <Flex m={10}>
      <Box
        p={2}
        shadow='md'
        // maxW='lg'
        borderWidth='1px'
        borderRadius='lg'
        overflow='hidden'
      // bg='#FEFCBF'
      >
        <FoodHeader
          onAdd={() => setShowAddItem(!showAddItem)}
          showAdd={showAddItem}
        />
        {showAddItem && <AddItem onAdd={addItem} />}
        {items.length > 0 ? (
          <FoodItems
            items={items}
            onEdit={updateFoodItem}
            onDelete={deleteItem}
            onDeleteAll={deleteAllItems} />) : ('No Items to show')
        }
      </Box>
    </Flex>
  )
};
