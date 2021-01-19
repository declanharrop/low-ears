import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  position: relative;
  width: 100vw;
  background: no-repeat center;
  background-size: cover;
  h3 {
    position: absolute;
    color: rgba(255, 255, 255, 1);
    z-index: 9;
    bottom: 0;
    font-style: italic;
    font-weight: 500;
    font-size: 1.8rem;
    left: 0;
    padding: 40px;
    letter-spacing: 0.3rem;
  }
  @media only screen and (max-width: 800px) {
    h3 {
      font-size: 1.4rem;
      padding: 16px;
    }
  }

  .downarrow {
    height: 30px;
    margin: -15vh auto 0 auto;
    position: absolute;
    z-index: 35;
  }
  .content {
    position: relative;
    z-index: 25;
    height: 100%;
    display: flex;
    /* flex-wrap: wrap; */
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.4);
    h1 {
      color: white;
    }
    img {
      width: 40vw;
    }
    @media only screen and (max-width: 800px) {
      img {
        width: 70vh;
      }
    }
  }
`;

const DownArrow = styled.div`
  height: 30px;
  margin: -15vh auto 0 auto;
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 40px;
  }
`;

export default function ImageHeader({
  img,
  height = '100vh',
  text,
  innerImg,
  arrow,
  quote,
}) {
  return (
    <>
      <Wrap style={{ backgroundImage: `url(${img})`, height: `${height}` }}>
        {quote && <h3>"{quote}"</h3>}
        <div className="content">
          {innerImg && <img src={innerImg} alt="" />}
          {text && <h1>{text}</h1>}
        </div>
      </Wrap>
      {arrow && (
        <DownArrow>
          <img src="/img/icons/Downarrow.svg" alt="Down Icon" />
        </DownArrow>
      )}
    </>
  );
}
