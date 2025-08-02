
import React from 'react';
import { Navigate } from 'react-router-dom';   // <-- add this
import { useAuth } from '../context/AuthContext'; 


export default function ProtectedRoute({ children, allowedRoles = [] }) {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;

  if (allowedRoles.length && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" />; // or a "Not Authorized" page
  }

  return children;
}
