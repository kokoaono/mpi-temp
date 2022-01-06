import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';

export const FoodItem = ({ item, onDelete }) => {

  return (
    <Box>
      <Link to={`/edit/${item.id}`}>
        <Text>
          {item.itemName}
        </Text>
      </Link>
      <Text>Temp: {item.itemTemp}</Text>
      <Text>Created at: {item.date}</Text>
      <FaTimes color='red'
        onClick={() => onDelete(item.id)} />
    </Box >
  )
}
