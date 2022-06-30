import React, { useState } from "react";
import { useQuery } from "react-query";
import { FoodItems } from "./FoodItems";
import { AddItem } from "./AddItem";
import { FoodHeader } from "./FoodHeader";
import api from "../../api/api";
import { Text, Box, Container } from "@chakra-ui/react";
import { Nav } from "../NavigationBar/Nav";

export const FoodApp = () => {
  const [showAddItem, setShowAddItem] = useState(false);

  const fetchItems = () => {
    const response = api.get("/items").then((res) => res.data.items);
    return response;
  };

  const { data, status, error } = useQuery("items", fetchItems);

  return (
    <>
      <Nav />
      <Container p={1} centerContent={true}>
        <Box p={5}>
          <FoodHeader
            onAdd={() => setShowAddItem(!showAddItem)}
            showAdd={showAddItem}
          />
        </Box>
        {showAddItem && <AddItem />}
        {status === "loading" && <Text>Loading...</Text>}
        {status === "error" && <Text>{error.toString()}</Text>}
        {status === "success" && data.length > 0 ? (
          <FoodItems items={data} />
        ) : (
          "No items to show"
        )}
      </Container>
    </>
  );
};
