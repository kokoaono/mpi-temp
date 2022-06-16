import { Button, Box, Heading, Flex } from "@chakra-ui/react";

export const FridgeHeader = ({ title, onAdd, showAdd }) => {
  return (
    // <Flex justify={"center"}>
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
    // </Flex>
  );
};

FridgeHeader.defaultProps = {
  title: "Fridge Temperature",
};
