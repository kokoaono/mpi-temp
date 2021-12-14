import React, { useState, useEffect } from "react";
import { View } from './View';

// getting values of LS
const getData = () => {
  const data = localStorage.getItem('fridges');
  if (data) {
    return JSON.parse(data);
  } else {
    return []
  }
};

const FridgeTemp = () => {
  //main array of object state
  const [fridges, setFridges] = useState(getData());

  //input field states
  const [fridgeTemp, setFridgeTemp] = useState('');
  const [date, setDate] = useState(new Date());
  const [note, setNote] = useState('');

  //form submit event
  const handleAddFridges = e => {
    e.preventDefault();

    // create an object
    let fridge = {
      fridgeTemp,
      date,
      note,
    }
    setFridges([...fridges, fridge]);
    setFridgeTemp('');
    setNote('');
    setDate(new Date());
  }

  //delete individual temp by its temp FOR NOW
  const deleteFridge = (fridgeTemp) => {
    const filteredFridges = fridges.filter((element) => {
      return element.fridgeTemp !== fridgeTemp
    })
    setFridges(filteredFridges)
  };

  // saving data to LS
  useEffect(() => {
    localStorage.setItem('fridges', JSON.stringify(fridges))
  }, [fridges])


  return (
    <div>
      <form onSubmit={handleAddFridges}>
        <label>Fridge1
          <input
            placeholder="Temp"
            type='number'
            name='temp'
            value={fridgeTemp}
            onChange={e => setFridgeTemp(e.target.value)}
          >
          </input>
        </label>
        <label>Note</label>
        <input
          type="text"
          value={note}
          onChange={e => setNote(e.target.value)}
        >
        </input>
        <button type="submit">
          Add
        </button>
      </form>
      <div>
        {fridges.length > 0 &&
          <View fridges={fridges} deleteFridge={deleteFridge} />
        }
        {fridges.length < 1 && <p>There is nothing show</p>}
      </div>
      <button onClick={() => setFridges([])}>Delete All</button>
    </div>
  )
};


export default FridgeTemp;