import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Drawer from '../../elements/Drawer';
import Links from './Links';

const Wrap = styled.div``;

export default function Mobile() {
  return (
    <Wrap>
      <Drawer>
        <Links />
      </Drawer>
    </Wrap>
  );
}
