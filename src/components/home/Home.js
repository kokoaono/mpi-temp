import Sidebar from '../NavigationBar/Sidebar';
import { Flex, Container, VStack, Box } from '@chakra-ui/react';
import FridgeList from '../FridgeList';


const Home = () => (
  <Flex>
    <Sidebar />
    <Box >

      <VStack spacing={4} align={'stretch'}>
        <Container maxW='container.sm' centerContent>
          <FridgeList />
        </Container>
      </VStack>
    </Box>
  </Flex >
);

export default Home;