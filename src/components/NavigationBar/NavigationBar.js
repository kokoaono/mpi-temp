import React from 'react';
// import "./NavigationBar.css"

const NavigationBar = () => (
  <div className='navbar'>
    <a href='/' to='/'>Home</a>
    <a href='fridgelists'>Fridge List</a>
    <a href='search'>Search</a>
    <a href='login'>LOG IN</a>
    <div className='dropdown'>
      <button className='dropbtn'>Record
        <i className='fa fa-caret-down'></i>
      </button>
      <div className='dropdown-content'>
        <a href='temp'>Fridge/Freezer</a>
        <a href='food'>Food</a>
      </div>
    </div>
    {/* <a href='temp'>Record</a> */}

  </div>
);

export default NavigationBar;