import React from 'react';
import styled from 'styled-components';
import ImageHeader from '../components/ImageHeader';
import Layout from '../elements/Layout';
// import SimpleSlider from '../elements/Slider';

const Wrap = styled.main`
  margin: 0;
  .cont {
    margin: 10vh auto;
    max-width: 1000px;
    padding: 20px;
  }
`;

export default function Contact() {
  return (
    <Layout
      title="Contact Us - Low Ears"
      desc="Welcome to Low Ears we ..."
      url="https://lowears.co.uk/Contact"
    >
      <Wrap>
        <ImageHeader
          height="60vh"
          img="/img/headers/home1.jpg"
          text="Contact Us"
        />
        <div className="cont">
          <h3>Please feel free to contact us, we can't wait to meet you.</h3>
          <a href="mailto:info@lowears.co.uk">
            <button type="button">info@lowears.co.uk</button>
          </a>
        </div>
      </Wrap>
    </Layout>
  );
}
