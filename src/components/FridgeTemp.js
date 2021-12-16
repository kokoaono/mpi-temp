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

const header = 'Record Fridge/Freezer Temperature'

const FridgeTemp = () => {
  //main array of object state
  const [fridges, setFridges] = useState(getData());

  //input field states
  const [fridgeTemp, setFridgeTemp] = useState('');
  const [fridgeName, setFridgeName] = useState('');
  const [date, setDate] = useState(new Date());
  const [id, setId] = useState(Date.now());
  const [note, setNote] = useState('');

  //form submit event
  const handleAddFridges = e => {
    e.preventDefault();

    // create an object
    let fridge = {
      id,
      fridgeName,
      fridgeTemp,
      date,
      note,
    }
    setFridges([...fridges, fridge]);
    setFridgeName('');
    setFridgeTemp('');
    setNote('');
    setId(Date.now());
    setDate(new Date());
  }

  //delete individual temp by its id
  const deleteFridge = (id) => {
    const filteredFridges = fridges.filter((fridge) => {
      return fridge.id !== id
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
        <h3>{header}</h3>
        <input
          placeholder="Fridge name/No"
          type="text"
          value={fridgeName}
          onChange={e => setFridgeName(e.target.value)}
        >
        </input>
        <input
          placeholder="Temp"
          type='number'
          name='temp'
          value={fridgeTemp}
          onChange={e => setFridgeTemp(e.target.value)}
        >
        </input>
        <label>Note</label>
        <input
          type="text"
          name="note"
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
        {fridges.length < 1 && <p>No temperatures recorded</p>}
      </div>
      <button className="ui button" onClick={() => setFridges([])}>Delete All</button>
    </div >
  )
};


export default FridgeTemp;