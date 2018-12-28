import React from 'react'

function Where() {
  return (
    <section id="where" className="where-container">
      <h1>Where To Find Me?</h1>
      <div className="gallery">
        <div className="thumbnail one">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            accusantium alias necessitatibus in nobis rerum.
          </p>
          <img
            src="https://images.unsplash.com/photo-1535025287458-e3badca98021?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80"
            alt="mountains"
          />
        </div>
        <div className="thumbnail two">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            accusantium alias necessitatibus in nobis rerum.
          </p>
          <img
            src="https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
            alt="coffee shop"
          />
        </div>
        <div className="thumbnail three">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            accusantium alias necessitatibus in nobis rerum.
          </p>
          <img
            src="https://images.unsplash.com/photo-1524103416206-a67f05a8154b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="studio"
          />
        </div>
      </div>
    </section>
  )
}

export default Where
