import styled from 'styled-components';
import ImageHeader from '../../components/ImageHeader';
import Layout from '../../elements/Layout';
import AwardPhotos from '../../public/Awards/index';

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto 10vh auto;
  padding: 20px;
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  img {
    max-width: 660px;
  }
  @media only screen and (max-width: 700px) {
    img {
      max-width: 300px;
    }
  }
  ul {
    list-style-type: none;
  }
  li {
    margin: 10px auto;
    font-weight: bold;
  }
  .awards {
    margin: 70px 0;
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
      />
      <Wrap>
        <section>
          <div className="item">
            {AwardPhotos.map((item, i) => (
              <img key={i} src={item.img} alt="" />
            ))}
          </div>
        </section>
        <div className="awards">
          <h2>Other Awards</h2>
          <ul>
            <li>Top 100 Beauty Influencer Professional Beauty 2020</li>
            <li>WINNER 37 industry and non-industry awards:-</li>
            <li>Winner Customer at the Heart</li>
            <li>Salon Director of the Year</li>
            <li>Babtac Large Salon of the Year 2014</li>
            <li>HSBC Elevator Pitch top 30</li>
            <li>
              Winner Professional Beauty Regional & National Salon of the Year
              2011-2019
            </li>
            <li>Voted #1 most inspirational Salon</li>
            <li>Winner Mumpreneur - Best new startup 2011</li>
            <li>British Hair & Beauty Awards - Best Salon 2015</li>
            <li>
              Forward Ladies - Regional Winner SME - Women in Business Awards
            </li>
            <li>
              Forward Ladies - National Winner SME - Women in Business Awards
            </li>
            <li>Phorest 5* Salon 2011 - 2019</li>
            <li>Yorkshire Choice Awards</li>
            <li>Yorkshire Women of Achievement Finalist 2014, 2015, 2019</li>
            <li>Acquisition International Award - Best Spa 2016</li>
            <li>
              Lux Awards - Best 100 places to visit in the World - February 2017
            </li>
            <li>
              Wealth & Finance 2017 - Business Awards - winner - Inspirational
              Leader
            </li>
            <li>AI - Excellence Awards - Entrepreneurial Leader</li>
            <li>European Business Awards - Unique Spa 2016</li>
            <li>2018 Leaders in Luxury Awards - Best Spa/Salon 2018</li>
            <li>Lux Hotel & Spa Awards - Best Spa in Yorkshire 2017</li>
            <li>Lux Life Hotel & Spa Awards 2019 - Best Spa & Beauty Salon</li>
            <li>LTG Spa & Wellness Awards winner 2019/2020</li>
            <li>Babtac Inaugural Event - Speaker 2019</li>
          </ul>
        </div>
      </Wrap>
    </Layout>
  );
}
