import React, { useEffect, useState } from 'react';
import { Fridges } from './Fridges';
import { AddFridge } from './AddFridge';
import { FridgeHeader } from './FridgeHeader';
import { useFridges } from './FridgeContext';
import { Flex, Box } from '@chakra-ui/react';


export const FridgeApp = () => {
  const { fridges } = useFridges();
  const [showAddFridge, setShowAddFridge] = useState(false);

  // SAVING DATA TO LS
  useEffect(() => {
    localStorage.setItem('fridges', JSON.stringify(fridges))
  }, [fridges]);

  return (
    <Flex m={10}
    >
      <Box
        p={8}
        px={10}
        shadow='md'
        maxW='lg'
        borderWidth='1px'
        borderRadius='lg'
        overflow='hidden'
      >
        <FridgeHeader
          onAdd={() => setShowAddFridge(!showAddFridge)}
          showAdd={showAddFridge}
        />
        {showAddFridge && <AddFridge />}

        {fridges.length > 0 ? (<Fridges />) : 'No fridges to show'}
      </Box>
    </Flex>
  )
};