import React from 'react';
import { ClipLoader } from 'react-spinners';
import styled from 'styled-components';

const Wrap = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Loading() {
  return (
    <Wrap>
      <ClipLoader loading color="var(--second)" size="100px" />
    </Wrap>
  );
}
