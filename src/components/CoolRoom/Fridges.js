import React from "react";
import { Fridge } from "./Fridge";
import { useDeleteAllFridges } from "./FridgeContext";
import { Button, Box, Flex } from "@chakra-ui/react";

export const Fridges = ({ data }) => {
  const deleteAll = useDeleteAllFridges();

  return (
    <Flex flexDir={"column"}>
      <Box>
        <Button m={4} size="sm" colorScheme="red" onClick={deleteAll}>
          Clear all
        </Button>
      </Box>
      {data.map((data) => (
        <Fridge key={data.id} fridge={data} />
      ))}
    </Flex>
  );
};
