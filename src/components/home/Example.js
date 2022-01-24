import { useNavigate } from 'react-router-dom';
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue
} from '@chakra-ui/react';

export default function WithBackgroundImage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login')
  };

  const handleSignup = () => {
    navigate('/register')
  };


  return (
    <Flex
      w={'full'}
      h={'100vh'}
      // backgroundImage='url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
      backgroundImage="url('../../images/Example.jpg')"
      backgroundSize={'cover'}
      backgroundPosition={'center center'} >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            something nice to say goes here...
          </Text>
          <Stack direction={'row'}>
            <Button
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'blue.500' }}
              onClick={handleLogin}>
              Log In
            </Button>
            <Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}
              onClick={handleSignup}>
              Create Account
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex >
  );
}