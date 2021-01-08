import React from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SimpleSlider from '../elements/Slider';

const Wrap = styled.div`
  margin: 24vh 0 30vh 0;
  padding: 14vh 24px;
  background: linear-gradient(
    184deg,
    rgba(123, 157, 99, 1) 40%,
    rgba(107, 113, 75, 1) 100%
  );
  transform: skew(0deg, -4deg);
  /* z-index: -1000; */
  position: relative;
  .content {
    transform: skew(0deg, 4deg);
    color: white;
    h2 {
      color: white;
    }
    p {
      color: white;
    }
  }
  .car {
    margin: 10vh auto 0 auto;
    position: relative;
  }
`;

export default function Reviews() {
  return (
    <Wrap>
      <div className="content">
        <h2>Our Clients love us</h2>
        <div className="car">
          <SimpleSlider />
        </div>
      </div>
    </Wrap>
  );
}
