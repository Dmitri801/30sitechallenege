import React from 'react'
import Hamburger from './MobileMenu/Hamburger'
function Header({ toggleNavBar }) {
  return (
    <header className="navbar">
      <h3 className="nav-brand">Dmitriy's Lair</h3>
      <Hamburger toggleNavBar={toggleNavBar} />
      <ul className="navbar-nav">
        <li>
          <a href="#!">Who</a>
        </li>
        <li>
          <a href="#!">What</a>
        </li>
        <li>
          <a href="#!">Where</a>
        </li>
      </ul>
    </header>
  )
}

export default Header
