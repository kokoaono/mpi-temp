import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  return auth ? children : <Navigate to={"/home"} />

  // const { loading } = auth

  // if (loading) {
  //   return (
  //     <Route
  //       {...rest}
  //       render={() => {
  //         return <p>Loading...</p>
  //       }}
  //     />
  //   )
  // }
  // return (
  //   <Route
  //     {...rest}
  //     render={routeProps => {
  //       return auth.data ? (
  //         <Component {...routeProps} />
  //       ) : (
  //         navigate('/login')
  //       )
  //     }}
  //   />
  // )
};
