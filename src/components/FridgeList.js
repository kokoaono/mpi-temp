import React from "react";
import FridgeListItem from "./FridgeListItem";
import { getData } from "./Lsfunctions";
import { Text, Flex, Box, Container } from "@chakra-ui/react";

const fridges = getData();

const FridgeList = () => (
  <Flex>
    <Container>
      <Box>
        {fridges.length < 1 &&
          <Text fontWeight='bold' fontSize={'4xl'} textAlign='center'>
            Nothing to show
          </Text>
        }
        <FridgeListItem fridges={fridges} />
      </Box>
    </Container >
  </Flex>
);

export default FridgeList;