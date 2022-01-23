import Sidebar from '../NavigationBar/Sidebar';
import { FoodApp } from '../Food/FoodApp';
import { FridgeApp } from '../CoolRoom/FridgeApp';
import { Flex } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex>
      <Sidebar />
      <FoodApp />
      <FridgeApp />
    </Flex >
  )
};