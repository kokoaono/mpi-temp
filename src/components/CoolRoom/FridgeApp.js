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

  const getFridges = async () => {
    const response = await api.get("/fridges").then((res) => res.data.fridges);
    return response;
  };

  const { data, status } = useQuery("fridges", getFridges);

  return (
    // <Box mx={5}>
    <>
      <Nav />
      <Container p={1} centerContent={true}>
        {/* <Box
          p={2}
          shadow="md"
          maxW="lg"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        > */}
        <Box p={5}>
          <FridgeHeader
            onAdd={() => setShowAddFridge(!showAddFridge)}
            showAdd={showAddFridge}
          />
        </Box>
        {showAddFridge && <AddFridge />}
        {status === "loading" && <Text>Loading...</Text>}
        {status === "error" && <Text>Ops..something went wrong!</Text>}
        {status === "success" && data.length > 0 ? (
          <Fridges fridges={data} />
        ) : (
          "No records to show"
        )}
        {/* </Box> */}
      </Container>
    </>
  );
};
