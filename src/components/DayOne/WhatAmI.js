import React from 'react'
import SearchIcon from './SearchIcon'
function WhatAmI() {
  return (
    <section className="whatami">
      <h1>What Am I?</h1>
      <div className="bottom-container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          dolore illum ipsa nobis nulla voluptates maiores sed quia? Adipisci
          ipsum magni maxime soluta expedita ratione quam repellat iste quod
          architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Corporis itaque aperiam accusantium fugiat ipsam ratione eum labore
          assumenda placeat cum!
        </p>
        <button className="search-btn">
          <SearchIcon />
          Search
        </button>
      </div>
    </section>
  )
}

export default WhatAmI
