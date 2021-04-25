import React from 'react'
import asako from '../images/me.jpg'

const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={asako} alt="Asako"/>
          </div>
          
        </div>
        <div className="col-lg col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum blanditiis, reiciendis sequi eligendi minus, vitae possimus vero repudiandae voluptatibus quasi vel dicta sint at pariatur ullam excepturi sapiente inventore modi.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
