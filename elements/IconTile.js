import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Wrap = styled.div`
  margin: 10px;
  box-shadow: 0 0 5px 0px var(--prime);
  border-radius: 4px;
  padding: 20px;
  width: 260px;
  &:hover {
    box-shadow: 0 0 5px 2px var(--prime);
  }
  img {
    height: 120px;
    margin: 20px auto 40px auto;
  }
  h3 {
    font-size: 2rem;
    height: 70px;
  }
`;

export default function IconTile({ icon, text, link, exLink }) {
  return (
    <>
      {link && (
        <Link href={link}>
          <a>
            <Wrap>
              <img src={icon} alt={`Low Ears ${text}`} />
              <h3>{text}</h3>
            </Wrap>
          </a>
        </Link>
      )}
      {exLink && (
        <a href={exLink} target="_blank" rel="noreferrer nopener">
          <Wrap>
            <img src={icon} alt={`Low Ears ${text}`} />
            <h3>{text}</h3>
          </Wrap>
        </a>
      )}
    </>
  );
}
