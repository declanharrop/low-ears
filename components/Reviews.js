import React from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SimpleSlider from '../elements/Slider';

const Wrap = styled.div`
  margin: 24vh 0 30vh 0;
  padding: 14vh 24px;
  background: linear-gradient(
    184deg,
    rgba(123, 157, 99, 1) 40%,
    rgba(107, 113, 75, 1) 100%
  );
  transform: skew(0deg, -4deg);
  /* z-index: -1000; */
  position: relative;
  .content {
    transform: skew(0deg, 4deg);
    color: white;
    h2 {
      color: white;
    }
    p {
      color: white;
    }
  }
  .car {
    margin: 5vh auto 0 auto;
    position: relative;
  }
`;

export default function Reviews() {
  return (
    <Wrap>
      <div className="content">
        <h2>Theres a lot of love for us</h2>
        <div className="car">
          <SimpleSlider>
            <div className="item">
              <h3>Leslie Blair</h3>
              <h5>BABTAC - Chair</h5>
              <p>
                "Sam continues to be an incredible ambassador and pioneer within
                the industry for over 20 years. Her past success and experiences
                together with her passion and heart make her the perfect
                advocate for achieving her vision for ensuring better mental
                health within the industry through Low Ears."
              </p>
            </div>
            <div className="item">
              <h3>Sam Sweet</h3>
              <h5>Sweet Squared - Founder</h5>
              <p>
                "I have always admired Sam's brilliance in marketing. She has an
                uncanny, unique way, in simply coming up with great branding (be
                it the treatment or product) that speak to the consumer and
                professional alike. It's a gift. After years of stalking her,
                and heeding her business advice on the subject of beauty, I am
                proud to call Sam a friend. Her experience within our industry
                makes her extremely sought after."
              </p>
            </div>
            <div className="item">
              <h3>Deborah Mitchell</h3>
              <h5>Heaven Skincare - Founder</h5>
              <p>
                "Sam is a brilliant marketeer; her ideas are always
                revolutionary. The vision she has for the future make her a
                first choice for most business, not exclusively the beauty
                sector."
              </p>
            </div>
            <div className="item">
              <h3>Jennie Lawson</h3>
              <h5>Mimosa Beauty</h5>
              <p>
                "Sam is a pioneer of the beauty industry! She has championed
                uniqueness and the power of standing out from a crowd. For me
                the thing that sets Sam apart from others is her willingness to
                share her knowledge and empower those around her. I feel
                privilege to have experienced a taste of that wisdom first
                hand."
              </p>
            </div>
            <div className="item">
              <h3>Stephanie Long</h3>
              <p>
                "Sam has the magic formula, what every it is, she has it in
                bucket loads, as an ambassador and veteran for the beauty
                industry - Sam & her business are the standard"
              </p>
            </div>
            <div className="item">
              <h3>Hilary Devey</h3>
              <h5>Former 'Dragon' and business powerhouse</h5>
              <p>
                "Sam, I have known for many years and have seen your business
                grow from small beginnings into the fantastic multi award
                winning business women you are today. I have watched with
                admiration your absolute conviction that your business was going
                to succeed against all odds and your determination is second to
                none. You have overcome adversity and have shown tenacity and
                clear vision in achieving your goals. You continue to amaze me
                with your passion for the business and 'good old Yorkshire hard
                work'. Had you appeared on Dragon's Den I would most certainly
                have invested in your business!"
              </p>
            </div>
            <div className="item">
              <h3>Caroline Ross</h3>
              <h5>Channel 4 - Running the Shops</h5>
              <p>
                "I had the pleasure of working with Sam during filming for the
                programme on Channel 4 'Running the shops', I was so impressed
                with her emphatic nature and enormous heart, one of life's good
                eggs, she was a joy to be around and her knowledge and expertise
                were remarkable. Her experience is second to none and has a
                wicked sense of humour, incredibly warm with a contagious
                spirit."
              </p>
            </div>
            <div className="item">
              <h3>Adam Chatterley</h3>
              <h5>
                Founder of The Beauty Business Podcast and Chair of The UK Spa
                Association
              </h5>
              <p>
                "I don’t know anyone with as much passion for safeguarding the
                mental health of our industry as Sam. From spas to salons, she’s
                literally been there, done that, and probably has the t-shirt.
                We all know there’s a huge issue regarding mental health in the
                beauty and wellness industry, but not one to just sit on the
                sidelines, Sam has taken up the mantle and with Low Ears
                actually done something about it! I, for one, both salute and
                support her all the way."
              </p>
            </div>
          </SimpleSlider>
        </div>
      </div>
    </Wrap>
  );
}
