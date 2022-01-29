import React from 'react';
import { useLoginForm } from './useForm';
import { validateLogin } from './Validate';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  useColorModeValue,
  Text,
  FormHelperText
} from '@chakra-ui/react';

export default function Login({ submitLoginForm }) {
  const { handleChange, values, handleSubmit, errors, handleCheckedItem, checkedItem } = useLoginForm(validateLogin, submitLoginForm);

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Log in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            Don't have an account? <Link href='/register' color={'blue.400'}>Sign up here</Link>
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id='username'>
              <FormLabel>User Name</FormLabel>
              <Input
                type='username'
                name='username'
                value={values.username}
                onChange={handleChange}
              />
              {errors.username &&
                <FormHelperText color='red'>
                  {errors.username}
                </FormHelperText>}
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name='password'
                value={values.password}
                onChange={handleChange}
              />
              {errors.password &&
                <FormHelperText color='red'>
                  {errors.password}
                </FormHelperText>}
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox
                  isChecked={checkedItem}
                  onChange={handleCheckedItem}
                >
                  Remember me
                </Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleSubmit}>
                Log in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}