import React from 'react';
import './hero.css';
import {Button} from '../../Button/Button';
import dombyra from '../../../assets/dombyra-without-background.png'
import qobyz from '../../../assets/qobyz-without-background.png'

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='dombyra-image'>
          <img src={dombyra}></img>
      </div>
      <div className='qobyz-image'>
          <img src={qobyz}></img>
      </div>
      <h1>Welcome to Qazaq Aspap</h1>
      <p>This web app will give you lots of opportunities such as: tuner, lessons</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Let's start our journey? 
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;