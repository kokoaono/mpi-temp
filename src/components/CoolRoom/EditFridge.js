import React, { useState } from "react";
import { useMutation } from "react-query";
import { ValidateInfo } from "./ValidateInfo";
import api from "../../api/api";
import {
  Flex,
  FormControl,
  FormHelperText,
  Input,
  Button,
  Box,
} from "@chakra-ui/react";

export const EditFridge = ({ fridge, onClose }) => {
  const update = (id) => {
    api.patch(`/fridges/${id}`, { fridgeName, fridgeTemp });
  };

  const { mutate } = useMutation(() => update(fridge.id));

  // const id = fridge.id;
  const [fridgeName, setFridgeName] = useState(fridge.fridgeName);
  const [fridgeTemp, setFridgeTemp] = useState(fridge.fridgeTemp);
  const [errors, setErrors] = useState({});
  const date = Date();

  const handleChange = (e) => {
    const temp = e.target.value;
    if (temp.match(/^\d{0,}(\.\d{0,1})?$/)) {
      setFridgeTemp(temp);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    mutate(fridge.id);
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
            onClick={onSubmit}
          >
            Edit Fridge
          </Button>
        </Box>
      </FormControl>
    </Flex>
  );
};
