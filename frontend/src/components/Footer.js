import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-tagline'>
                <p className='footer-tagline-heading'>
                    View many of our wonderful links on the site!
                </p>
            </section>
            <div className='footer-links'>
                <div className='footer-links-wrapper'>
                    <div className='footer-link-items'>
                        <Link to='/db-dump'>DB Dump</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
