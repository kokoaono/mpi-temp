import React, { useState } from 'react';
import { ValidateFoodInfo } from './ValidateFoodInfo';
import {
  Flex,
  FormControl,
  FormHelperText,
  Input,
  Button,
  Box,
  Select
} from '@chakra-ui/react';

export const EditFood = ({ onEdit, item }) => {
  const id = item.id;
  const [itemName, setItemName] = useState(item.itemName);
  const [itemTemp, setItemTemp] = useState(item.itemTemp);
  const [time, setTime] = useState(item.time);
  const [errors, setErrors] = useState({});

  const items = ['Beef', 'Chicken', 'Lamb', 'Pork'];
  const date = Date();

  const updatedItem = { id, itemName, itemTemp, time, date };

  const onSubmit = e => {
    e.preventDefault();
    setErrors(ValidateFoodInfo(itemName, itemTemp, time))
    const temp = e.target.value;
    if (temp.match(/^\d{0,}(\.\d{0,2})?$/)) {
      setItemTemp(temp)
    }
    onEdit(id, updatedItem)
  };
  
  return (
    <Flex m={3}>
      <FormControl>
        <Select
          placeholder='Select Item'
          value={itemName}
          onChange={e => setItemName(e.target.value)}
        >
          {items.map(item => <option key={item}>{item}</option>)}
        </Select>
        {!itemName &&
          <FormHelperText color='red'>
            {errors.itemName}
          </FormHelperText>
        }
        <Box my={3}>
          <Input
            type='number'
            placeholder='Temperature'
            value={itemTemp}
            onChange={onSubmit}
          />
          {!itemTemp && <FormHelperText color='red'>
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
          {!time && <FormHelperText color='red'>
            {errors.time}
          </FormHelperText>
          }
        </Box>
        <Box my={3}>
          <Button
            p={4}
            size='sm'
            variant='solid'
            colorScheme='green'
            onClick={onSubmit}
          >
            Edit Item
          </Button>
        </Box>
      </FormControl>
    </Flex >
  )
};
