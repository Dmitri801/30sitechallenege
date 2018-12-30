import React from 'react'
import FlowerSVG from '../UI/FlowerSVG'
function Bio() {
  return (
    <section className="event-invite_story">
      <div className="story-title">
        <h1>Our Story</h1>
        <div className="svg">
          <FlowerSVG />
        </div>
      </div>
      <div className="story-bio">
        <div className="bio julie">
          <img
            src="https://images.unsplash.com/photo-1523995053300-fde04003adc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=641&q=80"
            alt="Julie"
          />
          <h2>Julie's Story</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
            corrupti modi asperiores minima delectus facere inventore laborum
            qui adipisci enim!
          </p>
        </div>
        <div className="bio david">
          <img
            src="https://images.unsplash.com/photo-1518503620262-8341dfd1307c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            alt="David"
          />
          <h2>David's Story</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
            corrupti modi asperiores minima delectus facere inventore laborum
            qui adipisci enim!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Bio
