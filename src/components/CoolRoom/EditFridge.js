import { useState } from 'react';
import {
  Flex,
  FormControl,
  FormHelperText,
  Input,
  Button,
  Box
} from '@chakra-ui/react';

export const EditFridge = ({ onEdit, fridge }) => {
  const id = fridge.id;
  const [fridgeName, setFridgeName] = useState(fridge.fridgeName);
  const [fridgeTemp, setFridgeTemp] = useState(fridge.fridgeTemp);

  const updatedAt = Date();
  const updatedFridge = { id, fridgeName, fridgeTemp, updatedAt }

  const onSubmit = e => {
    e.preventDefault();
    onEdit({ id, updatedFridge })
  };

  return (
    <Flex m={3}>
      <FormControl>
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
        <Box my={3}>
          <Button
            p={4}
            size='sm'
            variant={'solid'}
            colorScheme={'green'}
            onClick={onSubmit}
          >
            Edit Fridge
          </Button>
        </Box>
      </FormControl>
    </Flex >
  )
};
