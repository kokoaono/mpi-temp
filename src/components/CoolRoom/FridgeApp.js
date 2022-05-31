import React, { useState } from "react";
import { useQuery } from "react-query";
import { Fridges } from "./Fridges";
import { AddFridge } from "./AddFridge";
import { FridgeHeader } from "./FridgeHeader";
import api from "../../api/api";
import QueryFridge from "./QueryFridge";
import { Flex, Box } from "@chakra-ui/react";

export const FridgeApp = () => {
  const [showAddFridge, setShowAddFridge] = useState(false);

  const getFridges = async () => {
    const response = await api.get("/fridges").then((res) => res.data.fridges);
    return response;
  };

  const { data, status } = useQuery("fridges", getFridges);
  console.log("test", data);

  return (
    <Box mx={5}>
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
            <FridgeHeader
              onAdd={() => setShowAddFridge(!showAddFridge)}
              showAdd={showAddFridge}
            />
          </Box>
          {showAddFridge && <AddFridge />}
          {status === "loading" && <div>loading...</div>}
          {status === "error" && <div>Error</div>}
          {status === "success" && (
            <div>
              {data.map((fridge) => (
                <QueryFridge key={fridge.id} fridge={fridge} />
              ))}
            </div>
          )}
          {/* {status === "success" && data.length > 0 ? (
            <Fridges fridges={data} />
          ) : (
            "No records to show"
          )} */}
          
        </Box>
      </Flex>
    </Box>
  );
};
