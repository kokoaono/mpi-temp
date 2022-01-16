import { useState } from 'react';
import {
  Flex,
  FormControl,
  FormHelperText,
  Input,
  Button,
  useDisclosure,
  Box
} from '@chakra-ui/react';

export const EditFridge = ({ onEdit, fridge }) => {
  const id = fridge.id;
  const [fridgeName, setFridgeName] = useState(fridge.fridgeName);
  const [fridgeTemp, setFridgeTemp] = useState(fridge.fridgeTemp);

  const date = Date();
  const updatedFridge = { id, fridgeName, fridgeTemp, date }

  const onSubmit = e => {
    e.preventDefault();
    const temp = e.target.value;
    if (temp.match(/^\d{0,}(\.\d{0,1})?$/)) {
      setFridgeTemp(temp)
    }
    onEdit(id, updatedFridge)
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
            onChange={onSubmit}
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
