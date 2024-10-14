import React from 'react'
import FooterImg from '../images/Asset 9@4x.png'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-container'>
            <img src={FooterImg} alt=""  className='footer-img'/>
            <div className='footer-card'>
                <h3 className='footer-title'>Navigation</h3>
                    <span className='footer-list-item'>Home</span>
                    <span className='footer-list-item'>About</span>
                    <span className='footer-list-item'>Menu</span>
                    <span className='footer-list-item'>Reservations</span>
                    <span className='footer-list-item'>Order online</span>
                    <span className='footer-list-item'>Login</span>
            </div>
            <div className='footer-card'>
                 <h3 className='footer-title'>Contact</h3>
                   <span className='footer-list-item'>Address</span>
                   <span className='footer-list-item'>Phone number</span>
                   <span className='footer-list-item'>Email</span>
            </div>
            <div className='footer-card'>
                 <h3 className='footer-title'>Social media links</h3>
                   <span className='footer-list-item'>Facebook</span>
                   <span className='footer-list-item'>Instagram</span>
                   <span className='footer-list-item'>Whatsapp</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer