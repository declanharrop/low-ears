import styled from 'styled-components';
import Layout from '../elements/Layout';
import ImageHeader from '../components/ImageHeader';

const Wrap = styled.div``;

export default function About() {
  return (
    <Layout
      title="About - Low Ears"
      desc="Welcome to Low Ears we ..."
      url="https://lowears.co.uk/About"
    >
      <Wrap>
        <ImageHeader
          img="/img/headers/remedies.jpg"
          text="About Us"
          height="60vh"
        />
      </Wrap>
    </Layout>
  );
}
