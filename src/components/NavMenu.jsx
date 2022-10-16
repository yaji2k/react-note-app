import React from 'react'
import { Link } from 'react-router-dom'

const NavMenu = () => {
  return (
    <div className="nav-menu">
      <div className="nav-menu__item">
        <Link to="/">Home</Link>
      </div>
      <div className="nav-menu__item">
        <Link to="posts">Posts</Link>
      </div>
    </div>
  )
}

export default NavMenu