import React from 'react';
import styled from 'styled-components';
import Links from './Links';

const Wrap = styled.div`
  float: right;
  margin: 0 20px 0 0;
  li {
    display: inline-block;
    margin: 30px 16px;
    text-transform: uppercase;
  }
  a {
    color: white;
    font-family: 'Nanum Gothic', sans-serif;
    font-weight: 800;
  }
`;

export default function Desktop() {
  return (
    <Wrap>
      <Links />
    </Wrap>
  );
}
