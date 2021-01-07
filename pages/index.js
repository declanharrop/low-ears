import React from 'react';
import styled from 'styled-components';
import ImageHeader from '../components/ImageHeader';
import Layout from '../elements/Layout';

const Wrap = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 60vw;
    margin: 0 0 10vh 0;
  }
`;

export default function Home() {
  return (
    <Layout
      title="Home - Low Ears"
      desc="Welcome to Low Ears we ..."
      url="https://lowears.co.uk"
    >
      <Wrap>
        <ImageHeader
          img="/img/headers/home.jpg"
          innerImg="/img/logo/LogoLight.svg"
        />
      </Wrap>
    </Layout>
  );
}
