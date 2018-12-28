import React, { Component } from 'react'

class Menu extends Component {
  render() {
    const { navBarOpen, mobile } = this.props
    return (
      <div>
        <ul
          style={
            navBarOpen && mobile
              ? {
                  height: '200px',

                  transition: '0.5s',
                }
              : { transition: '0.5s' }
          }
          className="side-nav"
        >
          <li>
            <a
              style={
                navBarOpen && mobile ? { opacity: 1, transition: 'all 2s' } : {}
              }
              href="#!"
            >
              Who
            </a>
          </li>
          <li>
            <a
              style={
                navBarOpen && mobile ? { opacity: 1, transition: 'all 2s' } : {}
              }
              href="#!"
            >
              What
            </a>
          </li>
          <li>
            <a
              style={
                navBarOpen && mobile ? { opacity: 1, transition: 'all 1s' } : {}
              }
              href="#!"
            >
              Where
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Menu
