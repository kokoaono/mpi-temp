 import React from 'react';
import { FiEyeOff, FiEye } from 'react-icons/fi'
import { useForm } from './useForm';
import { Validate } from './Validate';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  FormHelperText,
} from '@chakra-ui/react';

export const Registration = ({ submitForm }) => {
  
  const { handleChange, values, handleSubmit, handlePassword, show, errors } = useForm(Validate, submitForm);

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name='name'
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && <FormHelperText color='red'>{errors.name}</FormHelperText>}
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name='email'
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <FormHelperText color='red'>{errors.email}</FormHelperText>}
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={show ? 'text' : 'password'}
                  name='password'
                  value={values.password}
                  onChange={handleChange}
                />

                <InputRightElement h={'full'}>
                  <Button
                    variant={'solid'}
                    onClick={handlePassword}
                  >
                    {show ? <FiEyeOff /> : <FiEye />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {errors.password && <FormHelperText color='red'>{errors.password}</FormHelperText>}
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleSubmit}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link href='/login' color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack >
    </Flex >
  );
}