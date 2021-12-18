import React, { useRef, useReducer } from 'react';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";

const ACTIONS = {
  ADD: 'add',
  DELETE_ALL: 'delete-all'
}

const FoodTempForm = () => {
  const inputRef = useRef();
  const [items, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case ACTIONS.ADD:
        return [
          ...state,
          {
            id: Date.now(),
            temp: action.temp
          }
        ];
      case ACTIONS.DELETE_ALL:
        return [];
      default:
        return state
    }
  }, [])
  console.log("result", items);
  // const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: 'add',
      temp: inputRef.current.value
    });
    inputRef.current.value = '';
  };

  const handleDeleteAll = () => {
    dispatch({
      type: 'delete-all'
    })
  };

  return (
    <div className='ui grid container'>
      <form onSubmit={handleSubmit}>
        <select ref={inputRef}>
          <option defaultValue="Protein">Select protein</option>
          <option value="Beef">Beef</option>
          <option value="Chicken">Chicken</option>
          <option value="Lamb">Lamb</option>
          <option value="Pork">Pork</option>
        </select>
        <label>Food Temp</label>
        <input
          type="number"
          ref={inputRef}
        />
      </form>
      <button onClick={handleDeleteAll}>Clear</button>
      {/* <DatePicker
        dateFormat="dd/MM/yyyy h:mm aa"
        timeInputLabel='Time:'
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      /> */}
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.temp}</li>
        ))}
      </ul>
    </div >
  )
};

export default FoodTempForm;