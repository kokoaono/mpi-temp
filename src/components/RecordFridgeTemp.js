import React, { useState, useEffect } from "react";
import { getData } from "./Lsfunctions";
import {
  Button,
  Container,
  Input,
  Text,
  Stack,
  FormControl,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';

const RecordFridgeTemp = () => {
  //main array of object state
  const [fridges, setFridges] = useState(getData());

  //input field statest
  const [form, setForm] = useState({
    id: Math.floor(Math.random() * 100),
    fridgeName: '',
    fridgeTemp: '',
    note: '',
    createdAt: Date()
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    })
  };

  //form submit event
  const handleSubmit = event => {
    event.preventDefault();
    setFridges([...fridges, form]);
  };

  //delete individual temp by its id
  const deleteFridge = id => {
    const filteredFridges = fridges.filter(fridge => fridge.id !== id
    )
    setFridges(filteredFridges)
  };

  // SAVING DATA TO LS
  useEffect(() => {
    localStorage.setItem('fridges', JSON.stringify(fridges))
  }, [fridges]);

  const { fridgeName, fridgeTemp, note } = form;
  return (
    <Container>
      <Text fontWeight='bold' textAlign='center'>Record Fridge/Freezer Temperature</Text>
      <FormControl>
        <Stack spacing={4}>
          <Input
            name='fridgeName'
            placeholder="Fridge Name/No"
            type='text'
            value={fridgeName}
            onChange={handleChange}
          />
          <Input
            placeholder='Temp'
            type='number'
            name='fridgeTemp'
            value={fridgeTemp}
            onChange={handleChange}
          />
          <Input
            placeholder='Note'
            type="text"
            name="note"
            value={note}
            onChange={handleChange}
          />
        </Stack>
        <Button role='button' onSubmit={handleSubmit} size='sm' colorScheme='teal' variant='solid'>ADD</Button>
      </FormControl>
      <button onClick={() => setFridges([])}>Delete All</button>
    </Container >
  )
};


export default RecordFridgeTemp;