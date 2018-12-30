import React from 'react'
import { Link } from 'gatsby'
function Header({ pageId }) {
  return (
    <header className="event-invite-header">
      <ul className="event-invite_navbar-nav">
        <li>
          <Link className={pageId === '' ? 'active' : ''} to="/event-invite/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={pageId === 'story' ? 'active' : ''}
            to="/event-invite/story"
          >
            Our Story
          </Link>
        </li>
        <li>
          <Link
            className={pageId === 'wedding' ? 'active' : ''}
            to="/event-invite/wedding"
          >
            The Wedding
          </Link>
        </li>
        <li>
          <Link
            className={pageId === 'party' ? 'active' : ''}
            to="/event-invite/party"
          >
            Wedding Party
          </Link>
        </li>
        <li>
          <Link
            className={pageId === 'details' ? 'active' : ''}
            to="/event-invite/details"
          >
            Details
          </Link>
        </li>
      </ul>

      <Link className="register-btn" to="/event-invite/register">
        Register
      </Link>
    </header>
  )
}

export default Header
