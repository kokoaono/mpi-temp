import React from 'react';
import { Link } from 'react-router-dom';

const FridgeListItem = ({ fridges }) => {

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