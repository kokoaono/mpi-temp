import Sidebar from '../NavigationBar/Sidebar';
import FridgeList from '../FridgeList';
import { Flex } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex>
      <Sidebar />
      <FridgeList />
    </Flex >
  )
};