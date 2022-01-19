import { useForm } from './useForm';
import { Validate } from './Validate';
import { useState } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  FormHelperText,
} from '@chakra-ui/react';
import { FormSuccess } from './FormSuccess';
// import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export const FormSignup = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors, isSubmitting } = useForm(Validate, submitForm);
  const [showPassword, setShowPassword] = useState(false);

  // useEffect(() => {
  //   if (Object.keys(errors).length === 0 && isSubmitting) {
  //     console.log(values);
  //   }
  // }, [errors, isSubmitting, values])

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
          {/* <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text> */}
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                {Object.keys(errors).length === 0 && isSubmitting ? (<FormSuccess />) : (<>{JSON.stringify(values)}</>)}
                <FormControl id="firstName" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    name='name'
                    value={values.name}
                    onChange={handleChange}
                  />
                  {errors.name &&
                    <FormHelperText color='red'>
                      {errors.name}
                    </FormHelperText>}
                </FormControl>
              </Box>
              {/* <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text"/>
                </FormControl>
              </Box> */}
            </HStack>
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
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.password && <FormHelperText color='red'>{errors.password}</FormHelperText>}
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {/* {showPassword ? <ViewIcon /> : <ViewOffIcon />} */}
                  </Button>
                </InputRightElement>
              </InputGroup>
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
      </Stack>
    </Flex>
  );
}