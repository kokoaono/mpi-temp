import React from 'react';
import {
  Flex,
  Stack,
  Link,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export const FormSuccess = () => {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'3xl'}>We have received your request!</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            Check email to confirm your account. <Link href='/home' color={'blue.400'}>Start recording</Link>
          </Text>
        </Stack>
      </Stack>
    </Flex>
  )
};
