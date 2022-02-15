import React, { useState } from 'react';
import { ValidateFoodInfo } from './ValidateFoodInfo';
import {
  FormControl,
  FormHelperText,
  Flex,
  Input,
  Box,
  Button,
  Select
} from '@chakra-ui/react';
import { useAddItem } from './ItemContext';

export const AddItem = () => {
  const addItem = useAddItem();

  const items = ['Beef', 'Chicken', 'Lamb', 'Pork'];

  const [itemTemp, setItemTemp] = useState('');
  const [itemName, setItemName] = useState('');
  const [time, setTime] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const temp = e.target.value;
    if (temp.match(/^\d{0,}(\.\d{0,1})?$/)) {
      setItemTemp(temp)
    }
  };

  const handleSutmit = async e => {
    e.preventDefault();
    if (!itemName || !itemTemp || !time) {
      setErrors(ValidateFoodInfo(itemName, itemTemp, time))
      return;
    }
    try {
      await addItem({ itemTemp, itemName, time })
    } catch (error) {
      console.error(error)
    }
    setItemTemp('');
    setItemName('');
    setTime('');
  };

  return (
    <Flex m={5}>
      <FormControl>
        <Select
          placeholder='Select Item'
          value={itemName}
          onChange={e => setItemName(e.target.value)}
        >
          {items.map(item => <option key={item}>{item}</option>)}
        </Select>
        {errors.itemName &&
          <FormHelperText color='red'>
            {errors.itemName}
          </FormHelperText>
        }
        <Box my={3}>
          <Input
            type='number'
            placeholder='Temperature'
            value={itemTemp}
            onChange={handleChange}
          />
          {errors.itemTemp &&
            <FormHelperText color='red'>
              {errors.itemTemp}
            </FormHelperText>
          }
        </Box>
        <Box my={3}>
          <Input
            type='text'
            placeholder='How long at this temp'
            value={time}
            onChange={e => setTime(e.target.value)}
          />
          {errors.time &&
            <FormHelperText color='red'>
              {errors.time}
            </FormHelperText>
          }
        </Box>
        <Button
          w={'100%'}
          p={4}
          size='sm'
          shadow={'lg'}
          variant='solid'
          colorScheme='green'
          onClick={handleSutmit}
        >
          ADD
        </Button>
      </FormControl >
    </Flex >
  )
};