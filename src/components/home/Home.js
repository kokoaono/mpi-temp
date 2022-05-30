import React from "react";
import { Nav } from "../NavigationBar/Nav";
import { FoodApp } from "../Food/FoodApp";
import { FridgeApp } from "../CoolRoom/FridgeApp";
import { ItemProvider } from "../Food/ItemContext";
import { QueryClientProvider, QueryClient } from "react-query";
import { Box, Flex } from "@chakra-ui/react";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <>
      <Nav />
      <Box>
        <Flex width={"100%"} position={"relative"}>
          <ItemProvider>
            <FoodApp />
          </ItemProvider>

          <QueryClientProvider client={queryClient}>
            <FridgeApp />
          </QueryClientProvider>
        </Flex>
      </Box>
    </>
  );
}
