import React from 'react';
import styled from 'styled-components';
import CircleImageSection from '../../components/CircleImageSection';
import ImageHeader from '../../components/ImageHeader';
import Layout from '../../elements/Layout';

const Wrap = styled.div`
  .leading {
    margin: 6vh auto;
    padding: 20px;
    max-width: 1000px;
    h3 {
      text-transform: none;
      letter-spacing: 0.1rem;
    }
  }
`;

export default function Help() {
  return (
    <Layout
      title="Help - Low Ears"
      desc="Welcome to Low Ears we ..."
      url="https://lowears.co.uk/Services/Help"
    >
      <ImageHeader
        img="/img/headers/education.jpg"
        height="60vh"
        text="Education"
      />
      <Wrap>
        <div className="leading">
          <h3>
            'We understand that it can be so hard asking for help because you
            believe you are weak, a failure, not worthy of help, the list is
            endless, speaking first hand, from experience, those tentative steps
            to find some 'outside' support can be the difference.'
          </h3>
        </div>
        <CircleImageSection
          title="A to Z"
          subtitle="Anxiety UK"
          texts={[
            'Charity providing support if you have been diagnosed with an anxiety condition.',
            'Phone: 03444 775 774 (Monday to Friday, 9.30am to 5.30pm)',
            'Website: www.anxietyuk.org.uk',
          ]}
        />
        <CircleImageSection
          subtitle="Bipolar UK"
          texts={[
            'A charity helping people living with manic depression or bipolar disorder.',
            'Website: www.bipolaruk.org.uk',
          ]}
        />
        <CircleImageSection
          subtitle="CALM"
          texts={[
            'CALM is the Campaign Against Living Miserably. A charity providing a mental health helpline and webchat.',
            'Phone: 0800 58 58 58 (daily, 5pm to midnight)',
            'Website: www.thecalmzone.net',
          ]}
        />
        <CircleImageSection
          subtitle="HULLO"
          texts={[
            'Here to chat, volunteer service that allows you to chat to someone - no one should ever be alone, if you feel isolated, need to unwind and get some guidance, we are here to say hullo.',
            'Phone: 0800 001 4455 (9am -9pm)',
            'Website:hullo.org',
          ]}
        />
        {/* <CircleImageSection
          subtitle="Bipolar UK"
          texts={[
            'A charity helping people living with manic depression or bipolar disorder.',
            'Website: www.bipolaruk.org.uk',
          ]}
        />
        <CircleImageSection
          subtitle="Bipolar UK"
          texts={[
            'A charity helping people living with manic depression or bipolar disorder.',
            'Website: www.bipolaruk.org.uk',
          ]}
        />
        <CircleImageSection
          subtitle="Bipolar UK"
          texts={[
            'A charity helping people living with manic depression or bipolar disorder.',
            'Website: www.bipolaruk.org.uk',
          ]}
        /> */}
      </Wrap>
    </Layout>
  );
}
