import React, { useState } from 'react';
import styled from 'styled-components';

const NavDrawer = styled.div`
  z-index: 3000;
  color: white;
  background: var(--second);
  height: 100vh;
  transition: left 1s;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 300px;
  .btnplacer {
    /* width: 60px; */
    /* margin: 32px 10px 0 0; */
    float: right;
  }
  .logoPlacer {
    float: left;
    margin: 24px 0 0 26px;
    img {
      width: 140px;
    }
  }
  .closeButton {
    color: white;
    background: none;
    border: none;
    font-size: 3rem;
    font-weight: 800;
    cursor: pointer;
    line-height: 0.8;
    padding: 0;
    margin: 39px 30px 0 0;
    &:hover {
      text-shadow: 0 0 8px white;
    }
  }
  .content {
    margin: 110px 30px;
  }
`;

const OpenButton = styled.button`
  background: none;
  border: solid 1px white;
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  padding: 6px 12px 6px 14px;
  border-radius: 4px;
  letter-spacing: 0.3rem;
  float: left;
  margin: 20px 0 0 30px;
  &:hover {
    background: var(--second);
    border: solid 1px var(--second);
  }
`;

const Overlay = styled.div`
  z-index: 900;
  background: rgba(229, 249, 224, 0);
  position: fixed;
  height: 100vh;
  width: 100vw;
  transition: background 1s ease-out;
  /* margin: -83px 0 0 0; */
  top: 0;
  left: 0;
`;

function Drawer(props) {
  const [width, setWidth] = useState(-300);
  const [opacity, setOpacity] = useState('rgba(229, 249, 224, 0)');
  const [layer, setLayer] = useState(-2000);
  const [height, setHeight] = useState(0);

  const changeWidth = () => {
    if (width === -300) {
      setLayer(900);
      setWidth(0);
      setOpacity('rgba(229, 228, 208,0.7)');
      document.body.style.overflow = 'hidden';
      setHeight(100);
    } else {
      setLayer(-2000);
      setWidth(-300);
      setOpacity('rgba(229, 228, 208,0)');
      document.body.style.overflow = 'visible';
      setHeight(0);
    }
  };
  return (
    <>
      <OpenButton type="button" onClick={changeWidth}>
        MENU
      </OpenButton>
      <NavDrawer style={{ left: `${width}px` }}>
        <div className="logoPlacer">
          <img src="/img/logo/LogoLight.svg" alt="" />
        </div>
        <div className="btnplacer">
          <button className="closeButton" type="button" onClick={changeWidth}>
            X
          </button>
        </div>
        <div className="content" onClick={changeWidth}>
          {props.children}
        </div>
      </NavDrawer>
      <Overlay
        style={{
          background: `${opacity}`,
          zIndex: `${layer}`,
          height: `${height}vh`,
        }}
        onClick={changeWidth}
      />
    </>
  );
}

export default Drawer;
