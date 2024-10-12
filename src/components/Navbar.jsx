import React from 'react'
import logo from '../images/logo.svg'
import hamburger from "../images/🦆 icon _hamburger menu.svg"
import { useState } from 'react'

const Navbar = () => {

  const [hamburgerClicked,setHamburgerClicked] = useState(false);

  const clickNav = () => {
    setHamburgerClicked(!hamburgerClicked)
  }

  return (
    <nav className='navbar'>
        <div className='nav-container'>
            <img src={logo} alt="" />
            <ul className="nav-links">
              <li><span className='nav-link'>Home</span></li> 
              <li><span className='nav-link'>About</span></li> 
              <li><span className='nav-link'>Menu</span></li> 
              <li><span className='nav-link'>Reservation</span></li> 
              <li><span className='order-online'>Order Online</span></li> 
            </ul>
            <img src={hamburger} alt="" className='hamburger-icon' onClick={clickNav}/>
        </div>

        <div className={`responsive-nav ${hamburgerClicked ? "" : "none"}`}>
            <button className='close-btn' onClick={clickNav}>Close</button>
            <ul className="nav-responsive-links">
              <li><span className='nav-link'>Home</span></li> 
              <li><span className='nav-link'>About</span></li> 
              <li><span className='nav-link'>Menu</span></li> 
              <li><span className='nav-link'>Reservation</span></li> 
              <li><span className='order-online'>Order Online</span></li> 
            </ul>
        </div>

    </nav>
  )
}

export default Navbar