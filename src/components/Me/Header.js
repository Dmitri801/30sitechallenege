import React from 'react'
import Hamburger from './MobileMenu/Hamburger'
import { Link } from 'react-scroll'
function Header({ toggleNavBar }) {
  return (
    <header className="me-theme-header">
      <h3 className="nav-brand">Dmitriy's Lair</h3>
      <Hamburger toggleNavBar={toggleNavBar} />
      <ul className="navbar-nav">
        <li>
          <Link to="who" smooth={true}>
            Who
          </Link>
        </li>
        <li>
          <Link to="what" smooth={true}>
            What
          </Link>
        </li>
        <li>
          <Link to="where" smooth={true}>
            Where
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
