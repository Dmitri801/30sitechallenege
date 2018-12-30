import React from 'react'
import { Link } from 'gatsby'
function Home() {
  return (
    <div style={{ height: '100%', width: '100%', position: 'relative' }}>
      <div className="parallex-bg" />
      <div className="event-invite_content-container">
        <h3>- Julie and David -</h3>
        <h1>We're Engaged</h1>
        <p>Sep 01, 2023, 7:00PM | Bright Marks Sanctuary</p>
        <Link className="rsvp-btn" to="/event-invite/register">
          RSVP
        </Link>
      </div>
    </div>
  )
}

export default Home
