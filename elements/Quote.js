import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  margin: 16vh auto;
  width: 100vw;
  background: no-repeat center;
  background-size: cover;
  box-shadow: 0 0 10px 0px var(--second);
  .content {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.6);
  }
  .contentInner {
    max-width: 800px;
  }
  h3 {
    font-size: 2.8rem;
    color: white;
    font-style: italic;
    text-transform: unset;
    padding: 0 20px;
  }
`;
const Wrap2 = styled.div`
  .content {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .contentInner {
    max-width: 800px;
  }
  h3 {
    font-size: 2.8rem;
    font-style: italic;
    text-transform: unset;
    padding: 0 20px;
  }
`;

export default function Quote({ img, height = '60vh', quote }) {
  return (
    <>
      {img ? (
        <Wrap
          style={{
            backgroundImage: `url(${img})`,
            height: `${height}`,
          }}
        >
          {quote && (
            <div className="content">
              <div className="contentInner">
                <h3>{quote}</h3>
              </div>
            </div>
          )}
        </Wrap>
      ) : (
        <Wrap2 style={{ height: `${height}` }}>
          <div className="content">
            <div className="contentInner">
              <h3>{quote}</h3>
            </div>
          </div>
        </Wrap2>
      )}
    </>
  );
}
