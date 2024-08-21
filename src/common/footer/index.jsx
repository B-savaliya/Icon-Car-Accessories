import React from 'react';
import './footer.scss';
import footerLogoImg from '../../assets/logo/header-logo.jpg';

function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='footer-logo-icon'>
          <img src={footerLogoImg} />
        </div>
      </div>
    </footer>
  )
}

export default Footer