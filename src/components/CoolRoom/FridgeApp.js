import React, { useEffect, useState } from 'react';
import { Fridges } from './Fridges';
import { AddFridge } from './AddFridge';
import { FridgeHeader } from './FridgeHeader';
import { getData } from '../Lsfunctions';
import { Flex, Box } from '@chakra-ui/react';



export const FridgeApp = () => {
  const [fridges, setFridges] = useState(getData());
  const [showAddFridge, setShowAddFridge] = useState(false);

  //Add fridge
  const addFridge = fridge => {
    const id = Math.floor(Math.random() * 100)
    const date = Date()
    const newFridge = { id, date, ...fridge }
    setFridges([...fridges, newFridge])
  };

  //Delete Fridge by its ID
  const deleteFridge = id => {
    const filteredFridges = fridges.filter(fridge => fridge.id !== id)
    setFridges(filteredFridges)
  };

  //Delete All
  const deleteAll = () => (
    setFridges([])
  );

  //Edit Fridge
  const updateFridge = (id, updatedFridge) => {
    setFridges(fridges.map(fridge => fridge.id === id ? updatedFridge : fridge))
  };

  // SAVING DATA TO LS
  useEffect(() => {
    localStorage.setItem('fridges', JSON.stringify(fridges))
  }, [fridges]);

  return (
    <Flex m={10}>
      <Box
        p={2}
        shadow='md'
        // maxW='lg'
        borderWidth='1px'
        borderRadius='lg'
        overflow='hidden'
      // bg='#BEE3F8'
      >
        <FridgeHeader
          onAdd={() => setShowAddFridge(!showAddFridge)}
          showAdd={showAddFridge}
        />
        {showAddFridge && <AddFridge onAdd={addFridge} />}
        {fridges.length > 0 ? (
          <Fridges
            fridges={fridges}
            onEdit={updateFridge}
            onDelete={deleteFridge}
            onDeleteAll={deleteAll}
          />) : ('No fridges to show')
        }
      </Box>
    </Flex>
  )
};
