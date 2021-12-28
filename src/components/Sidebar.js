import React, { useState } from 'react';
import { FiMenu } from 'react-icons'
import { Flex, Text, IconButton, Divider, Heading } from '@chakra-ui/react';
import NavigationBar from './NavigationBar/NavigationBar';

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
        <NavigationBar navSize={navSize} title='Dashboard' />
        <NavigationBar navSize={navSize} title='Search' />


      </Flex>
    </Flex>

  );
};

export default Sidebar;