import React from 'react';
import './carousel.css';

const Arrow = (props) => {
  let divClass = '', dirClass = '', handler, text = '';

  if (props.direction === 'prev') {
    divClass= `backArrow arrow`;
    handler = props.goToPrevSlide;
    text = '<=='
  }
  else {
    divClass= `nextArrow arrow`;
    handler = props.goToNextSlide;
    text = '==>'
  }

  return (
    <div className={divClass} onClick={handler}>
      <i className={dirClass} aria-hidden="true">{text}</i>
    </div>
  );

}

export default Arrow;