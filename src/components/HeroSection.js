import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
        {/* <video src='./images/bgvid.mp4'/> */}
        <h1>
            PUMA COMPUTING IS HERE
        </h1>
        <p>
            come and join us!
        </p>
        <div className="hero-btns">
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
               KNOW MORE 
            </Button> 
        </div>

    </div>
  )
}

export default HeroSection