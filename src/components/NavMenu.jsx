import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const NavMenu = () => {
  const { user } = useAuth()

  return (
    <div className="nav-menu">
      <div className="nav-menu__item">
        <Link to="/">Home</Link>
      </div>
      <div className="nav-menu__item">
        <Link to="posts">Posts</Link>
      </div>
      <div className="nav-menu__item">
        <Link to="login">Login</Link>
      </div>
    </div>
  )
}

export default NavMenu