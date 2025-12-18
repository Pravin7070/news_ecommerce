import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
  const isLoggedIn = Boolean(localStorage.getItem('email'))
  return isLoggedIn ? children : <Navigate to="/login" replace />
}
