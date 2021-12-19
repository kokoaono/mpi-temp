import React, { useState, useEffect } from "react";
import { getData } from "./Lsfunctions";

const header = 'Record Fridge/Freezer Temperature'
const date = new Date();

const RecordFridgeTemp = () => {
  //main array of object state
  const [fridges, setFridges] = useState(getData());


  //input field states
  const [state, setState] = useState({
    id: fridges.length + 1,
    fridgeName: '',
    fridgeTemp: '',
    note: '',
    createdAt: Date()
  });

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  };

  //form submit event
  const handleSubmit = event => {
    event.preventDefault();
    setFridges([...fridges, state]);
  };

  //delete individual temp by its id
  const deleteFridge = (id) => {
    const filteredFridges = fridges.filter((fridge) => {
      return fridge.id !== id
    })
    setFridges(filteredFridges)
  };

  // SAVING DATA TO LS
  useEffect(() => {
    localStorage.setItem('fridges', JSON.stringify(fridges))
  }, [fridges])


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>{header}</h3>
        <input
          for='fridgename'
          name="fridgeName"
          placeholder="Fridge Name/No"
          type="text"
          value={state.fridgeName}
          onChange={handleChange}
        >
        </input>
        <input
          placeholder="Temp"
          type='number'
          name='fridgeTemp'
          value={state.fridgeTemp}
          onChange={handleChange}
        >
        </input>
        <label>Note</label>
        <input
          type="text"
          name="note"
          value={state.note}
          onChange={handleChange}
        >
        </input>
        <button type="submit">Add</button>
      </form>
      {/* <div>
        {fridges.length > 0 &&
          <View fridges={fridges} deleteFridge={deleteFridge} />
        }
      </div> */}
      <button className="ui button" onClick={() => setFridges([])}>Delete All</button>
    </div >
  )
};


export default RecordFridgeTemp;