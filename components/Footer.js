import React from 'react';
import styled from 'styled-components';
import InstaFeed from './Insta';

const Wrap = styled.div``;

export default function Footer() {
  return (
    <Wrap>
      <InstaFeed
        insta="https://www.instagram.com/low.ears_/"
        title="INSTAGRAM"
        id="8326806558"
        images="8"
        buttonText="Follow me on Instagram"
      />
    </Wrap>
  );
}
