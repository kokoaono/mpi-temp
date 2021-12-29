import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Box,} from '@chakra-ui/react';

function FridgeListItem({ fridges }) {
  // const { id, fridgeName, fridgeTemp, note } = fridges
  return fridges.map(fridge => (
    <Flex>
    

      <div key={fridge.id}>
        <div>FridgeName:
          <Link to={`/edit/${fridge.id}`}>
            <p>{fridge.fridgeName}</p>
          </Link>
        </div>
      </div >
    </Flex>
  ))
};

export default FridgeListItem;