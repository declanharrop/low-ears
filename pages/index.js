import React from 'react';
import styled from 'styled-components';
import ImageHeader from '../components/ImageHeader';
import Reviews from '../components/Reviews';
import TileSection from '../components/TileSection';
import IconTile from '../elements/IconTile';
import Layout from '../elements/Layout';
// import SimpleSlider from '../elements/Slider';

const Wrap = styled.main`
  margin: 0;
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
          img="/img/headers/home1.jpg"
          innerImg="/img/logo/LogoLight.svg"
        />
        <TileSection
          title="What we do"
          text="Create a community of well beings."
        >
          <IconTile
            icon="/img/icons/Help.svg"
            text="Help"
            link="/Services/Help"
          />
          <IconTile
            icon="/img/icons/Mentoring.svg"
            text="Mentoring"
            link="/Services/Mentoring"
          />
          <IconTile
            icon="/img/icons/Education.svg"
            text="Education"
            link="/Services/Education"
          />
          <IconTile
            icon="/img/icons/Shop.svg"
            text="Shop"
            exLink="https://lowears.company.site"
          />
        </TileSection>
        <Reviews />
      </Wrap>
    </Layout>
  );
}
