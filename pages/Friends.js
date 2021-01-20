import styled from 'styled-components';
import ImageHeader from '../components/ImageHeader';
import Layout from '../elements/Layout';

const Wrap = styled.div`
  max-width: 1300px;
  margin: 5vh auto 15vh auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-wrap: wrap;
  section {
    margin: 10px;
    max-width: 400px;
    box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.3);
    line-height: 0;
    border-radius: 6px;
    &:hover {
      box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.5);
    }
  }
  @media only screen and (max-width: 800px) {
    section {
      max-width: 300px;
    }
  }

  img {
    border-radius: 6px;
    width: 100%;
  }
`;

const Item = ({ link, text, img }) => (
  <section>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={img} alt={text} />
    </a>
  </section>
);

export default function Friends() {
  return (
    <Layout
      title="Friends - Low Ears"
      desc="Our Friends"
      url="https://lowears.co.uk/Friends"
    >
      <ImageHeader
        height="60vh"
        text="The rest of the pack"
        img="/img/headers/friends.jpg"
      />
      <Wrap>
        <Item
          link="https://www.templespa.com/"
          text="Temple Spa"
          img="/img/partner/TempleSpa.jpg"
        />
        <Item
          link="https://www.premiersoftware.uk/"
          text="Premier Software"
          img="/img/partner/PremierSoftware.jpg"
        />
        <Item
          link="https://professionalbeauty.co.uk/site/Home"
          text="Professional Beauty"
          img="/img/partner/ProfessionalBeauty.jpg"
        />
        <Item
          link="https://www.babtac.com/"
          text="Babtac"
          img="/img/partner/BABTAC.jpg"
        />
      </Wrap>
    </Layout>
  );
}
