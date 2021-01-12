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
          height="40vh"
        />
        <CircleImageSection
          img="/img/Sam.jpg"
          title="Sam Pearce"
          subtitle="Founder & Mental Wellness Advocate"
          buttonText="My Pedigree"
          buttonLink="/Stories"
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
        <Quote height="50vh" img="/img/SamAbout.jpg" />
        <Quote
          height="20vh"
          quote="BEST IN BREED"
          img="/img/headers/remedies.jpg"
        />
        <CircleImageSection
          img="/img/people/penny.jpg"
          title="Penny Emmett"
          texts={[
            'I am a mother of 2 with diverse interests outside of the office!',
            "For some time, I was the family 'breadwinner' and spent over 30 years in a tough, sales focussed industry from joining as a junior through to running my own business. During this time I was often called on to be a 'listening ear' for people in crisis and it occurred to me that companies often look after the physical health of their employees but rarely consider their mental health.",
            "Many 'talking' and 'caring' industries sadly neglect the mental health of their staff as we are all on a treadmill, trying to make everything work.  I truly believe that with a few small changes in environment and perception we can protect people far better. I am absolutely passionate in my quest support people be the best person they can be and achieve to their full potential.",
            'To this end I have become trained as a Mental Health First Aider and researched thoroughly how we can support one another in a positive and nurturing way.',
            'I look forward to supporting you and guiding through your training.',
          ]}
        />
        <CircleImageSection
          img="/img/people/elizabeth.png"
          title="Laila Charlesworth BSC, ANutr, BSC Hons"
          subtitle="Registered Associate Nutritionist"
          texts={[
            'Laila Charlesworth is an effervescent Scandinavian with a huge passion for her chosen profession in Nutrition having achieved a first class degree in Nutrition, Food and Health at Leeds Trinity University.',
            '‘I am passionate about educating people about the importance of nutrition and the impact it has on physical and mental well-being.  Working in functional medicine, seeing positive results, some life changing, driven to empower people to take control of their own health on every level is the most rewarding part of my job, which isn’t a job really, it’s a vocation’',
            'Laila regularly contributes in editorial & on TV & Radio and is a regular on BBC Radio Leeds & Look North.',
            'Laila is our best in breed and her interest in functional medicine & the gut/brain axis, in particular the link to gut health and mental health.',
            'Together we have created our Gut Feeling range of symbiotic wellness.  These supplement ‘bundles’ - harness unrivalled knowledge, combining supplements & nutritional advise.',
            'To gut to the bottom of what is concerning you please contact us:-',
          ]}
        />
        <CircleImageSection
          img="/img/people/laila.png"
          title="Elizabeth Caroline"
          // subtitle="Registered Associate Nutritionist"
          texts={[
            'Elizabeth Caroline is a spa owner and an ordained lay Zen Buddhist who has studied mindfulness and meditation for over 22 years.  Her mindfulness journey began whilst she was serving in the Metropolitan Police, a practice she developed as a means of managing the pressures and stressors that naturally presented themselves in such a demanding job role. Having studied mindfulness and meditation with her first tutor for over 18 years, she went on to formally qualify as a Zen Mindfulness and Meditation Tutor with her current teacher, an ordained English Rinzai Zen Master.  It’s Elizabeth sincere hope that through her teachings, courses and guided practices she may inspire others to explore a more compassionate, peaceful and mindful way of living.',
            'Elizabeth is our best in breed mindfulness teacher and will share her expansive knowledge with you through individual sessions and guided meditations.',
            "Despite how open, peaceful, and loving you attempt to be, people can only meet you as deeply as they've met themselves.  This is the heart of clarity.'",
          ]}
        />
      </Wrap>
    </Layout>
  );
}
