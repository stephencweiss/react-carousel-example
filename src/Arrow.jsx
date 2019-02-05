import React from 'react';
import './carousel.css';

const Arrow = (props) => {
  // console.log(`props are -->`, props);
  let divClass = '', dirClass = '', handler, text = '';

  if (props.direction === 'prev') {
    divClass= `backArrow arrow`;
    dirClass = `fa fa-arrow-left fa-2x`;
    handler = props.goToPrevSlide;
    text = '<=='
  }
  else {
    divClass= `nextArrow arrow`;
    dirClass = `fa fa-arrow-right fa-2x`;
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