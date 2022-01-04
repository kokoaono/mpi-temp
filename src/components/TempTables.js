import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Box, Table, Tbody, Thead, Tr, Th, Td, TableCaption } from '@chakra-ui/react';

const TempTables = ({ fridges, items }) => (
  <Flex >
    <Box position='absolute' mt={100} left={300} w={600} boxShadow='lg' p={6} rounded='md' bg='#BEE3F8'>
      <Table size='lg'>
        <TableCaption
          placement='top'
          textAlign='center'
          textColor='blue'
        >
          Fridge/ Freezer
        </TableCaption>
        <Thead>
          <Tr>
            <Th textAlign='center'>name</Th>
            <Th textAlign='center'>temp</Th>
            <Th textAlign='center'>recorded at</Th>
          </Tr>
        </Thead>
        {fridges.map(fridge => (
          <Tbody key={fridge.id}>
            <Tr>
              <Link to={`/edit/${fridge.id}`}>
                <Td color='blue' textAlign='center'>{fridge.fridgeName}</Td>
              </Link>
              <Td textAlign='center'>{fridge.fridgeTemp}&#8451;</Td>
              <Td textAlign='center'>{fridge.createdAt}</Td>
            </Tr>
          </Tbody>
        ))}
      </Table>
    </Box>

    <Box position='absolute' mt={100} right={300} w={600} boxShadow='lg' p={6} rounded='md' bg='#9AE6B4'>
      <Table size='lg'>
        <TableCaption
          placement='top'
          textAlign='center'
          textColor='blue'
        >
          Food Items
        </TableCaption>
        <Thead>
          <Tr>
            <Th textAlign='center'>name</Th>
            <Th textAlign='center'>temp</Th>
            <Th textAlign='center'>recorded at</Th>
          </Tr>
        </Thead>
        {items.map(item => (
          <Tbody key={item.id}>
            <Tr>
              <Link to={`/edit/${item.id}`}>
                <Td color='blue' textAlign='center'>{item.itemName}</Td>
              </Link>
              <Td textAlign='center'>{item.itemTemp} &#8451;</Td>
              <Td textAlign='center'>{item.createdAt}</Td>
            </Tr>
          </Tbody>
        ))}
      </Table>
    </Box>
  </Flex >
);

export default TempTables;