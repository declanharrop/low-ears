import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Wrap = styled.section`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  .slick-arrow {
    width: 50px;
    height: 80px;
  }
  .item {
    margin: 0 auto;
  }
  h3 {
    color: white;
    margin: 0 auto;
  }
  h5 {
    margin: 0 auto;
    text-align: center;
  }
  p {
    margin: 10px auto 40px auto;
  }
  .slick-dots li button::before {
    color: white;
  }
`;
const Next = styled.button`
  /* background: var(--navy); */
  display: absolute;
  right: 0;
  top: 50%;
`;
const Back = styled.button`
  display: absolute;
  z-index: 10;
  left: 0;
  top: 50%;
`;

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <Next />,
      prevArrow: <Back />,
    };
    return (
      <Wrap>
        <Slider {...settings}>
          <div className="item">
            <h3>L O L</h3>
            <h5>Lunula</h5>
            <p>Here is where a review would go</p>
          </div>
          <div>
            <p>Review 2</p>
          </div>
          <div>
            <p>Review 3</p>
          </div>
        </Slider>
      </Wrap>
    );
  }
}
