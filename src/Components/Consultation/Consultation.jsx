import React from 'react'
import './Consultation.scss'
import Button from '../Button/Button'
function Consultation() {
  return (
    <div className='consultation'>

        <div className="consultation-first">
            <img src="/images/consultation1.png" alt="" />
            <img className='consultation-mobile-pic' src="/images/consultation1mobile.png" alt="" />

            <div className='consultation-first-info'>
                <h2>Consult with <br /> a Jewelry Specialist</h2>
                <span>A more thoughtful way to experience fine jewelry</span>
                <div className="consultation-btn">
                <Button buttonType="transparent" buttonText="Visit a Showroom" />
                </div>
                <div className='consultation-btn-mobile'>
                <a href="">Visit a Showroom</a>
                </div>
            </div>
        </div>

   <div className="consultation-second">
            <img src="/images/consultation2.png" alt="" />
            <img className='consultation-mobile-pic' src="/images/consultation2mobile.png" alt="" />

            <div className='consultation-second-info'>
                <h2>Consult with <br /> a Jewelry Specialist</h2>
                <span>A more thoughtful way to experience fine jewelry</span>
                <div className="consultation-btn">
                <Button buttonType="transparent" buttonText="Book a Virtual Appointment" />
                </div>
                <div className='consultation-btn-mobile'>
                <a href="">Book a Virtual Appointment</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Consultation