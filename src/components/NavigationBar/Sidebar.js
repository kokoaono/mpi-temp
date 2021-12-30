import React, { useState } from 'react';
import { FiHome, FiMenu } from 'react-icons/fi';
import { GiChickenOven } from 'react-icons/gi'
import { FaSearch, FaTemperatureLow } from 'react-icons/fa';
import { IoIosCreate } from 'react-icons/io';
import { BiLogIn } from 'react-icons/bi';
import { Flex, IconButton, Divider, Link, MenuButton, Menu, MenuList, MenuItem } from '@chakra-ui/react';
import NavigationBar from './NavigationBar';

const Sidebar = () => {
  const [navSize, changeNavSize] = useState('large');

  return (
    <Flex
      pos='sticky'
      left='5'
      h='95vh'
      marginTop='2.5vh'
      boxShadow='0 4px 12px 0 rgba(0, 0, 0, 0.05)'
      borderRadius={navSize === 'small' ? '15px' : '30px'}
      w={navSize === 'small' ? '75px' : '200px'}
      flexDir='column'
      justifyContent='space-between'
    >
      <Flex
        p='5%'
        flexDir='column'
        alignItems='flex-start'
        as='nav'
      >
        <IconButton
          background='none'
          mt='5'
          _hover={{ background: 'none' }}
          icon={<FiMenu />}
          onClick={() => {
            if (navSize === 'small')
              changeNavSize('large')
            else
              changeNavSize('small')
          }}
        />
        <Link href='/'>
          <NavigationBar navSize={navSize} icon={FiHome} title='Dashboard' active />
        </Link>
        <Link href='fridgetemp'>
          <NavigationBar navSize={navSize} icon={IoIosCreate} title='Record' />
        </Link>
        <Link href='fridgelist'>
          <NavigationBar navSize={navSize} icon={FaTemperatureLow} title='Fridge/Freezer' />
        </Link>
        <Link href='itemlist'>
          <NavigationBar navSize={navSize} icon={GiChickenOven} title='Food Item' />
        </Link>
        <Link href='search'>
          <NavigationBar navSize={navSize} icon={FaSearch} title='Search' />
        </Link>
      </Flex>
      <Flex
        p='5%'
        flexDir='column'
        w='100%'
        alignItems='flex-start'
        mb={4}
      >
        <Divider />
        <Flex mt={4} align='center'>
          <Flex flexDir='column' ml={4}>
            <Link href='login'>
              <NavigationBar navSize={navSize} icon={BiLogIn} title='Log In' />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex >

  );
};

export default Sidebar;