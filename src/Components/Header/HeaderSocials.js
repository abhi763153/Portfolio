import React from 'react'
import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {SiLeetcode} from "react-icons/si";
import {SiCodechef} from "react-icons/si"


function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com" target="_blank"><BsGithub /></a>
        <a href="https://leetcode.com" target="_blank"><SiLeetcode /></a>
        <a href="" target="_blank"><SiCodechef /></a>


    </div>
  )
}

export default HeaderSocials