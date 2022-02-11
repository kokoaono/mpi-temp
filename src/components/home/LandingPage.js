import React from 'react';
import bgImage from '../../images/bgImage.jpg';
import { useNavigate } from 'react-router-dom';
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue
} from '@chakra-ui/react';

export default function LandingPage() {
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
      backgroundImage={bgImage}
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
            MSG goes here...
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
  )
};