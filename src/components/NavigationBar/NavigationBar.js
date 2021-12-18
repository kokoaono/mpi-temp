import React from 'react';
import { Link } from 'react-router-dom';
import "./NavigationBar.css"

const NavigationBar = () => (
  <div className='topnav'>
    <Link className="ui left floated header" to='/'>Home</Link>
    <Link className="ui left floated header" to='fridgelists'>Fridge List</Link>
    <Link className="ui left floated header" to='temp'>Record</Link>
    <Link className="ui left floated header" to='search'>Search</Link>
    <Link className="ui right floated header" to='login'>LOG IN</Link>
  </div>
);

export default NavigationBar;