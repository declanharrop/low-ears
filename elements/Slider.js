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
    padding: 0 60px;
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
    margin: 20px auto 40px auto;
  }
  .slick-dots li button::before {
    color: white;
  }
  button {
    margin: 0;
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
      autoplay: true,
      autoplaySpeed: 12000,
    };
    return (
      <Wrap>
        <Slider {...settings}>{this.props.children}</Slider>
      </Wrap>
    );
  }
}
