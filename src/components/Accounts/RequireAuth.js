import React from 'react'
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from '../Context/AuthContext';


export const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();

  return (
    auth
      ? <Outlet />
      : <Navigate to='login' state={{ from: location }} replace />
  )
};