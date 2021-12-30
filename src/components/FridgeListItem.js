import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Box, Table, Tbody, Thead, Tr, Th, Td, TableCaption } from '@chakra-ui/react';

function FridgeListItem({ fridges }) {
  // const { id, fridgeName, fridgeTemp, note } = fridges
  return (
    <Flex>
      <Box boxShadow={'lg'} p={'6'} rounded={'md'} bg={'#FED7D7'}>
        <Table alignSelf={'center'} w={'100%'}>
          <TableCaption placement='top' textAlign={'center'} textColor={'blue'} >List of Fridge/ Freezer</TableCaption>
          <Thead>
            <Tr>
              <Th textAlign={'center'}>name</Th>
              <Th textAlign={'center'}>recorded at</Th>
              <Th textAlign={'center'}>note</Th>
            </Tr>
          </Thead>
          {fridges.map(fridge => (
            <Tbody key={fridge.id}>
              <Tr>
                <Link to={`/edit/${fridge.id}`}>
                  <Td color={'blue'} textAlign={'center'}>{fridge.fridgeName}</Td>
                </Link>
                <Td textAlign={'center'}>{fridge.createdAt}</Td>
                <Td textAlign={'center'}>{fridge.note}</Td>
              </Tr>
            </Tbody>
          ))}
        </Table>
      </Box>
    </Flex >
  )
};

export default FridgeListItem;