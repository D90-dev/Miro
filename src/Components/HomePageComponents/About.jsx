import React from 'react'
import './About.scss'
import Button from "../Button/Button";

function About() {
  return (
    <div className='home-about'>
        <div className="home-about-parts">
        <div className="home-about-top">
            <img src="/images/about1.png" alt="" />
            <div className="home-about-top-info">
                <h2>The Miro Jewelers Family Story</h2>
                <span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                <div className="home-about-btn">
                <Button buttonType="darkBlueDefault" buttonText="Read Our Story" />
                </div>
            </div>
        </div>

        <div className="home-about-bottom">
            <div className="home-about-bottom-info">
                <h2>The Miro Jewelers Family Story</h2>
                <span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                <div className="home-about-btn">
                <Button buttonType="darkBlueDefault" buttonText="Read Our Story" />
                </div>
            </div>
            <img src="/images/about2.png" alt="" />
        </div>
        </div>

    </div>
  )
}

export default About