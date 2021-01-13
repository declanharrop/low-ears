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

  .logoplacer {
    margin: 24px 0 0 20px;
    img {
      height: 40px;
    }
  }
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
    if (width < 880) {
      return <Mobile />;
    }
    return <Desktop />;
  };

  const LogoSide = () => {
    if (width < 880) {
      return (
        <div
          className="logoplacer"
          style={{ float: 'right', margin: '16px 30px 20px 0px' }}
        >
          <img src="/img/logo/LogoLight.svg" alt="" />
        </div>
      );
    }
    return (
      <div className="logoplacer" style={{ float: 'left' }}>
        <img src="/img/logo/LogoLight.svg" alt="" />
      </div>
    );
  };
  return (
    <Wrap>
      <LogoSide />
      <NavigationType />
    </Wrap>
  );
}
