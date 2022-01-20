import React, { useState, useEffect } from 'react';
import { ValidateInfo } from './ValidateInfo';
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
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = e => {
    const temp = e.target.value
    if (temp.match(/^\d{0,}(\.\d{0,1})?$/)) {
      setFridgeTemp(temp)
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setErrors(ValidateInfo(fridgeName, fridgeTemp))
    setIsSubmit(true)
    onAdd({ fridgeName, fridgeTemp });

    setFridgeName('');
    setFridgeTemp('');
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit) {
      console.log(fridgeName, fridgeTemp);
    }
  }, [errors, fridgeName, fridgeTemp, isSubmit])

  return (
    <Flex m={5}>
      <FormControl >
        <Box my={3}>
          <Input
            type='text'
            placeholder='FridgeName/ No'
            value={fridgeName}
            // onChange={handleChange}
            onChange={e => setFridgeName(e.target.value)}

          />
          {errors.fridgeName && (
            <FormHelperText color='red'>
              {errors.fridgeName}
            </FormHelperText>
          )}
        </Box>
        <Box my={3}>
          <Input
            type='number'
            placeholder='Temperature'
            value={fridgeTemp}
            onChange={handleChange}
          // onChange={e => setFridgeTemp(e.target.value)}
          />
          {errors.fridgeTemp && (
            <FormHelperText color='red'>
              {errors.fridgeTemp}
            </FormHelperText>
          )}
        </Box>
        <Button
          p={4}
          size='sm'
          variant={'solid'}
          colorScheme='green'
          onClick={onSubmit}
        >
          ADD
        </Button>
      </FormControl>
    </Flex >
  )
};
