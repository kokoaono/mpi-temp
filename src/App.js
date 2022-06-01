import React, { Fragment } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Form } from "./components/Accounts/Form";
import Home from "./components/home/Home";
import Login from "./components/Accounts/Login";
import { NotFound } from "./components/NotFound";
import LandingPage from "./components/home/LandingPage";
import ForgotPwd from "./components/ForgotPwd";
import { FoodApp } from "./components/Food/FoodApp";
import { FridgeApp } from "./components/CoolRoom/FridgeApp";
// import { RequireAuth } from './components/Accounts/RequireAuth';

//Create queryClient
const queryClient = new QueryClient();

const App = () => (
  <Fragment>
    <Router>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <Routes>
          {/* public routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Form />} />
          <Route path="requestpassword" element={<ForgotPwd />} />
          {/* protected routes */}
          {/* <Route element={<RequireAuth />}> */}
          <Route path="/home" element={<Home />} />
          <Route path="/items" element={<FoodApp />} />
          <Route path="/fridges" element={<FridgeApp />} />
          {/* </Route> */}
          {/*   catch all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </Router>
  </Fragment>
);

export default App;
