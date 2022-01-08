import { RiDeleteBin5Line } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Box, Text, Flex, IconButton } from '@chakra-ui/react';

export const Fridge = ({ fridge, onDelete, onEdit }) => {
  return (
    <Flex>
      <Box>
        <Link to={`/edit/${fridge.id}`}>
          <Text>Name: {fridge.fridgeName}</Text>
        </Link>
        <Text>Temperature:{fridge.fridgeTemp} &#8451;</Text>
        <Text>Created at:{fridge.date}</Text>
      </Box>
      <IconButton
        mr={3}
        aria-label='edit fridge'
        fontSize='20px'
        variant='outline'
        colorScheme='green'
        onClick={() => onEdit(fridge.id)}
        icon={<AiOutlineEdit />}
      />
      <IconButton
        aria-label='delete fridge'
        fontSize='20px'
        variant='outline'
        colorScheme='red'
        onClick={() => onDelete(fridge.id)}
        icon={<RiDeleteBin5Line />}
      />
    </Flex >
  )
};
