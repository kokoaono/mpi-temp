import React, { useEffect, useState } from 'react';
import { Fridges } from './Fridges';
import { AddFridge } from './AddFridge';
import { FridgeHeader } from './FridgeHeader';
import api from '../../api/api';
import { Flex, Box } from '@chakra-ui/react';


export const FridgeApp = () => {
  const [fridges, setFridges] = useState([]);
  const [showAddFridge, setShowAddFridge] = useState(false);

  const getFridges = async () => {
    const response = await api.get('/fridges')
    return response.data.fridges
  };

  // const deleteFridge = async (id) => {
  //   try {
  //     await api.delete(`/fridges/${id}`)
  //     const filteredFridge = fridges.filter(fridge => fridge.id !== id)
  //     setFridges(filteredFridge)
  //   } catch (err) {
  //     console.log('Error', err.message);
  //   }
  // }

  useEffect(() => {
    const getFridgeData = async () => {
      try {
        const fridgeData = await getFridges();
        if (fridgeData) setFridges(fridgeData)
      } catch (err) {
        console.log('Error', err.message);
      }
    }
    getFridgeData()
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
            <FridgeHeader
              onAdd={() => setShowAddFridge(!showAddFridge)}
              showAdd={showAddFridge}
            />
          </Box>
          {showAddFridge && <AddFridge />}

          {fridges.length > 0 ? <Fridges fridges={fridges} /> : 'No fridges to show'}
        </Box>
      </Flex>
    </Box>
  )
};