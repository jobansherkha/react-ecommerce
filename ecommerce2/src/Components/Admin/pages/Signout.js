import React from 'react'
import './Signout.css'
import { Link } from 'react-router-dom'

export const Signout = () => {
  return (
    <div className="container">
    <h2>Please log in or sign up to continue</h2>
    <div className="buttons">
    <Link to="/user/login" className="login-button">Log In</Link>
      <Link to="/user/adduser" className="signup-button">Sign Up</Link>
    </div>
  </div>
  )
}
