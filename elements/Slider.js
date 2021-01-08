import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Wrap = styled.section`
  position: relative;
  .slick-arrow {
    width: 50px;
    height: 80px;
  }
`;
const Next = styled.button`
  /* background: var(--navy); */
  display: absolute;
  right: 0;
  top: calc(50% - 20px);
`;
const Back = styled.button`
  display: absolute;
  z-index: 10;
  left: 0;
  top: calc(50% - 20px);
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
          <div>
            <p>Review 1</p>
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
