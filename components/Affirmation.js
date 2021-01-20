import styled from 'styled-components';

const Wrap = styled.section`
  margin: 120px auto;
  padding: 20px;
  max-width: 800px;
  video {
    margin: 30px 0 0 0;
    max-width: 560px;
    border-radius: 4px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  }
  @media only screen and (max-width: 600px) {
    video {
      max-width: 300px;
    }
  }
`;

export default function Affirmation() {
  return (
    <Wrap>
      <h2>Take a screenshot for today's kind thought</h2>
      <video src="/aff.mp4" type="video/mp4" autoPlay loop muted />
    </Wrap>
  );
}
