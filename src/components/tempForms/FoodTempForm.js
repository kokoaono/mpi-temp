import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"

const FoodTempForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [foodTemp, setFoodTemp] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setFoodTemp(e.target.vale)
    console.log(e.target.value);
  };


  return (
    <div className='ui grid container'>
      <form>
        <select>
          <option defaultValue="Protein">Select protein</option>
          <option value="Beef">Beef</option>
          <option value="Chicken">Chicken</option>
          <option value="Lamb">Lamb</option>
          <option value="Pork">Pork</option>
        </select>
        <label>Food Temp</label>
        <input
          type="number"
          value={foodTemp}
          onChange={handleChange}
        >
        </input>
      </form>
      <DatePicker
        dateFormat="dd/MM/yyyy h:mm aa"
        timeInputLabel='Time:'
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div >
  )
};

export default FoodTempForm;