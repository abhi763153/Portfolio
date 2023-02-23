import React from 'react'
import './Header.css'
import Cv__Talk from "./Cv__Talk";
import ME from "../../assests/me2.png";
import HeaderSocials from "./HeaderSocials"

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Abhishek Kamti</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <Cv__Talk />

        <div className="me">
          <img src={ME} alt="My Profile" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

        <HeaderSocials />
      </div>
    </header>
  )
}

export default Header