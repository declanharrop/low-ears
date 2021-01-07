import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  margin: 20px;
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
