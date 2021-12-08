import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Daily temperature Record</h1>
      <Link to='search'>Search</Link>
    </header>
  )
};

export default Header;