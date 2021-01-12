import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import ImageHeader from '../components/ImageHeader';
import StoryTile from '../components/StoryTile';

const Wrap = styled.div`
  .container {
    margin: 10vh auto;
    max-width: 1200px;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

const STORIES = gql`
  query {
    blogs(orderBy: createdAt_DESC, where: { newsStory: true }) {
      id
      createdAt
      img {
        id
      }
      title
      subhead
      storyLink
      content
    }
  }
`;

export default function Stories() {
  return (
    <Wrap>
      <ImageHeader
        height="40vh"
        text="Check Out My Pedigree"
        img="/img/headers/home.jpg"
      />
      <div className="container">
        <Query query={STORIES}>
          {({ loading, data }) => {
            if (loading) return <h1>Loading!!!</h1>;
            const { blogs } = data;
            return blogs.map((blog) => (
              <div key={blog.id}>
                <StoryTile data={blog} />
              </div>
            ));
          }}
        </Query>
      </div>
    </Wrap>
  );
}
