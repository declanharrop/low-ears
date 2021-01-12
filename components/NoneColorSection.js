import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  margin: 14vh auto;
  /* background: linear-gradient(
    184deg,
    rgba(123, 157, 99, 1) 40%,
    rgba(107, 113, 75, 1) 100%
  ); */
  padding: 0 20px 0 20px;
  .inner {
    max-width: 1000px;
    margin: 0 auto;
    h2 {
      /* color: white; */
    }
    h3 {
      /* color: white; */
    }
    p {
      margin: 20px auto 0 auto;
      /* color: white; */
    }
  }
  .content {
    margin: 8vh 0 0 0;
    h3 {
      margin: 0 0 14px 0;
    }
    p {
      margin: 6px auto 0 auto;
    }
  }
  .lists {
    margin: 8vh auto;
  }
`;

export default function NoneColorSection({
  title,
  subtitle,
  subtext,
  contents,
}) {
  console.log(contents);
  return (
    <Wrap>
      <div className="inner">
        <h2>{title}</h2>
        {subtitle && <h3>{subtitle}</h3>}
        {subtext && <p>{subtext}</p>}
        <div className="content">
          {contents &&
            contents.map((content, i) => (
              <div className="lists">
                <div key={i}>{content.title && <h3>{content.title}</h3>}</div>

                {content.texts &&
                  content.texts.map((text, i) => <p key={i}>{text}</p>)}
              </div>
            ))}
        </div>
      </div>
    </Wrap>
  );
}
