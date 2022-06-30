import React, { useState } from "react";
import { useQuery } from "react-query";
import { Fridges } from "./Fridges";
import { AddFridge } from "./AddFridge";
import { FridgeHeader } from "./FridgeHeader";
import api from "../../api/api";
import { Nav } from "../NavigationBar/Nav";
import { Flex, Box, Text, Container } from "@chakra-ui/react";

export const FridgeApp = () => {
  const [showAddFridge, setShowAddFridge] = useState(false);

  const getFridges = () => {
    const response = api.get("/fridges").then((res) => res.data.fridges);
    return response;
  };

  const { data, status, error } = useQuery("fridges", getFridges);

  return (
    <>
      <Nav />
      <Container p={1} centerContent={true}>
        <Box p={5}>
          <FridgeHeader
            onAdd={() => setShowAddFridge(!showAddFridge)}
            showAdd={showAddFridge}
          />
        </Box>
        {showAddFridge && <AddFridge />}
        {status === "loading" && <Text>Loading...</Text>}
        {status === "error" && <Text>{error.toString()}</Text>}
        {status === "success" && data.length > 0 ? (
          <Fridges fridges={data} />
        ) : (
          "No records to show"
        )}
      </Container>
    </>
  );
};
