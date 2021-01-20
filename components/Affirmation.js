import styled from 'styled-components';

const Wrap = styled.section`
  margin: 120px auto;
  padding: 20px;
  max-width: 800px;
  img {
    margin: 30px 0 0 0;
    max-width: 400px;
    border-radius: 4px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  }
`;

export default function Affirmation() {
  return (
    <Wrap>
      <h2>Take a screenshot for today's kind thought</h2>
      <img src="/img/aff/aff1.jpg" alt="" />
    </Wrap>
  );
}
