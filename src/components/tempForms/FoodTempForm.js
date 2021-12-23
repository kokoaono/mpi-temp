import React, { useState, useEffect } from 'react';
import NumberFormat from 'react-number-format';
import { getItemData } from '../Lsfunctions';

const FoodTempForm = () => {
  //main array of items
  const [items, setItems] = useState(getItemData());

  //input values
  const [state, setState] = useState({
    id: Math.floor(Math.random() * 100),
    itemTemp: '',
    itemName: '',
    note: '',
    date: Date()
  });

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = e => {
    e.preventDefault();
    setItems([...items, state])
  };

  // Saving Data to Ls
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select
          onChange={handleChange}
          name='itemName'
          value={state.itemName}
        >
          <option defaultValue='select item'>Select Item</option>
          <option value='beef'>Beef</option>
          <option value='chicken'>Chicken</option>
          <option value='lamb'>Lamb</option>
          <option value='pork'>Pork</option>
        </select>
        <NumberFormat
          type='number'
          name='itemTemp'
          placeholder='Temperature'
          value={state.itemTemp}
          onChange={handleChange}
          decimalScale={true}
        />
        <input
          type='text'
          name='note'
          placeholder='Note'
          value={state.note}
          onChange={handleChange}
        >
        </input>
        <button type='submit'>Add</button>
      </form>
    </div >
  )
};

export default FoodTempForm;