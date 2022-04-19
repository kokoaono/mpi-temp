import React, { useState, useEffect } from 'react';
import { FoodItems } from './FoodItems';
import { AddItem } from './AddItem';
import { FoodHeader } from './FoodHeader';
// import { useItems } from './ItemContext';
import { Flex, Box } from '@chakra-ui/react';
import api from '../../api/items'


export const FoodApp = () => {
  const [items, setItems] = useState([]);
  // const { items } = useItems();
  const [showAddItem, setShowAddItem] = useState(false);

  const getItems = async () => {
    const response = await api.get('/items');
    return response.data
  };
  
  useEffect(() => {
    const getAllItems = async () => {
      const itemData = await getItems();
      if (itemData) setItems(itemData);
    };
    getAllItems()
  }, [])

  // SAVING DATA TO LS
  // useEffect(() => {
  //   const fetchItems = async () => {
  //     try {
  //       const response = await fetch(API_URL)
  //       const listItems = await response.json()
  //       console.log(response);
  //       setItems(listItems)
  //     } catch (err) {
  //       console.log("errMSG", err.message)
  //     }
  //   }
  //   fetchItems()
  // }, []);

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