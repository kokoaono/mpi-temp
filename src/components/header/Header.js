import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex } from '@chakra-ui/react';

const Header = () => (
  <Flex as='button' marginTop='2.5vh' bg='teal' rounded='md' px={4} h={8}>
    <Breadcrumb fontWeight='medium'>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to='/'>
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  </Flex>
);

export default Header;