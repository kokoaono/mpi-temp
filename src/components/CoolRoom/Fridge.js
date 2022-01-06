import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Text } from '@chakra-ui/react';

export const Fridge = ({ fridge, onDelete }) => {
  return (
    <div>
      <Link to={`/edit/${fridge.id}`}>
        <Text>
          {fridge.fridgeName}
        </Text>
      </Link>
      <Text>Temperature:{fridge.fridgeTemp}</Text>
      <Text>Created at:{fridge.date}</Text>
      <FaTimes color='red'
        onClick={() => onDelete(fridge.id)}
      />
    </div>
  )
}
