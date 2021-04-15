import CircleImageSection from '../components/CircleImageSection';
import Layout from '../elements/Layout';
import ImageHeader from '../components/ImageHeader';

export default function People() {
  return (
    <>
      <Layout
        title="Best In Breed - Low Ears"
        desc="Welcome to Low Ears we ..."
        url="https://lowears.co.uk/People"
      />
      <ImageHeader
        img="/img/headers/people.jpg"
        text="Best In Breed"
        height="60vh"
      />
      <div>
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
          img="/img/people/laura.jpg"
          title="Laura Meeson"
          subtitle="Premier Software"
          texts={[
            'Laura has worked with Premier Software for nearly 14 years. In her role as account manager, she has seen first-hand the pressure the spa and wellness industries are under.',
            'Since her recovery from breast cancer, Laura has been passionate about encouraging spas to welcome all guests with confidence. Looking back a few years, there was a lot of nervousness around treating cancer patients, but thankfully this stigma is starting to shift. With some complimentary treatments now available through the NHS, and new training courses educating the industry, many spas now have specialist therapists.',
            'Just as carefully chosen treatments can have a beneficial effect on cancer patients, the same can be said for those suffering with poor mental health. Spas help soothe the mind as well as the body, leading to increased feelings of happiness.',
            'as such, therapists find themselves offering treatments to those who need it most. However, sometimes the emotional baggage can become too much. Who is looking after the therapist? Who cares for the carers?',
            'Together in partnership, Premier Software have added a direct link from its booking software to Low Ears. This gives therapists direct access to mentoring, education, and resources to improve their wellbeing. The aim is to encourage spa teams across the globe to recognise the importance of safeguarding their team’s mental health for the future.',
          ]}
        />
        {/* <CircleImageSection
          img="/img/people/elizabeth.png"
          title="Laila Charlesworth BSc, ANutr, BSc Hons"
          subtitle="Registered Associate Nutritionist"
          texts={[
            'Laila Charlesworth is an effervescent Scandinavian with a huge passion for her chosen profession in Nutrition having achieved a first class degree in Nutrition, Food and Health at Leeds Trinity University.',
            '‘I am passionate about educating people about the importance of nutrition and the impact it has on physical and mental well-being.  Working in functional medicine, seeing positive results, some life changing, driven to empower people to take control of their own health on every level is the most rewarding part of my job, which isn’t a job really, it’s a vocation’',
            'Laila regularly contributes in editorial & on TV & Radio and is a regular on BBC Radio Leeds & Look North.',
            'Laila is our best in breed and her interest in functional medicine & the gut/brain axis, in particular the link to gut health and mental health.',
            'Together we have created our Gut Feeling range of symbiotic wellness.  These supplement ‘bundles’ - harness unrivalled knowledge, combining supplements & nutritional advise.',
            'To gut to the bottom of what is concerning you please contact us:-',
          ]}
        /> */}
        {/* <CircleImageSection
          img="/img/people/laila.png"
          title="Elizabeth Caroline"
          // subtitle="Registered Associate Nutritionist"
          texts={[
            'Elizabeth Caroline is a spa owner and an ordained lay Zen Buddhist who has studied mindfulness and meditation for over 22 years.  Her mindfulness journey began whilst she was serving in the Metropolitan Police, a practice she developed as a means of managing the pressures and stressors that naturally presented themselves in such a demanding job role. Having studied mindfulness and meditation with her first tutor for over 18 years, she went on to formally qualify as a Zen Mindfulness and Meditation Tutor with her current teacher, an ordained English Rinzai Zen Master.  It’s Elizabeth sincere hope that through her teachings, courses and guided practices she may inspire others to explore a more compassionate, peaceful and mindful way of living.',
            'Elizabeth is our best in breed mindfulness teacher and will share her expansive knowledge with you through individual sessions and guided meditations.',
            "Despite how open, peaceful, and loving you attempt to be, people can only meet you as deeply as they've met themselves.  This is the heart of clarity.'",
          ]}
        /> */}
      </div>
    </>
  );
}
