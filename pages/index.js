import React from 'react';
import styled from 'styled-components';
import Affirmation from '../components/Affirmation';
import ImageHeader from '../components/ImageHeader';
import Reviews from '../components/Reviews';
import TileSection from '../components/TileSection';
import IconTile from '../elements/IconTile';
import Layout from '../elements/Layout';
import Quote from '../elements/Quote';
// import SimpleSlider from '../elements/Slider';

const Wrap = styled.main`
  margin: 0;
`;

export default function Home() {
  return (
    <Layout
      title="Home - Low Ears"
      desc="Education, support and solution based mental health for those working in any customer service industry."
      url="https://lowears.co.uk"
    >
      <Wrap>
        <ImageHeader
          img="/img/headers/home1.jpg"
          innerImg="/img/logo/LogoLight.svg"
          arrow
        />
        <Quote
          quote="'I've created, what wasn't available to me, when on 8/6/19 my professional and personal life changed forever.  My sense of purpose is to use every part of my experience to safeguard and support others, to be honourable, compassionate and to make a difference, this is a safe space where trust is paramount'."
          img="/img/headers/homeQuote1.jpg"
          imgLocation="center"
          overlay="0.2"
          small
        />
        <TileSection
          title="What we do"
          subtitle="Create a community of well beings."
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
            icon="/img/icons/Affurmit.svg"
            text="Affurm-It"
            exLink="https://affurmit.app"
          />
          <IconTile
            icon="/img/icons/Shop.svg"
            text="Shop"
            exLink="https://lowears.company.site"
          />
        </TileSection>
        <Affirmation />
        <Reviews />
      </Wrap>
    </Layout>
  );
}
