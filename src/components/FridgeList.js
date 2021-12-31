import React from "react";
import FridgeListItem from "./FridgeListItem";
import { getData, getItemData } from "./Lsfunctions";
import { Text, Flex, Box, Container } from "@chakra-ui/react";

const fridges = getData();
const items = getItemData();
const FridgeList = () => (
  <Flex>
    <Container>
      <Box>
        {fridges.length < 1 &&
          <Text fontWeight='bold' fontSize={'4xl'} textAlign='center'>
            Nothing to show
          </Text>
        }
        <FridgeListItem items={items} fridges={fridges} />
      </Box>
    </Container >
  </Flex>
);

export default FridgeList;