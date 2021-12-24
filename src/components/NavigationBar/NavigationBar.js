import React from 'react';
import "./NavigationBar.css"

const NavigationBar = () => (
  <div className='navbar'>
    <a href='/' to='/'>Home</a>
    <a href='fridgelist'>Fridge List</a>
    <a href='search'>Search</a>
    <a href='login'>LOG IN</a>
    <div className='dropdown'>
      <button className='dropbtn'>Record
        <i className='fa fa-caret-down'></i>
      </button>
      <div className='dropdown-content'>
        <a href='fridgetemp'>Fridge/Freezer</a>
        <a href='foodtemp'>Food</a>
      </div>
    </div>
  </div>
);

export default NavigationBar;