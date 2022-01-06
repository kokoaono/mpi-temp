import React, { useEffect, useState } from 'react';
import { Fridges } from './Fridges';
import { AddFridge } from './AddFridge';
import { Header } from '../Header'
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

  //Delete all
  const deleteAll = () => (
    setFridges([])
  );


  // SAVING DATA TO LS
  useEffect(() => {
    localStorage.setItem('fridges', JSON.stringify(fridges))
  }, [fridges]);

  return (
    <Flex>
      <Box>
        <Header
          onAdd={() => setShowAddFridge(!showAddFridge)}
          showAdd={showAddFridge}
        />
      </Box>
      {showAddFridge && <AddFridge onAdd={addFridge} />}
      {fridges.length > 0 ? (<Fridges
        fridges={fridges}
        onDelete={deleteFridge}
        onDeleteAll={deleteAll}
      />) : ('No fridges to show')}
    </Flex>
  )
}
