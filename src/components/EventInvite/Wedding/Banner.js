import React from 'react'
import FlowerSVG from '../UI/FlowerSVG'
function Banner() {
  return (
    <div className="event-invite_wedding-banner">
      <div className="head">
        <h1>Our Big Day</h1>
        <FlowerSVG />
      </div>
      <div className="when">
        <p className="title">When</p>
        <p className="content">Sep 01, 2023, 7:00 PM</p>
      </div>
      <div className="where">
        <p className="title">Where</p>

        <p className="content">
          <span style={{ display: 'block' }}>Bright Mark's Sanctuary</span>
          500 Terry A Francois Blvd, Salt Lake City, UT 84121, USA
        </p>
      </div>
      <button className="rsvp-btn">RSVP</button>
    </div>
  )
}

export default Banner
