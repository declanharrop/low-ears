import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Mobile from './Mobile';
import Desktop from './Desktop';

const Wrap = styled.nav`
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
  position: fixed;
  width: 100vw;
  z-index: 100;
`;

export default function Nav() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const NavigationType = () => {
    if (width < 800) {
      return <Mobile />;
    }
    return <Desktop />;
  };
  return (
    <Wrap>
      <NavigationType />
    </Wrap>
  );
}
