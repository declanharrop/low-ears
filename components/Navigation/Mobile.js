import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Drawer from '../../elements/Drawer';
import Links from './Links';

const Wrap = styled.div`
  .menuItems {
    ul {
      list-style-type: none;
      margin: 40px 0 0 0;
    }
    li {
      color: white;
      margin: 20px 0;
      text-align: left;
    }
    a {
      color: white;
      font-size: 2rem;
      font-weight: 800;
      letter-spacing: 0.8rem;
      text-transform: uppercase;
      &:hover {
        text-shadow: 0 0 8px white;
      }
    }
  }
`;

export default function Mobile() {
  return (
    <Wrap>
      <Drawer>
        <div className="menuItems">
          <Links />
        </div>
      </Drawer>
    </Wrap>
  );
}
