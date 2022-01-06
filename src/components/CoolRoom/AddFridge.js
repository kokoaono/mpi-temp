import React, { useState } from 'react';
import {
  FormControl,
  FormHelperText,
  Flex,
  Input,
  Box,
  Button
} from '@chakra-ui/react';

export const AddFridge = ({ onAdd }) => {
  const [fridgeName, setFridgeName] = useState('');
  const [fridgeTemp, setFridgeTemp] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (!fridgeName || !fridgeTemp) {
      alert('Please add name and temperature')
      return
    }
    onAdd({ fridgeName, fridgeTemp });

    setFridgeName('');
    setFridgeTemp('');
  };

  return (
    <Flex m={5}>
      <FormControl >
        <Box my={3}>
          <Input
            type='text'
            placeholder='FridgeName/ No'
            value={fridgeName}
            onChange={e => setFridgeName(e.target.value)}
          />
          {!fridgeName && (
            <FormHelperText>Name is required.</FormHelperText>
          )}
        </Box>
        <Box my={3}>
          <Input
            type='number'
            placeholder='Temperature'
            value={fridgeTemp}
            onChange={e => setFridgeTemp(e.target.value)}
          />
          {!fridgeTemp && (
            <FormHelperText>
              Temperature is required.
            </FormHelperText>
          )}
        </Box>
        <Button
          p={4}
          size='sm'
          variant={'solid'}
          colorScheme={'green'}
          onClick={onSubmit}
        >
          ADD
        </Button>
      </FormControl>
    </Flex >
  )
}
