import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

document.title = "GroFairy"
class HeroSection extends React.Component {
  /*
  constructor(props) {
    super(props);
  }
  */
  render() {
    return (
      <div className='hero-root' style={{ marginTop: '11vh' }}>
        <div className='hero-container' style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + '/GroFairy3.jpeg'})`, height: '89vh',
          backgroundSize: 'cover', maxWidth: '100vw', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
        }}>

          {!this.props.isAuthenticated ?
            <div className='hero-btns'>
              <Button
                url='/grocerystores'
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
              >
                LETS GO SHOPPING!
                  </Button> </div> :
            <div className='hero-btns' style={{ textAlign: 'center' }}>
              <Button
                url='/signup'
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
              >
                GET STARTED
                  </Button>
              <p />
              <Button
                url='/signin'
                style={{marginLeft: "30"}}
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
              >
                LOGIN
                  </Button>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default HeroSection;