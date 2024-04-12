import React from 'react'
import './MobileNav.scss'
import Input from "../Input/Input";

function MobileNav({onClose }) {
  return (
    <div className='mobile-nav'>
        <div className="mobile-nav-top">
            <div className='mobile-nav-top-logo'>
            <img src="/icons/logo.png" alt="" />
            </div>
            <img className='close-btn' onClick={onClose} src="/icons/arrow-close.svg" alt="" />
        </div>
        <div className="mobile-nav-search">
        <Input inputType="navInput" />
        </div>
        <div className="mobile-nav-links">
          <div className="mobile-nav-links-item">
            <a href="/engagement-rings">Engagement Rings</a>
          </div>
          <div className="mobile-nav-links-item">
            <a href="">Wedding Bands</a>
          </div>
          <div className="mobile-nav-links-item">
            <a href="">Diamonds</a>
          </div>
          <div className="mobile-nav-links-item">
            <a href="/jewelry">Jewelry</a>
          </div>
          <div className="mobile-nav-links-item">
            <a href="">About</a>
          </div>
        </div>
        <div className="mobile-nav-bottom">

          <div className="mobile-nav-bottom-item">
          <div className="mobile-nav-bottom-item-img">
            <img src="/icons/user.svg" alt="" />
            </div>
          </div>

          <div className="mobile-nav-bottom-item">
          <div className="mobile-nav-bottom-item-img">
            <img src="/icons/heart.svg" alt="" />
            </div>
          </div>

          <div className="mobile-nav-bottom-item">
            <div className="mobile-nav-bottom-item-img">
            <img src="/icons/bag.svg" alt="" />
            </div>
          </div>

        </div>
    </div>
  )
}

export default MobileNav