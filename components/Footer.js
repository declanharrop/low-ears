import React from 'react';
import styled from 'styled-components';
import InstaFeed from './Insta';

const Wrap = styled.div`
  .middle {
    background: var(--prime);
    color: white;
    height: 2px;
    margin: 10vh 0 0 0;
  }
  .base {
    margin: 5vh 0 2vh 0;
    padding: 20px;
    p {
      font-size: 1.4rem;
      max-width: 600px;
    }
  }
`;

const ThirtyEight = styled.div`
  padding: 0 20px 10 20px;
`;

export default function Footer() {
  return (
    <Wrap>
      <InstaFeed
        insta="https://www.instagram.com/low.ears_/"
        title="INSTAGRAM"
        id="8326806558"
        images="8"
        buttonText="Follow our lead"
      />
      <div className="middle" />
      <div className="base">
        <p>
          ©{new Date().getFullYear()} Low Ears. Use of this site constitutes
          acceptance of our Privacy Policy. The material on this site may not be
          reproduced, distributed, transmitted, cached or otherwise used, except
          with prior written permission of Low Ears.
        </p>
      </div>
      <ThirtyEight>
        <a
          href="https://38co.io"
          title="ThirtyEightCo Website"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/38co.svg" alt="Powered by 38co" width="200px" />
        </a>
      </ThirtyEight>
    </Wrap>
  );
}
