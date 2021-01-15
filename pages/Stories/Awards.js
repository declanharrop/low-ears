import styled from 'styled-components';
import ImageHeader from '../../components/ImageHeader';
import Layout from '../../elements/Layout';
import AwardPhotos from '../../public/Awards/index';

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto 10vh auto;
  padding: 20px;

  img {
    max-width: 360px;
  }
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
          {AwardPhotos.map((item, i) => (
            <img key={i} src={item.img} alt="" />
          ))}
        </div>
      </Wrap>
    </Layout>
  );
}
