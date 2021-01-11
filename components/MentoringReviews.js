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

export default function MentoringReviews() {
  return (
    <Wrap>
      <div className="content">
        <h2>Mentoring Reviews</h2>
        <div className="car">
          <SimpleSlider>
            <div className="item">
              <p>
                "Having admired your success from a borderline stalking
                position, having the opportunity to be able to work with you 1-1
                was literally life changing, your approach was entirely holistic
                citing you couldn't help to fix my business without fixing me
                first, thank you, you will never know what you have truly done
                for me, my relationships and my business, my husband thanks you
                for giving him his wife back" - Helena - previously exhausted
                spa owner."
              </p>
            </div>
            <div className="item">
              <p>
                "The work you have done on my website is phenomenal, I am blown
                away."
              </p>
            </div>
            <div className="item">
              <p>
                "Working with you has been amazing, I really feel like you have
                got me back on track to gaining some control back in my life. I
                have learned things that have helped me both in business and in
                my personal life, some of the words you have spoken will
                resonate with me for the rest of my life."
              </p>
            </div>
            <div className="item">
              <p>
                "I don't know how you do it, but you do with such style and
                class, thank you for making me a better human on every level
                possible."
              </p>
            </div>
            <div className="item">
              <p>
                "You are my inspiration, thank you for everything you have done
                for me."
              </p>
            </div>
            <div className="item">
              <p>
                "I admire your tenacity, your methods are ground breaking and
                this was hands down the best investment of my life."
              </p>
            </div>
          </SimpleSlider>
        </div>
      </div>
    </Wrap>
  );
}
