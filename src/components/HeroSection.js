import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'
import videoBg from '../assets/021.webm'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video loop autoPlay muted>
        <source 
          src={videoBg} 
          type='video/webm'
        />
        Your browser does not support the video tag.
      </video>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button 
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large" 
        >
          GET STARTED
        </Button>
        <Button 
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large" 
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection
