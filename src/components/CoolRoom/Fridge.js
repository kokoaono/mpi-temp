import { RiDeleteBin5Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';

export const Fridge = ({ fridge, onDelete }) => {
  return (
    <Box>
      <Link to={`/edit/${fridge.id}`}>
        <Text>
          {fridge.fridgeName}
        </Text>
      </Link>
      <Text>Temperature:{fridge.fridgeTemp} &#8451;</Text>
      <Text>Created at:{fridge.date}</Text>
      <RiDeleteBin5Line onClick={() => onDelete(fridge.id)} />
    </Box>
  )
}
