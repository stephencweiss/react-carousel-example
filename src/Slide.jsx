import React from 'react';
import './carousel.css'

const Slide = ({ image }) => {
  return (
    <div className="slide">
      <img src={image} alt='in focus'></img>
    </div>)
}

export default Slide;