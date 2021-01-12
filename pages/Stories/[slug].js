import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Markdown from 'markdown-to-jsx';
import ImageHeader from '../../components/ImageHeader';

const Wrap = styled.div`
  margin: 10vh 20px;

  h2 {
    margin: 20px auto;
  }
  .content {
    button {
      margin: 60px auto 0 auto;
    }
  }
`;

const CURRENT_STORY = gql`
  query blog($id: ID!) {
    blog(where: { id: $id }) {
      createdAt
      img {
        url
      }
      title
      subhead
      storyLink
      content
    }
  }
`;

export default function Story() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <Query query={CURRENT_STORY} variables={{ id: slug }}>
      {({ loading, data }) => {
        if (loading) return <h1>Loading!!!</h1>;
        const { blog } = data;
        return (
          <>
            <ImageHeader height="70vh" text={blog.title} img={blog.img.url} />
            <Wrap>
              <div className="content">
                {blog.subhead && <h2>{blog.subhead}</h2>}
                <Markdown>{blog.content}</Markdown>
                <a
                  href={blog.storyLink}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button type="button">Check out the story here</button>
                </a>
              </div>
            </Wrap>
          </>
        );
      }}
    </Query>
  );
}
