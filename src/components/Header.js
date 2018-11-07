import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

const Header = props => {
  const links = props.isLoggedIn ? (
    <nav className="nav">
      <Link className="header-link" to="/">
        Home
      </Link>
      <Link className="header-link" to="/all">
        My List
      </Link>
      <Link className="header-link" to="/users/profile">
        Profile
      </Link>
      <Link className="header-link" to="/users/logout">
        Logout
      </Link>
    </nav>
  ) : (
    <nav className="nav">
      <Link className="header-link" to="/">
        Home
      </Link>
      <Link className="header-link" to="/users/login">
        Log In
      </Link>
      <Link className="header-link" to="/users/signup">
        Sign Up
      </Link>
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
