import { useState } from 'react';
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
  const [time, setTime] = useState('')

  const onSubmit = e => {
    e.preventDefault();

    if (!itemTemp || !itemName) {
      alert('Please select name and add temperature')
      return
    }
    onAdd({ itemTemp, itemName, time });

    setItemTemp('');
    setItemName('');
    setTime('');
  }

  return (
    <Flex m={5}>
      <FormControl>
        <Select
          placeholder='Select Item'
          onChange={e => setItemName(e.target.value)}
          value={itemName}
        >
          {items.map(item => <option key={item}>{item}</option>)}
        </Select>
        {!itemName && (
          <FormHelperText>
            Please select the item.
          </FormHelperText>
        )}
        <Box my={3}>
          <Input
            type='number'
            placeholder='Temperature'
            value={itemTemp}
            onChange={e => setItemTemp(e.target.value)}
          />
          {!itemTemp && (
            <FormHelperText>
              Temperature is required.
            </FormHelperText>
          )}
        </Box>
        <Box my={3}>
          <Input
            type='text'
            placeholder='How long at this temp'
            value={time}
            onChange={e => setTime(e.target.value)}
          />
          {!time && (
            <FormHelperText>
              Length of time is required.
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
      </FormControl >
    </Flex >
  )
}
