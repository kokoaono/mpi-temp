import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { auth } = useAuth();
  const { loading } = auth
  const navigate = useNavigate()

  if (loading) {
    return (
      <Route
        {...rest}
        render={() => {
          return <p>Loading...</p>
        }}
      />
    )
  }
  return (
    <Route
      {...rest}
      render={routeProps => {
        return auth.data ? (
          <Component {...routeProps} />
        ) : (
          navigate('/login')
        )
      }}
    />
  )
};
