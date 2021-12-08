import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecordForm from './components/Recordform';
import Home from './components/home/Home';
import Header from './components/Header';


const App = () => {
  return (
    <div className='app'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='records' element={<RecordForm />} />
        </Routes>
      </Router>
    </div>
  )
};

export default App;