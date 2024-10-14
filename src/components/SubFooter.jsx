import React from 'react'
import AboutImg from '../images/about image.png'

const SubFooter = () => {
  return (
    <aside className='sub-footer'>
        <div className='sub-footer-container'>
            <div className='sub-footer-left-content'>
                  <h2 className='sub-footer-title'>Little Lemon</h2>
                  <h3 className='sub-footer-chicago'>Chicago</h3>
                  <p className='sub-footer-text'>We are a family owned Mediterranean restuarant, focused on traditional recipes served with a modern twist.</p>
            </div>
            <img src={AboutImg} alt="" className='sub-footer-img' />
        </div>
    </aside>
  )
}

export default SubFooter