import React from 'react'
const meImg = require('../../images/me.jpg')
function Showcase({ navBarOpen, mobile }) {
  return (
    <section
      style={
        navBarOpen && mobile ? { marginTop: '200px', transition: '0.5s' } : {}
      }
      className="showcase-container"
    >
      <h1>Who Am I?</h1>
      <img className="me-img" src={meImg} alt="Me" />
      <h1>I'm a web developer.</h1>
    </section>
  )
}

export default Showcase
