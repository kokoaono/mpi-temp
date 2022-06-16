import React, { useState } from "react";
import { useQuery } from "react-query";
import { FoodItems } from "./FoodItems";
import { AddItem } from "./AddItem";
import { FoodHeader } from "./FoodHeader";
import api from "../../api/api";
import { Flex, Box } from "@chakra-ui/react";
import { Nav } from "../NavigationBar/Nav";

export const FoodApp = () => {
  const [showAddItem, setShowAddItem] = useState(false);

  const fetchItems = async () => {
    const response = await api.get("/items").then((res) => res.data.items);
    return response;
  };

  const { data, status } = useQuery("items", fetchItems);

  return (
    // <Box mx={5}>
    <>
      <Nav />
      <Flex m={10}>
        <Box
          p={2}
          shadow="md"
          maxW="lg"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Box alignItems={"center"} p={5}>
            <FoodHeader
              onAdd={() => setShowAddItem(!showAddItem)}
              showAdd={showAddItem}
            />
          </Box>
          {showAddItem && <AddItem />}
          {status === "loading" && <div>Loading...</div>}
          {status === "error" && <div>Ops..something went wrong!!</div>}
          {status === "success" && data.length > 0 ? (
            <FoodItems items={data} />
          ) : (
            "No items to show"
          )}
        </Box>
      </Flex>
    </>
    // </Box>
  );
};
