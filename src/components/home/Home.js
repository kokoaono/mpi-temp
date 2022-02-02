import React from 'react';
import { Nav } from '../NavigationBar/Nav';
import { FoodApp } from '../Food/FoodApp';
import { FridgeApp } from '../CoolRoom/FridgeApp';
import { ItemProvider } from '../Food/ItemContext';
import { FridgeProvider } from '../CoolRoom/FridgeContext';
import { Box, Flex } from '@chakra-ui/react';


export default function Home() {
  return (
    <>
      <Nav />
      <Box>
        <Flex width={'100%'} position={'relative'}>
          <ItemProvider>
            <FoodApp />
          </ItemProvider>
          
          <FridgeProvider>
            <FridgeApp />
          </FridgeProvider>
        </Flex>
      </Box>
    </>
  )
};