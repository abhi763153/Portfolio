import React from 'react'
import "./About.css"
import me_about from "../../assests/me-about.jpg"
import { MdOutlineWorkOutline } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { AiOutlineProject } from "react-icons/ai";

function About() {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_image_con">
          <div className="img_bg">
            <img src={me_about} className="about_image"  alt="" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_sub_container">
              <div className="about_experience">
                <span><MdOutlineWorkOutline /></span>
                <h4>Experience</h4>
                <p>3+ Years working</p>
              </div>

              <div className="about_client">
                <span><BsPeople /></span>
                <h4>Clients</h4>
                <p>800+ woldwide</p>
              </div>

              <div className="about_projects">
                <span><AiOutlineProject /></span>
                <h4>Projects</h4>
                <p>80+ completed</p>
              </div>
          </div>
          <div className="about_text_container">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis sunt asperiores repudiandae
               recusandae! Inventore esse maiores cumque, corrupti ex aspernatur quisquam nam, magni earum 
               voluptate labore libero obcaecati consectetur impedit.</p>

               <button className='btn btn-primary'>Let's Talk</button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About