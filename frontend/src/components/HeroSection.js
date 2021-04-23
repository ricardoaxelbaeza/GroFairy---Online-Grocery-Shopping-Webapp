import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

export default function HeroSection() {
  return (

    <div className='hero-root' style={{ marginTop: '11vh' }}>
      <div className='hero-container' style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/GroFairy3.jpeg'})`, height: '89vh',
        backgroundSize: 'cover', maxWidth: '100vw', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
      }}>
        {/* <img src={process.env.PUBLIC_URL + "/GroFairyLogo.jpeg"} width="1792" alt="GroFairy Logo" /> */}

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
    </div>
  )
}
