import styled from 'styled-components';
import Link from 'next/link';
import Layout from '../elements/Layout';
import ImageHeader from '../components/ImageHeader';
import CircleImageSection from '../components/CircleImageSection';
import Quote from '../elements/Quote';

const Wrap = styled.div``;

export default function About() {
  return (
    <Layout
      title="About - Low Ears"
      desc="Sam Pearce, founder,  Low Ears, multi award winning business woman, ambassador for the beauty industry, champion for mental health education within customer facing industries.  Working to fight against stigma - who cares for the carers?  Changing the narrative about treatment methods, that one size does not fit all, healing isn't linear, it's entirely bespoke to the individual, one person at a time."
      url="https://lowears.co.uk/About"
    >
      <Wrap>
        <ImageHeader
          img="/img/headers/remedies.jpg"
          text="About"
          height="40vh"
        />
        <CircleImageSection
          img="/img/Sam.jpg"
          title="Sam Pearce"
          subtitle="Founder & Mental Wellness Advocate"
          buttons={[
            { buttonText: 'My Pedigree', buttonLink: '/Stories' },
            { buttonText: 'Press and Awards', buttonLink: '/Stories/Press' },
            { buttonText: 'Friends of LowEars', buttonLink: '/Friends' },
            { buttonText: 'Best In Breed', buttonLink: '/People' },
          ]}
          texts={[
            'Beauty Industry Ambassador, Mental Health Advocate & passionate well-being warrior for change within the service industry sector.',
            'Frustrated by the the unspoken agreement that those who work in a customer service environment are expected to be unqualified counsellors & fiercely determined to put the correct protocols in place to safeguard you, your team, and in turn your clients.  Teaching you the skills to put boundaries in place will benefit productivity and reduce the signs of burn out, absenteeism & presenteeism.   With over 23 years in the beauty industry and over 40 national and global awards for women in business and setting the standards within the beauty industry, Sam is fiercely determined to be the change. Sam is a qualified Mental Health First Aid train the trainer, Mindfulness Teacher, Coach & business mentor.',
          ]}
        />
        <Quote
          quote="“Self care isn’t about ego it’s about self-respect” - Sam Pearce"
          img="/img/headers/contact.jpg"
        />
        <CircleImageSection
          texts={[
            'Statistically we feel more comfortable disclosing our problems to a ‘stranger’ rather than a partner or relative, this means that those working in a customer facing role will be expected to provide this level of service, without the necessary training in place to safeguard their own mental health.',
            'The Low Ears name represents that sometimes words are too hard, communicating how you feel is complex on so many levels and especially during times of crisis and mental anguish,  a sign or signal that you are struggling can be enough.',
            'If you can’t measure it you can’t mend it.  The button is integrated into salon software, with a journalling facility to allow you to log your ‘mood’ or ear position, this can then be reviewed, its a preventative measure , your own mental wellbeing is paramount to your own survival.',
          ]}
        />
        <CircleImageSection
          img="/img/logo/GutFeeling.jpg"
          title="Gut feeling"
          subtitle="Hippocrates- ‘All disease begins in the gut’."
          texts={[
            'Gut feeling is an  instinctive feeling or intuition - learning to listen to your body, it is also the gut/brain axis component of the Low Ears Group.  The gut is referred to as ‘the second brain’.  90% of the bodies happy hormone serotonin is created in the digestive tract, therefore it makes sense to consider your gut health and mental health as one.',
            'We have our own nutritional practitioner available for consultation - to make a booking click the link below.',
          ]}
        />
        <a href="https://lowears.company.site">
          <button type="button">Book a Consultation</button>
        </a>
        <Quote height="50vh" img="/img/SamAbout.jpg" />
      </Wrap>
    </Layout>
  );
}
