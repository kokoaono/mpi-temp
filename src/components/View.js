import React from 'react';

export const View = ({ fridges, deleteFridge }) => {
  return fridges.map(fridge => (
    <div className='ui compact menu' key={fridge.id}>
      <div className='ui simple dropdown item'>
        Select Fridge
        <i className='dropdown icon'></i>
        <div className='menu'>
          <div className='item'>{fridge.fridgeName}</div>
        </div>
      </div>

      {/* <p>Fridge: {fridge.fridgeName}</p>
      <p>Temp: {fridge.fridgeTemp}</p>
      <p>Note: {fridge.note}</p> */}
      < button className='ui button' onClick={() => deleteFridge(fridge.id)}> delete</button >
    </div >

  ))
};