import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Wrap = styled.div`
  margin: 10vh auto;
  max-width: 1000px;
  img {
    height: 300px;
    width: 300px;
    border-radius: 150px;
    border: 5px solid var(--second);
    box-shadow: 0 0 5px 1px var(--prime);
  }
  h2 {
    margin: 30px auto 10px auto;
  }
  h3 {
    margin: 0px auto 40px auto;
  }
  p {
    margin: 10px auto;
  }
`;

export default function CircleImageSection({
  img,
  title,
  texts,
  subtitle,
  buttonText,
  buttonLink,
}) {
  return (
    <Wrap>
      {img && <img src={img} alt={title} />}
      {title && <h2>{title}</h2>}
      {buttonText && (
        <Link href={buttonLink}>
          <a>
            <button type="button">{buttonText}</button>
          </a>
        </Link>
      )}
      {subtitle && <h3>{subtitle}</h3>}
      {texts && texts.map((text, i) => <p key={i}>{text}</p>)}
    </Wrap>
  );
}
