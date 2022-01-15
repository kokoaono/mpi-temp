import { useState } from 'react';
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

  const items = ['Beef', 'Chicken', 'Lamb', 'Pork'];
  const updatedAt = Date();

  const updatedItem = { id, itemName, itemTemp, time, updatedAt };

  const onSubmit = e => {
    e.preventDefault()
    onEdit(id, updatedItem)
  };

  const setTwoDecimalPlace = e => {
    const temp = e.target.value;
    if (!temp || temp.match((/^\d{1,}(\.\d{0,2})?$/))) {
      setItemTemp(temp)
    }
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
            // onChange={e => setItemTemp(e.target.value)}
            onChange={setTwoDecimalPlace}
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
        <Box my={3}>
          <Button
            p={4}
            size='sm'
            variant={'solid'}
            colorScheme={'green'}
            onClick={onSubmit}
          >
            Edit Item
          </Button>
        </Box>
      </FormControl>
    </Flex >
  )
};
