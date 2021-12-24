import React, { useState, useEffect } from "react";
import { getData } from "./Lsfunctions";

const RecordFridgeTemp = () => {
  //main array of object state
  const [fridges, setFridges] = useState(getData());

  //input field states
  const [form, setForm] = useState({
    id: Math.floor(Math.random() * 100),
    fridgeName: '',
    fridgeTemp: '',
    note: '',
    createdAt: Date()
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    })
  };

  //form submit event
  const handleSubmit = event => {
    event.preventDefault();
    setFridges([...fridges, form]);
  };

  //delete individual temp by its id
  const deleteFridge = id => {
    const filteredFridges = fridges.filter(fridge => fridge.id !== id
    )
    setFridges(filteredFridges)
  };

  // SAVING DATA TO LS
  useEffect(() => {
    localStorage.setItem('fridges', JSON.stringify(fridges))
  }, [fridges]);



  const { fridgeName, fridgeTemp, note } = form;
  return (
    <div>
      <h3>Record Fridge/Freezer Temperature</h3>
      <form onSubmit={handleSubmit}>
        <input
          name='fridgeName'
          placeholder="Fridge Name/No"
          type='text'
          value={fridgeName}
          onChange={handleChange}
        >
        </input>
        <input
          placeholder="Temp"
          type='number'
          name='fridgeTemp'
          value={fridgeTemp}
          onChange={handleChange}
        >
        </input>
        <label>Note</label>
        <input
          type="text"
          name="note"
          value={note}
          onChange={handleChange}
        >
        </input>
        <button type="submit">
          Add
        </button>
      </form>
      <button className="ui button" onClick={() => setFridges([])}>Delete All</button>

    </div >
  )
};


export default RecordFridgeTemp;