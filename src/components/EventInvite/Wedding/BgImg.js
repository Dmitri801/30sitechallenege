import React from 'react'

function BgImg() {
  return (
    <div
      style={{
        background: `url(https://images.unsplash.com/photo-1494052140170-40523e3a90d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80)`,
        height: '800px',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'none',
        backgroundAttachment: 'fixed',
        transform: 'translateZ(0)',
      }}
    />
  )
}

export default BgImg
