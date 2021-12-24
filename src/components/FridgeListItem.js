import React from 'react';
import { Link } from 'react-router-dom';

function FridgeListItem({ fridges }) {
  // const { id, fridgeName, fridgeTemp, note } = fridges
  return fridges.map(fridge => (
    <div key={fridge.id}>
      <div>FridgeName:
        <Link to={`/edit/${fridge.id}`}>
          <p>{fridge.fridgeName}</p>
        </Link>
      </div>
    </div >
  ))
};

export default FridgeListItem;