import React, { useState } from 'react'

export const AddFridge = ({ onAdd }) => {
  const [fridgeName, setFridgeName] = useState('');
  const [fridgeTemp, setFridgeTemp] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (!fridgeName || !fridgeTemp) {
      alert('Please add name and temperature')
      return
    }
    onAdd({ fridgeName, fridgeTemp });

    setFridgeName('');
    setFridgeTemp('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='FridgeName/ No'
        value={fridgeName}
        onChange={e => setFridgeName(e.target.value)}
      />
      <input
        type='number'
        placeholder='Temperature'
        value={fridgeTemp}
        onChange={e => setFridgeTemp(e.target.value)}
      />
      <button>Add</button>
    </form>
  )
}
