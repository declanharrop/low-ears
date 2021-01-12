import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  padding: 5vh 20px;
  h1 {
    margin: 8vh 0 0 0;
  }
`;

export default function BookAppointment() {
  return (
    <Wrap>
      <h1>Book An Appointment</h1>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/lowears/2hourconsultation?primary_color=006c08"
        style={{ minWidth: '300px', height: '80vh' }}
      />
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
      />
    </Wrap>
  );
}
