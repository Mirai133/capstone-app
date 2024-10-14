import React from 'react'
import restauranfood from '../images/restauranfood.jpg'

const Header = () => {
  return (
    <header className='header'>
        <div className='header-container'>
            <h1 className='header-title'>Little Lemon</h1>
            <h3 className='header-sub-title'>Chikago</h3>
            <p className='header-text'>We are a family owned Mediterranean<br/> restuarant, focused on traditional recipes <br/> served with a modern twist.</p>
            <button className='header-btn'>Reserve a Table</button>
        </div>
        <img src={restauranfood } alt="" className='header-img' />
    </header>
  )
}

export default Header