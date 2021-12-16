import React from 'react';
import { Link } from 'react-router-dom';

const FridgeListItem = (id, fridgeName) => (
  <div>
    <Link to={`/edit/${id}`} />
    <h3>{fridgeName}</h3>
  </div>
);

export default FridgeListItem;