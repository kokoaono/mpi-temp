import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="ui clearing segment">
      <h1>Daily temperature Record</h1>
      <Link className="ui left floated header" to='/'>Home</Link>
      <Link className="ui left floated header" to='temp'>Record</Link>
      <Link className="ui left floated header" to='search'>Search</Link>
      <Link className="ui right floated header" to='login'>LOG IN</Link>
    </header>
  )
};

export default Header;