import React from "react";
import { Button, Box, Heading } from "@chakra-ui/react";

export const FoodHeader = ({ foodTitle, onAdd, showAdd }) => {
  return (
    <Box>
      <Heading as="h1">{foodTitle}</Heading>
      <Button
        m={4}
        size="md"
        colorScheme={showAdd ? "red" : "green"}
        onClick={onAdd}
      >
        {showAdd ? "close" : "create"}
      </Button>
    </Box>
  );
};

FoodHeader.defaultProps = {
  foodTitle: "Poultry and Meat Temperature",
};
