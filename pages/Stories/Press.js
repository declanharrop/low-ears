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
    max-width: 660px;
  }
  @media only screen and (max-width: 700px) {
    img {
      max-width: 300px;
    }
  }
`;

export default function Press() {
  return (
    <Layout
      title="Press - Low Ears"
      desc="Press Clippings"
      url="https://lowears.co.uk/Stories/Press"
    >
      <ImageHeader
        height="70vh"
        text="Press & Awards"
        img="/img/headers/press.jpg"
        quote="I’ve come to believe that each of us has a personal calling that’s as unique as a fingerprint – and that the best way to succeed is to discover what you love and then find a way to offer it to others in the form of service, working hard, and also allowing the energy of the universe to lead you."
      />
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
