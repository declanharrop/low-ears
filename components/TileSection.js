import React from 'react';
import styled from 'styled-components';
// import IconTile from '../elements/IconTile';

const Wrap = styled.div`
  margin: 10vh auto;
  padding: 0 10px;
  max-width: 1200px;
  .content {
    margin: 10vh auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  p {
    margin: 2vh auto;
  }
  h2 {
    margin: 5vh auto;
  }
`;

export default function TileSection({ children, title, subtitle, text }) {
  return (
    <Wrap>
      {title && <h2>{title}</h2>}
      {subtitle && <h3>{subtitle}</h3>}
      {text && <p>{text}</p>}
      <div className="content">{children}</div>
    </Wrap>
  );
}
