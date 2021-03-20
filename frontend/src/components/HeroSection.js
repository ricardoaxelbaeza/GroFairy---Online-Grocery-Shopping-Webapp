import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

export default function HeroSection() {
    return (
        <div className='hero-container'>
        <img src ={process.env.PUBLIC_URL + "/GroFairyLogo.jpeg"} width= "1792" alt="GroFairy Logo" />
        <h1>Order Groceries On Demand</h1>
        <p>What are you waiting for?</p>
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
