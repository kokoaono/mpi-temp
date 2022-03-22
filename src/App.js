import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Form } from './components/Accounts/Form';
import Home from './components/home/Home';
import Login from './components/Accounts/Login';
import { NotFound } from './components/NotFound';
import LandingPage from './components/home/LandingPage';
import ForgotPwd from './components/ForgotPwd';
import api from './api/items'
// import { RequireAuth } from './components/Accounts/RequireAuth';



const App = () => {
  const [items, setItems] = useState([]);

  api.get('/items').then(res => {
    console.log(res.data);
    setItems(res.data)
  }, [])

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     try {
  //       const response = await api.get('/items');
  //       setItems(response.data)
  //     } catch (err) {
  //       if (err.response) {
  //         //Not in the 200 response range
  //         console.log(err.response.data);
  //         console.log(err.response.status);
  //         console.log(err.response.headers);
  //       } else {
  //         console.log(`Error: ${err.message}`);
  //       }
  //     }
  //   }
  //   fetchItems()
  // }, [])

  return (
    <Fragment>
      <Router>
        <Routes>
          {/* public routes */}
          <Route path='/' element={<LandingPage />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Form />} />
          <Route path='requestpassword' element={<ForgotPwd />} />
          {/* protected routes */}
          {/* <Route element={<RequireAuth />}> */}
          <Route path='/home' element={<Home />} />
          {/* </Route> */}

          {/*   catch all */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </Fragment >
  )
};

export default App;