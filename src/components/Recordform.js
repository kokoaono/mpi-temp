import React, { useState } from "react";

const RecordForm = () => {
  const [temp, setTemp] = useState({
    fridge1: '',
    fridge2: '',
    fridge3: '',
    fridge4: '',
    freezer: ''
  });

  const [note, setNote] = useState({
    note1: '',
    note2: '',
    note3: '',
    note4: '',
    note5: ''
  });

  const handleChange = e => {
    e.preventDefault();

    setTemp({
      ...temp,
      [e.target.name]: e.target.value,
    })
  };

  const handleNoteChange = e => {
    e.preventDefault();

    setNote({
      ...note,
      [e.target.name]: e.target.value
    })
    console.log(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    alert('submitted')
  };

  return (
    <div className="ui three column grid">
      <div className="row">
        <form onSubmit={handleSubmit}>
          Fridge 1:
          <input
            type="number"
            name="fridge1"
            value={temp.fridge1}
            placeholder="Temp"
            onChange={handleChange}>
          </input>
          <textarea
            placeholder="Add a note (optional)"
            name="note1"
            value={note.note1}
            onChange={handleNoteChange}
          >
          </textarea>
          Fridge 2:
          <input
            type="number"
            name="fridge2"
            value={temp.fridge2}
            placeholder="Temp"
            onChange={handleChange}>
          </input>
          <textarea
            name="note2"
            value={note.note2}
            onChange={handleNoteChange}
          >
          </textarea>
          Fridge 3:
          <input
            type="number"
            name="fridge3"
            value={temp.fridge3}
            placeholder="Temp"
            onChange={handleChange}>
          </input>
          <textarea
            name="note3"
            value={note.note3}
            onChange={handleNoteChange}
          >
          </textarea>
          Fridge 4:
          <input
            type="number"
            name="fridge4"
            value={temp.fridge4}
            placeholder="Temp"
            onChange={handleChange}>
          </input>
          <textarea
            name="note4"
            value={note.note4}
            onChange={handleNoteChange}
          >
          </textarea>
          Freezer 1:
          <input
            type="number"
            name="freezer"
            value={temp.freezer}
            placeholder="Temp"
            onChange={handleChange}>
          </input>
          <textarea
            name="note5"
            value={note.note5}
            onChange={handleNoteChange}
          >
          </textarea>
        </form>
        <button className="ui button">Save</button>
      </div>
    </div >
  )
};

export default RecordForm;