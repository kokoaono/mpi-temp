import React, { useState, useEffect } from 'react';
import { FoodItems } from './FoodItems';
import { AddItem } from './AddItem';
import { Header } from '../Header';
import { Flex, Box } from '@chakra-ui/react';
import { getItemData } from '../Lsfunctions';


export const FoodApp = () => {
  const [items, setItems] = useState(getItemData());
  const [showAddItem, setShowAddItem] = useState(false);

  //Add new item
  const addItem = item => {
    const id = Math.floor(Math.random() * 100)
    const date = Date()
    const newItem = { id, date, ...item }
    setItems([...items, newItem])
  }
  //Delete item by its ID
  const deleteItem = id => {
    const filteredItems = items.filter(item => item.id !== id)
    setItems(filteredItems)
  };

  //Delete all
  const deleteAllItems = () => (
    setItems([])
  );

  // SAVING DATA TO LS
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items]);

  return (
    <Flex>
      <Box p='2'>
        <Header
          onAdd={() => setShowAddItem(!showAddItem)}
          showAdd={showAddItem}
        />
      </Box>
      {showAddItem && <AddItem onAdd={addItem} />}
      {items.length > 0 ? (
        <FoodItems
          items={items}
          onDelete={deleteItem}
          onDeleteAll={deleteAllItems} />) : (
        'No Items to show'
      )}
    </Flex>
  )
}
