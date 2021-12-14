import React from 'react';

export const View = ({ fridges, deleteFridge, }) => {
  return fridges.map(fridge => (
    <ul key={fridge.id}>
      <li>{fridge.fridgeTemp}</li>
      <li>{fridge.note}</li>
      <button className='delete-btn' onClick={() => deleteFridge(fridge.fridgeTemp)}>delete</button>
    </ul>
  ))
};