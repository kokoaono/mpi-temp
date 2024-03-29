import React, { useState } from "react";
import { ValidateInfo } from "./ValidateInfo";
import { useMutation } from "react-query";
import api from "../../api/api";
import {
  FormControl,
  FormHelperText,
  Flex,
  Input,
  Box,
  Button,
} from "@chakra-ui/react";

export const AddFridge = () => {
  const useAddFridgeData = () => {
    return useMutation(addFridge);
  };
  //add new fridge temp
  const addFridge = (newFridge) => {
    return api.post("/fridges", newFridge);
  };
  const { mutate } = useAddFridgeData();

  const [fridgeName, setFridgeName] = useState("");
  const [fridgeTemp, setFridgeTemp] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const temp = e.target.value;
    if (temp.match(/^\d{0,}(\.\d{0,1})?$/)) {
      setFridgeTemp(temp);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fridgeName || !fridgeTemp) {
      setErrors(ValidateInfo(fridgeName, fridgeTemp));
      return;
    }
    try {
      const data = { fridgeName, fridgeTemp };
      mutate(data);
    } catch {
      setErrors("failed");
    }
    setFridgeName("");
    setFridgeTemp("");
  };

  return (
    // <Flex m={5}>
    <FormControl>
      <Box>
        <Input
          type="text"
          placeholder="FridgeName/ No"
          value={fridgeName}
          onChange={(e) => setFridgeName(e.target.value)}
        />
        {errors.fridgeName && (
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
        {errors.fridgeTemp && (
          <FormHelperText color="red">{errors.fridgeTemp}</FormHelperText>
        )}
      </Box>
      <Button
        w={"100%"}
        p={4}
        size="sm"
        shadow={"lg"}
        variant={"solid"}
        colorScheme="green"
        onClick={handleSubmit}
      >
        ADD
      </Button>
    </FormControl>
    // </Flex>
  );
};
