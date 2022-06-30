import { Button, Box, Heading } from "@chakra-ui/react";

export const FridgeHeader = ({ title, onAdd, showAdd }) => {
  return (
    <Box>
      <Heading as="h1">{title}</Heading>
      <Button
        m={4}
        py={0}
        size="md"
        colorScheme={showAdd ? "red" : "green"}
        onClick={onAdd}
      >
        {showAdd ? "close" : "create"}
      </Button>
    </Box>
  );
};

FridgeHeader.defaultProps = {
  title: "Fridge Temperature",
};
