// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function IsLogin({ children }) {
  let user = localStorage.getItem('token');
  if (user) {
    return <Navigate to='/home' replace={true} />;
  }
  return children;
}
