import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrap = styled.section`
  width: 100%;
  padding: 20px;
  max-width: 1400px;
  margin: 100px auto 0 auto;
  h3 {
    margin: 100px 0 60px 0;
    letter-spacing: 0.5rem;
    font-size: 3rem;
    text-transform: uppercase;
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    a {
      margin: 20px;
    }
    img {
      width: 40vw;
      max-width: 300px;
    }
  }
  @media only screen and (max-width: 600px) {
    h3 {
      font-size: 2.4rem;
    }
    .content {
      img {
        width: 100%;
      }
    }
  } ;
`;

const url = `/api/instagram`;

function useInstagram() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        console.log(data);
      });
  }, []);
  return posts;
}

export default function Instagram() {
  const insta = useInstagram();
  return (
    <Wrap>
      <h3>Instagram</h3>
      <div className="content">
        {insta.map((post) => (
          <a
            href={post.url}
            key={post.id}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={post.thumbnail} alt={post.caption} />
          </a>
        ))}
      </div>
    </Wrap>
  );
}
