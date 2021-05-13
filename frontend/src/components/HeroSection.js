import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

document.title = "GroFairy"
export default function HeroSection() {
  return (

    <div className='hero-root' style={{ marginTop: '11vh' }}>
      <div className='hero-container' style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/GroFairy3.jpeg'})`, height: '89vh',
        backgroundSize: 'cover', maxWidth: '100vw', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
      }}>

        <div className='hero-btns'>
          <Button
            url='/signup'
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            GET STARTED
          </Button>
          <Button
            url='/signin'
            style="margin-left:  30"
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            LOGIN
          </Button>
        </div>
      </div>
    </div>
  )
}
