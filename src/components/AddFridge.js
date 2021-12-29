import React, { useState, useEffect } from 'react';
import {
  Button,
  Container,
  Input,
  Text,
  Stack,
  FormControl
} from '@chakra-ui/react';
import { getName } from './Lsfunctions';

const AddFridge = () => {
  //main array of object state
  const [fridgeName, setFridgeName] = useState(getName());

  const [fridge, setFridge] = useState('');

  // const handleChange = () => {
  //   setFridge('')
  // };

  //form submit event
  const handleSubmit = event => {
    event.preventDefault();
    setFridgeName([...fridgeName, fridge]);
    setFridge('')
  };

  useEffect(() => {
    localStorage.setItem('names', JSON.stringify(fridgeName))
  }, [fridgeName]);

  const { name } = fridge;
  return (
    <Container>
      <Text fontWeight='bold' textAlign='center'>Record Fridge/Freezer Temperature</Text>
      <FormControl>
        <Stack spacing={4}>
          <Input
            name='name'
            placeholder="Fridge Name/No"
            type='text'
            value={name}
            onChange={e => setFridge(e.target.value)}
          />
        </Stack>
        <Button role='button' onClick={handleSubmit} size='sm' colorScheme='teal' variant='solid' type="submit">
          ADD
        </Button>
      </FormControl>
    </Container >
  )
};

export default AddFridge;
