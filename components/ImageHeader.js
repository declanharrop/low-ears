import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  width: 100vw;
  background: no-repeat center;
  background-size: cover;
  .downarrow {
    height: 30px;
    margin: -15vh auto 0 auto;
    position: absolute;
  }
  .content {
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
}) {
  return (
    <>
      <Wrap style={{ backgroundImage: `url(${img})`, height: `${height}` }}>
        <div className="content">
          {innerImg && <img src={innerImg} alt="" />}
          {text && <h1>{text}</h1>}
        </div>
      </Wrap>
      {arrow && (
        <DownArrow>
          <img src="/img/icons/Down.svg" alt="Down Icon" />
        </DownArrow>
      )}
    </>
  );
}
