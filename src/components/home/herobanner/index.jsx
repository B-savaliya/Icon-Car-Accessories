import React from 'react';
import './herobanner.scss';
import HeroBannerImg from '../../../assets/images/herobanner_category_bg.jpg'

function HeroBanner() {
    return (
        <div>
            <div className='herobanner-img'>
                <img src={HeroBannerImg} alt="hero-banner" />
            </div>
        </div>
  )
}

export default HeroBanner