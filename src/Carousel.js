import React, { Component } from 'react';

import Slide from './Slide';
import Arrow from './Arrow';

// import styling for different components
import './carousel.css';

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
      ],
      currentIndex: 0,
      translateValue: 0,
    }
  }

  goToPrevSlide = () => {
    console.log(this.state.currentIndex);

    if(this.state.currentIndex === 0) { return; }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }))
  }

  goToNextSlide = () => {
    if(this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  slideWidth = () => {
     return document.querySelector('.slide').clientWidth
  }

  render() {

    return (
      <div className="main-block">
        <div className="slider">
          <div className="slider-wrapper" style={{
              transform: `translateX(${this.state.translateValue}px)`
            }}>
          {this.state.images.map((image, i) => (
            <Slide key={i} image={image} />
            )
          )}
          </div>

          <Arrow
            direction='prev'
            goToPrevSlide={this.goToPrevSlide}
            goToNextSlide={this.goToNextSlide}
            />

          <Arrow
            direction='next'
            goToPrevSlide={this.goToPrevSlide}
            goToNextSlide={this.goToNextSlide}
          />
        </div>
        <div>
          <p >Inspired by <a href="https://medium.com/@ItsMeDannyZ/build-an-image-slider-with-react-es6-264368de68e4">this</a> tutorial by Dan Zuzevich</p>
        </div>
      </div>
    );
  }
}

export default Carousel;

