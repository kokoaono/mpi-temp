import { RiDeleteBin5Line } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Box, Text, Flex, IconButton } from '@chakra-ui/react';

export const FoodItem = ({ item, onDelete }) => {
  return (
    <Flex>
      <Box>
        <Link to={`/edit/${item.id}`}>
          <Text>
            Item: {item.itemName}
          </Text>
        </Link>
        <Text>Cooked Temp: {item.itemTemp} &#8451;</Text>
        <Text>Created at: {item.date}</Text>
      </Box>
      <IconButton
        mr={3}
        aria-label='edit foodItem'
        fontSize='20px'
        variant='outline'
        colorScheme='green'
        icon={<AiOutlineEdit />}
      />
      <IconButton
        aria-label='delete foodItem'
        fontSize='20px'
        variant='outline'
        colorScheme='red'
        onClick={() => onDelete(item.id)}
        icon={<RiDeleteBin5Line />}
      />
    </Flex>
  )
};
