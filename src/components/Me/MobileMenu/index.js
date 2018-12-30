import React, { Component } from 'react'
import { Link } from 'react-scroll'
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
            <Link
              style={
                navBarOpen && mobile ? { opacity: 1, transition: 'all 2s' } : {}
              }
              to="who"
              smooth={true}
            >
              Who
            </Link>
          </li>
          <li>
            <Link
              style={
                navBarOpen && mobile ? { opacity: 1, transition: 'all 2s' } : {}
              }
              to="what"
              smooth={true}
            >
              What
            </Link>
          </li>
          <li>
            <Link
              style={
                navBarOpen && mobile ? { opacity: 1, transition: 'all 1s' } : {}
              }
              to="where"
              smooth={true}
            >
              Where
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Menu
