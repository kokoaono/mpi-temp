import React, { useState, useEffect } from 'react';
import { getItemData } from '../Lsfunctions';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown'
// import 'bootstrap/dist/css/bootstrap.min.css';


const FoodTempForm = () => {
  const [items, setItems] = useState(getItemData());
  const [value, setValue] = useState();
  const [state, setState] = useState({
    id: Math.floor(Math.random() * 100),
    proteinName: '',
    proteinTemp: '',
    note: ''
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

  const handleSelect = e => {
    setValue(e)
    console.log(e);
  };

  // Saving Data to Ls
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select onChange={handleSelect}>
          <option value='chicken'>Chicken</option>
          <option value='beef'>Beef</option>
        </select>
        {/* <DropdownButton
          title="Select protein"
          size="sm"
          id="dropdown-menu-align-right"
          onSelect={handleSelect}
        >
          <Dropdown.Item eventKey="beef">Beef</Dropdown.Item>
          <Dropdown.Item eventKey="chicken">Chicken</Dropdown.Item>
          <Dropdown.Item eventKey="lamb">Lamb</Dropdown.Item>
          <Dropdown.Item eventKey="pork">Pork</Dropdown.Item>
        </DropdownButton> */}
        <input
          type='text'
          name='proteinName'
          placeholder='Name of Food item'
          value={state.proteinName}
          onChange={handleChange}
        >
        </input>
        <input
          type='number'
          name='proteinTemp'
          value={state.proteinTemp}
          onChange={handleChange}
        >
        </input>
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