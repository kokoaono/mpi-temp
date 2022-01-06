import { RiDeleteBin5Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';

export const FoodItem = ({ item, onDelete }) => {

  return (
    <Box>
      <Link to={`/edit/${item.id}`}>
        <Text>
          Item: {item.itemName}
        </Text>
      </Link>
      <Text>Temp: {item.itemTemp} &#8451;</Text>
      <Text>Created at: {item.date}</Text>
      <RiDeleteBin5Line onClick={() => onDelete(item.id)} />
    </Box >
  )
}
