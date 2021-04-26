import React from 'react'
import Typed from 'react-typed'

const Header = () => {
  return (
    <div id="home" className="header-wrapper">
      <div className="main-info">
        <canvas></canvas>
        <h1>ASAKO OHKI</h1>
        <Typed
          className="typed-text"
          strings={["I'm a React Developer"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">Contact Me</a>
      </div>
    </div>
  )
}

export default Header
