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
      <p>Use our tuner and learn to play on dombyra, qobyz and etc</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Wanna try out tuner?
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;