import React from 'react';
import { useState } from 'react';
import "./navbar.css";
import {Link} from "react-scroll";
import logo from "../../assets/logo.png";
import { RiContactsLine } from "react-icons/ri";
import {RxHamburgerMenu} from 'react-icons/rx'

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)

  return (
      <nav className='navbar' id='navbarId'>
        <img src={logo} alt='logo' className='logo'></img>
        <div className='desktopMenu'>
          <Link  activeClass='active' to='intro' spy={3} smooth={true} offset={-30} duration={500} className='desktopMenuListItem' >Home</Link>
          <Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-30} duration={500}  className='desktopMenuListItem' >About</Link>
          <Link  activeClass='active' to='works' spy={true} smooth={true} offset={-30} duration={500}  className='desktopMenuListItem' >Portfolio</Link>
          <Link  activeClass='active' to='experience' spy={true} smooth={true} offset={-30} duration={500}  className='desktopMenuListItem' >Experience</Link>
          <Link  activeClass='active' to='education' spy={true} smooth={true} offset={-30} duration={500}  className='desktopMenuListItem' >Education</Link>
        </div>
        
        <button className='desktopMenuBtn' onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
        }}>
          <RiContactsLine className='contactLogo'/>Contact Me
        </button>

        <RxHamburgerMenu className='mobMenu' onClick={()=> setShowMenu(!showMenu)}/>
        <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
          <Link  activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}  className='listItem' onClick={()=> setShowMenu(false)}>About</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500}  className='listItem' onClick={()=> setShowMenu(false)}>Portfolio</Link>
          <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-50} duration={500}  className='listItem' onClick={()=> setShowMenu(false)}>Experience</Link>
          <Link activeClass='active' to='education' spy={true} smooth={true} offset={-50} duration={500}  className='listItem' onClick={()=> setShowMenu(false)}>Education</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500}  className='listItem' onClick={()=> setShowMenu(false)}>Contact</Link>
        </div>

      </nav>
  )
}

export default Navbar
