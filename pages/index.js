import React from 'react';
import styled from 'styled-components';

const Wrap = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 60vw;
    margin: 0 0 10vh 0;
  }
`;

export default function Home() {
  return (
    <>
      <Wrap>
        <div className="content">
          <img src="/img/Logo.svg" alt="Low Ears Logo" />
          <h3>Thank you for visiting our site</h3>
          <p>
            We are currently under construction and will be lauching in January
            2021
          </p>
        </div>
      </Wrap>
    </>
  );
}
