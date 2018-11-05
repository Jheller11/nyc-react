import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>NYC List</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/all">My List</Link>
        <Link to="/users/login">Log In</Link>
        <Link to="/users/signup">Sign Up</Link>
        <Link to="/users/profile">Profile</Link>
      </nav>
    </header>
  )
}

export default Header
