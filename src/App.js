import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home/Home';
import Header from './components/Header';
import FoodTempForm from './components/tempForms/FoodTempForm';
import FridgeTemp from './components/FridgeTemp';
import FridgeList from './components/FridgeList';

// const getData = () => {
//   const data = localStorage.getItem('fridges');
//   if (data) {
//     return JSON.parse(data);
//   } else {
//     return []
//   }
// };
// console.log(getData());
const App = () => {
  return (
    <Fragment>
      <FridgeList />
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='foodtemp' element={<FoodTempForm />} />
          <Route path='temp' element={<FridgeTemp />} />
        </Routes>
      </Router>
    </Fragment>
  )
};

export default App;