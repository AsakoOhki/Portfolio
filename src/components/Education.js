import React from 'react';

const Education = () => {
  return (
    <div id="education" className="education">
      <div className="d-flex justify-content-center my-5">
        <h1>Education and Work Experience</h1>
      </div>
      <div className="container education-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2019-2020</h3>
            <p>Cornerstone International Community College of Canada, Vancouver Canada</p>
            <p>Diploma of Web Development</p>
            <p>HTML, CSS, JavaScript, Node.js, React</p>
          </div>
        </div>
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2015-2019</h3>
            <p>UC Card Tokyo, Japan</p>
            <p>Sales Assistant</p>
          </div>
        </div>
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2011-2015</h3>
            <p>Rikkyo University Tokyo, Japan</p>
            <p>B.A.：Bachelor of Sociology</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education;
