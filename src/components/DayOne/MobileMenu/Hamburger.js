import React from 'react'

function Hamburger({ toggleNavBar }) {
  return (
    <div onClick={toggleNavBar} className="hamburger-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        style={{ enableBackground: 'new 0 0 40 40', fill: '#000000' }}
      >
        <g>
          {' '}
          <rect
            x="1.5"
            y="18.5"
            style={{ fill: '#C2E8FF' }}
            width="37"
            height="3"
          />{' '}
          <g>
            {' '}
            <path
              style={{ fill: '#2028b3' }}
              d="M38,19v2H2v-2H38 M39,18H1v4h38V18L39,18z"
            />{' '}
          </g>
        </g>
        <g>
          {' '}
          <rect
            x="1.5"
            y="8.5"
            style={{ fill: '#C2E8FF' }}
            width="37"
            height="3"
          />{' '}
          <g>
            {' '}
            <path
              style={{ fill: '#2028b3' }}
              d="M38,9v2H2V9H38 M39,8H1v4h38V8L39,8z"
            />{' '}
          </g>
        </g>
        <g>
          {' '}
          <rect
            x="1.5"
            y="28.5"
            style={{ fill: '#C2E8FF' }}
            width="37"
            height="3"
          />{' '}
          <g>
            {' '}
            <path
              style={{ fill: '#2028b3' }}
              d="M38,29v2H2v-2H38 M39,28H1v4h38V28L39,28z"
            />{' '}
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Hamburger
