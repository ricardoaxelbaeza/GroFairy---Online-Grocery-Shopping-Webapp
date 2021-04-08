import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

export default function HeroSection() {
  return (

    <div className='hero-container' style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + '/GroFairy3.jpeg'})` 

    }}>
      {/* <img src={process.env.PUBLIC_URL + "/GroFairyLogo.jpeg"} width="1792" alt="GroFairy Logo" /> */}
      
      <p></p><p></p><p></p><p></p><p></p><p></p><p></p>
     
      <p></p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
          </Button>
      </div>
    </div>
  )
}
