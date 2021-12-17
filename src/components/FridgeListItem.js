import React from 'react';
import { Link } from 'react-router-dom';

const FridgeListItem = ({ fridges }) => {
  return fridges.map(fridge => (
    <div key={fridge.id}>
      <p>FridgeName:
        <Link to={`/edit/${fridge.id}`}>
          <h3>{fridge.fridgeName}</h3>
        </Link>
      </p>
      <p>Temperature: {fridge.fridgeTemp}&#8451;</p>
    </div >
  ))
};

export default FridgeListItem;