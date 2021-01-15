import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Wrap = styled.div`
  margin: 10vh auto;
  max-width: 1000px;
  padding: 20px;
  img {
    height: 300px;
    width: 300px;
    border-radius: 150px;
    border: 5px solid var(--second);
    box-shadow: 0 0 5px 1px var(--prime);
  }
  h2 {
    margin: 30px auto 20px auto;
  }
  h3 {
    margin: 20px auto 40px auto;
  }
  p {
    margin: 10px auto;
  }
  a {
    font-weight: 600;
  }
  button {
    margin: 14px;
  }
`;

export default function CircleImageSection({
  img,
  title,
  texts,
  subtitle,
  buttons,
  website,
}) {
  return (
    <Wrap>
      {img && <img src={img} alt={title} />}
      {title && <h2>{title}</h2>}
      {buttons &&
        buttons.map((but, i) => (
          <Link href={but.buttonLink} key={i}>
            <a>
              <button type="button">{but.buttonText}</button>
            </a>
          </Link>
        ))}

      {subtitle && <h3>{subtitle}</h3>}
      {texts && texts.map((text, i) => <p key={i}>{text}</p>)}
      {website && (
        <a href={website} target="_blank" rel="noopener noreferrer">
          {website}
        </a>
      )}
    </Wrap>
  );
}
