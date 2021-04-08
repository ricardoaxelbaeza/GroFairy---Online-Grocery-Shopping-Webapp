import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

export default function HeroSection() {
  return (
<<<<<<< HEAD
    <div className='hero-container' style ={{
      backgroundImage: `url(${process.env.PUBLIC_URL + '/GroFairy3.jpeg'})` 
     
=======
    <div className='hero-container' style={{
      backgroundColor: 'pink',
>>>>>>> 3a4f68a4f56e03ba7a6c4d1ea3ee02ecb3709a6c
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
