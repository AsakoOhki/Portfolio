import React from 'react'
import asako from '../images/me.jpg'

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={asako} alt="Asako"/>
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
            I'm an enthusiastic, responsible, hard working and team player. I'm able to work under pressure and adhere to strict deadlines.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
