import Sidebar from '../NavigationBar/Sidebar';
// import FridgeList from '../FridgeList';
import { Flex } from '@chakra-ui/react';
import { FoodApp } from '../Food/FoodApp';
import { FridgeApp } from '../CoolRoom/FridgeApp';

export default function Home() {
  return (
    <Flex>
      <Sidebar />
      <FoodApp />
      <FridgeApp />
      {/* <FridgeList /> */}
    </Flex >
  )
};