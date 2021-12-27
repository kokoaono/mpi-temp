import React from 'react';
import { HStack, Link, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

const NavigationBar = () => (
  <HStack spacing='24px'>
    <Link fontWeight='bold' href='/' to='/'>Home</Link>
    <Link fontWeight='bold' href='fridgelist'>Fridge List</Link>
    <Link fontWeight='bold' href='search'>Search</Link>
    <Link fontWeight='bold' href='login'>LOG IN</Link>
    <Menu>
      <MenuButton fontWeight='bold'>
        Record
      </MenuButton>
      <MenuList>
        <Link>
          <MenuItem href='fridgeTemp'>Fridge</MenuItem>
          <MenuItem>Freezer</MenuItem>
          <MenuItem>Food Item</MenuItem>
        </Link>
      </MenuList>

    </Menu>
    <div className='dropdown'>
      <button className='dropbtn'>Record
        <i className='fa fa-caret-down'></i>
      </button>
      <div className='dropdown-content'>
        <a href='fridgetemp'>Fridge/Freezer</a>
        <a href='foodtemp'>Food</a>
      </div>
    </div>
  </HStack>
);

export default NavigationBar; 