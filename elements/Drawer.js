import React, { useState } from 'react';
import styled from 'styled-components';

const NavDrawer = styled.div`
  z-index: 1100;
  color: white;
  background: var(--second);
  height: 100vh;
  transition: left 1s;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 280px;
  .btnplacer {
    width: 200px;
    padding: 0px 0 0 30px;
    text-align: left;
  }
  .closeButton {
    color: white;
    background: none;
    border: none;
    font-size: 4rem;
    font-weight: 800;
    cursor: pointer;
    line-height: 0.8;
    margin: 30px 0 0 0;
    padding: 0;
    &:hover {
      text-shadow: 0 0 8px var(--prime);
    }
  }
  .content {
    margin: 20px 30px;
  }
`;

const OpenButton = styled.button`
  /* z-index: 1000; */
  background: none;
  border: solid 1px var(--prime);
  font-size: 1.8rem;
  font-weight: 700;
  /* position: fixed; */
  color: var(--navy);
  /* top: 10px; */
  /* left: 20px; */
  padding: 8px 16px 8px 16px;
  border-radius: 4px;
  color: var(--prime);
  letter-spacing: 0.5rem;
  &:hover {
    background: var(--prime);
    color: white;
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
  const [width, setWidth] = useState(-320);
  const [opacity, setOpacity] = useState('rgba(229, 249, 224, 0)');
  const [layer, setLayer] = useState(-2000);
  const [height, setHeight] = useState(0);

  const changeWidth = () => {
    if (width === -320) {
      setLayer(900);
      setWidth(0);
      setOpacity('rgba(229, 228, 208,0.7)');
      document.body.style.overflow = 'hidden';
      setHeight(100);
    } else {
      setLayer(-2000);
      setWidth(-320);
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
