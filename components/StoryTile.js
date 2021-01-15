import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Wrap = styled.div`
  border-radius: 4px;
  box-shadow: 0 0 4px 0 var(--prime);
  max-width: 400px;
  margin: 10px;
  &:hover {
    box-shadow: 0 0 6px 2px var(--prime);
  }
  img {
    border-radius: 4px 4px 0 0;
    width: 100%;
    height: 260px;
    object-fit: cover;
  }
  .con {
    padding: 20px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    h3 {
      font-size: 2rem;
    }
  }
  .noimage {
    border-bottom: 1px solid var(--second);
  }
`;

export default function StoryTile({ data }) {
  return (
    <Link href={`/Stories/${data.id}`}>
      <a>
        <Wrap>
          {data.img ? (
            <img src={data.img.url} alt={data.title} />
          ) : (
            <img
              className="noimage"
              src="/img/logo/Lowears.svg"
              alt="Low Ears Logo"
            />
          )}
          <div className="con">
            <h3>{data.title}</h3>
          </div>
        </Wrap>
      </a>
    </Link>
  );
}
