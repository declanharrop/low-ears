import styled from 'styled-components';
import ImageHeader from '../../components/ImageHeader';
import Layout from '../../elements/Layout';

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto 10vh auto;
  padding: 20px;
`;

export default function Awards() {
  return (
    <Layout
      title="Awards - Low Ears"
      desc="My Awards"
      url="https://lowears.co.uk/Stories/Awards"
    >
      <ImageHeader height="30vh" text="Awards" />
      <Wrap>
        <div className="item">
          <img src="" alt="" />
        </div>
      </Wrap>
    </Layout>
  );
}
