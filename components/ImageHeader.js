import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  width: 100vw;
  background: no-repeat center;
  background-size: cover;
  .downarrow {
    height: 30px;
    align-self: flex-end;
    margin: -10vh 0 0 0;
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

export default function ImageHeader({
  img,
  height = '100vh',
  text,
  innerImg,
  arrow,
}) {
  return (
    <Wrap style={{ backgroundImage: `url(${img})`, height: `${height}` }}>
      <div className="content">
        {innerImg && <img src={innerImg} alt="" />}
        {text && <h1>{text}</h1>}
      </div>
      {arrow && (
        <img className="downarrow" src="/img/icons/Down.svg" alt="Down Icon" />
      )}
    </Wrap>
  );
}
