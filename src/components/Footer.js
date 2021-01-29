import React, { useState } from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  const [click,setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
    if (click) {
      return (window.location = "https://www.instagram.com/ltraincapital/")
    }
  }

  return (
    <div className='footer-container'>
      <section className='footer-connect'>
        <p className='footer-connect-heading'>
          Interested in learning more
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Connect</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/team'>Team</Link>
            <Link to='/investors'>Investors</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/contact'>Contact</Link>
            <Link to='/tenant'>Tenant Portal</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              L Train Capital
            </Link>
          </div>
          <small class='website-rights'>Copyright © 2020 L Train Capital | All Rights Reserved</small>
          <div class='social-icons'>
            <Button
              class='social-icon-link instagram'
              onClick={handleClick}
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
