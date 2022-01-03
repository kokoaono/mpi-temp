import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Box, Table, Tbody, Thead, Tr, Th, Td, TableCaption } from '@chakra-ui/react';

function FridgeListItem({ fridges, items }) {
  // const { id, fridgeName, fridgeTemp, note } = fridges
  return (
    <Flex >
      <Box m={8} boxShadow={'lg'} p={'6'} rounded={'md'} bg={'#FED7D7'}>
        <Table size='lg' alignSelf={'center'} w={'100%'}>
          <TableCaption
            placement='top'
            textAlign={'center'}
            textColor={'blue'}
          >
            Fridge/ Freezer
          </TableCaption>
          <Thead>
            <Tr>
              <Th textAlign={'center'}>name</Th>
              <Th textAlign={'center'}>recorded at</Th>
            </Tr>
          </Thead>
          {fridges.map(fridge => (
            <Tbody key={fridge.id}>
              <Tr>
                <Link to={`/edit/${fridge.id}`}>
                  <Td fontSize={'md'} p={'35'} color={'blue'} textAlign={'center'}>{fridge.fridgeName}</Td>
                </Link>
                <Td paddingBottom={'12px'} paddingTop={'12px'} textAlign={'center'}>{fridge.createdAt}</Td>
              </Tr>
            </Tbody>
          ))}
        </Table>
      </Box>
      <Box m={8} boxShadow={'lg'} p={'6'} rounded={'md'} bg={'#9AE6B4'}>
        <Table size='lg' w={'100%'}>
          <TableCaption
            placement='top'
            textAlign={'center'}
            textColor={'blue'}
          >
            Food Items
          </TableCaption>
          <Thead>
            <Tr>
              <Th textAlign={'center'}>name</Th>
              <Th textAlign={'center'}>recorded at</Th>
            </Tr>
          </Thead>
          {items.map(item => (
            <Tbody key={item.id}>
              <Tr>
                <Link to={`/edit/${item.id}`}>
                  <Td color={'blue'} textAlign={'center'}>{item.itemName}</Td>
                </Link>
                <Td textAlign={'center'}>{item.createdAt}</Td>
              </Tr>
            </Tbody>
          ))}
        </Table>
      </Box>
    </Flex >
  )
};

export default FridgeListItem;