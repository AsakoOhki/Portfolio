import React from 'react'
import { Link } from 'react-scroll';


const Navber = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link smooth={true} to="home" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
             <Link smooth={true} to="about" offset={-110} className="nav-link" href="#">About me</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="education" offset={-110} className="nav-link" href="#">Education</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="portfolio" offset={-110} className="nav-link" href="#">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="contacts" offset={-110} className="nav-link" href="#">Contacts</Link>
            </li>
          </ul>
        </div>
    </nav>
  )
}

export default Navber
