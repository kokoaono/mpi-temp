import React from "react";
import { Nav } from "../NavigationBar/Nav";
import { FoodApp } from "../Food/FoodApp";
import { FridgeApp } from "../CoolRoom/FridgeApp";
import { Box, Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Nav />
      <Box>
        <Flex width={"100%"} position={"relative"}>
          <FoodApp />
          <FridgeApp />
        </Flex>
      </Box>
    </>
  );
}
