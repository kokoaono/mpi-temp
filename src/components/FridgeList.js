import React from "react";
import TempTables from "./TempTables";
import { getData, getItemData } from "./Lsfunctions";
import { Text, Flex } from "@chakra-ui/react";

const fridges = getData();
const items = getItemData();

const FridgeList = () => (
  <Flex>
    {fridges.length < 1 &&
      <Text fontWeight='bold' fontSize={'4xl'} textAlign='center'>
        Nothing to show
      </Text>
    }
    <TempTables items={items} fridges={fridges} />
  </Flex>
);

export default FridgeList;