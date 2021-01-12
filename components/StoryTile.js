import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Wrap = styled.div`
  border-radius: 4px;
  box-shadow: 0 0 4px 0 var(--prime);
  max-width: 400px;
  margin: 10px;
`;

export default function StoryTile({ data }) {
  return (
    <Link href={`/Stories/${data.id}`}>
      <a>
        <Wrap>
          <h3>{data.title}</h3>
        </Wrap>
      </a>
    </Link>
  );
}
