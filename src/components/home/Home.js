import Sidebar from '../NavigationBar/Sidebar';
import { Flex, Container, VStack, Box } from '@chakra-ui/react';
import FridgeList from '../FridgeList';


const Home = () => (
  <Flex>
    <Sidebar />
    <Box>
      <Container maxW='container.sm' centerContent>
        <FridgeList />
      </Container>
    </Box>
  </Flex >
);

export default Home;