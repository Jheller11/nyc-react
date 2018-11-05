import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

const Header = props => {
  const links = props.isLoggedIn ? (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/all">My List</Link>
      <Link to="/users/profile">Profile</Link>
    </nav>
  ) : (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/users/login">Log In</Link>
      <Link to="/users/signup">Sign Up</Link>
    </nav>
  )
  return (
    <header>
      <h1>NYC List</h1>
      {links}
    </header>
  )
}

export default Header
