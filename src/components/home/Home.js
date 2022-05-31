import React from "react";
import { Nav } from "../NavigationBar/Nav";
import { FoodApp } from "../Food/FoodApp";
import { FridgeApp } from "../CoolRoom/FridgeApp";
import { ItemProvider } from "../Food/ItemContext";
import { Box, Flex } from "@chakra-ui/react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

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
            <FridgeApp /> <ReactQueryDevtools />
          </QueryClientProvider>
        </Flex>
      </Box>
    </>
  );
}
