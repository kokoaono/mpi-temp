import React, { useState } from "react";
import { ValidateInfo } from "./ValidateInfo";
// import { useFridgeUpdate } from './FridgeContext';
import {
  Flex,
  FormControl,
  FormHelperText,
  Input,
  Button,
  Box,
} from "@chakra-ui/react";
import api from "../../api/api";
import { useMutation } from "react-query";

export const EditFridge = ({ fridge, onClose }) => {
  // const update = useFridgeUpdate()
  const update = async (id, fridgeName, fridgeTemp) => {
    const res = await api
      .put(`/fridges/${id}`, { fridgeName, fridgeTemp })
      .then((res) => res.data);
    console.log(res);
  };
  update();
  const useUpdateFridge = () => {
    return useMutation(update);
  };

  const { mutate } = useUpdateFridge();

  const id = fridge.id;
  const [fridgeName, setFridgeName] = useState(fridge.fridgeName);
  const [fridgeTemp, setFridgeTemp] = useState(fridge.fridgeTemp);
  const [errors, setErrors] = useState({});

  const date = Date();
  // const updatedFridge = { id, fridgeName, fridgeTemp, date };

  const handleChange = (e) => {
    const temp = e.target.value;
    if (temp.match(/^\d{0,}(\.\d{0,1})?$/)) {
      setFridgeTemp(temp);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { id, fridgeName, fridgeTemp };
    mutate(data);
    console.log(data);
    setErrors(ValidateInfo(fridgeName, fridgeTemp));
    onClose();
  };

  return (
    <Flex m={3}>
      <FormControl>
        <Box my={3}>
          <Input
            type="text"
            placeholder="FridgeName/ No"
            value={fridgeName}
            onChange={(e) => setFridgeName(e.target.value)}
          />
          {!fridgeName && (
            <FormHelperText color="red">{errors.fridgeName}</FormHelperText>
          )}
        </Box>
        <Box my={3}>
          <Input
            type="number"
            placeholder="Temperature"
            value={fridgeTemp}
            onChange={handleChange}
          />
          {!fridgeTemp && (
            <FormHelperText color="red">{errors.fridgeTemp}</FormHelperText>
          )}
        </Box>
        <Box my={3}>
          <Button
            w={"100%"}
            p={4}
            size="sm"
            variant="solid"
            colorScheme="green"
            onClick={handleSubmit}
          >
            Edit Fridge
          </Button>
        </Box>
      </FormControl>
    </Flex>
  );
};
