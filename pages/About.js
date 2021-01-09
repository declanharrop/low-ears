import styled from 'styled-components';
import Layout from '../elements/Layout';
import ImageHeader from '../components/ImageHeader';
import CircleImageSection from '../components/CircleImageSection';
import Quote from '../elements/Quote';

const Wrap = styled.div``;

export default function About() {
  return (
    <Layout
      title="About - Low Ears"
      desc="Welcome to Low Ears we ..."
      url="https://lowears.co.uk/About"
    >
      <Wrap>
        <ImageHeader
          img="/img/headers/remedies.jpg"
          text="About"
          height="70vh"
        />
        <CircleImageSection
          img="/img/Sam.jpg"
          title="Sam Pearce"
          subtitle="Founder & Mental Wellness Advocate"
          texts={[
            'Beauty Industry Ambassador, Mental Health Advocate & passionate well-being warrior for change within the service industry sector.',
            'Frustrated by the the unspoken agreement that those who work in a customer service environment are expected to be unqualified counsellors & fiercely determined to put the correct protocols in place to safeguard you, your team, and in turn your clients.  Teaching you the skills to put boundaries in place will benefit productivity and reduce the signs of burn out, absenteeism & presenteeism.   With over 23 years in the beauty industry and over 40 national and global awards for women in business and setting the standards within the beauty industry, Sam is fiercely determined to be the change. Sam is a qualified Mental Health First Aid train the trainer, Mindfulness Teacher, Coach & business mentor.',
          ]}
        />
        <Quote />
      </Wrap>
    </Layout>
  );
}
