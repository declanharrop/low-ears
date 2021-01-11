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
  z-index: -1000;
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

export default function EducationReviews() {
  return (
    <Wrap>
      <div className="content">
        <h2>Education Reviews</h2>
        <div className="car">
          <SimpleSlider>
            <div className="item">
              <h3>Lina</h3>
              <p>
                "Life-saving & Life changing this training experience was just
                what I needed, how I wish it had been available sooner"
              </p>
            </div>
            <div className="item">
              <h3>Abbie</h3>
              <p>
                "Thank you, I had no idea how off track my professional and in
                turn private life was, your training has provided me with the
                skills needed to survive my future life as the best version of
                myself - I am enough"
              </p>
            </div>
            <div className="item">
              <h3>Matthew</h3>
              <p>
                "Thanks so much for today it was really brilliant. Really opened
                my eyes to so much and I took a million things away from it - I
                loved the format - thank you for allowing me to be part of this"
              </p>
            </div>
            <div className="item">
              <h3>Sarah</h3>
              <p>
                " Just to say, thank you for a very informative course, your
                delivery was great and enabled me to really get the best from
                you. I know you said time to reflect and absorb the information
                but this is what stuck in my mind - be careful where I put my
                angel, make practical slow steps, make peace for a better
                future, reflect and review, do what I do best"
              </p>
            </div>
            <div className="item">
              <h3>Peter</h3>
              <p>
                "Thank you so much for the training, I have really taken so much
                value from the course and already feel like a better manager for
                it, the insight into mental health within our sector was
                profound - really changed my mind, for the better"
              </p>
            </div>
          </SimpleSlider>
        </div>
      </div>
    </Wrap>
  );
}
