import React from 'react'
import logo from '../images/logo.svg'
import hamburger from "../images/🦆 icon _hamburger menu.svg"
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [hamburgerClicked,setHamburgerClicked] = useState(false);

  const clickNav = () => {
    setHamburgerClicked(!hamburgerClicked)
  }

  return (
    <nav className='navbar'>
        <div className='nav-container'>
            <Link to="/home"><img src={logo} alt="" /></Link>
            <ul className="nav-links">
              <li><Link to="/home" className='nav-link'>Home</Link></li> 
              <li><span className='nav-link'>About</span></li> 
              <li><span className='nav-link'>Menu</span></li> 
              <li><span className='nav-link'>Reservation</span></li> 
              <li><Link to="/form" className='order-online'>Order Online</Link></li> 
            </ul>
            <img src={hamburger} alt="" className='hamburger-icon' onClick={clickNav}/>
        </div>

        <div className={`responsive-nav ${hamburgerClicked ? "" : "none"}`}>
            <button className='close-btn' onClick={clickNav}>Close</button>
            <ul className="nav-responsive-links">
              <li><Link to="/home" className='nav-link'>Home</Link></li> 
              <li><span className='nav-link'>About</span></li> 
              <li><span className='nav-link'>Menu</span></li> 
              <li><span className='nav-link'>Reservation</span></li> 
              <li><Link to="/form" className='order-online'>Order Online</Link></li> 
            </ul>
        </div>

    </nav>
  )
}

export default Navbar