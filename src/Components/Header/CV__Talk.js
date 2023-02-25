import React from 'react';
import CV from "../../assests/cv.pdf";

function CV__Talk() {
  return (
    <div className='cv_talk'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CV__Talk;