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

export default function Press() {
  return (
    <Layout
      title="Press - Low Ears"
      desc="Press Clippings"
      url="https://lowears.co.uk/Stories/Press"
    >
      <ImageHeader height="50vh" text="Press" img="/img/headers/press.jpg" />
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
