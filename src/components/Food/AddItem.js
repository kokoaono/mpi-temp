import { useState } from 'react';
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

export const AddItem = ({ onAdd }) => {
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

  const onSubmit = e => {
    e.preventDefault();
    setErrors(ValidateFoodInfo(itemName, itemTemp, time))

    onAdd({ itemTemp, itemName, time });

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
          p={4}
          size='sm'
          variant='solid'
          colorScheme='green'
          onClick={onSubmit}
        >
          ADD
        </Button>
      </FormControl >
    </Flex >
  )
}
