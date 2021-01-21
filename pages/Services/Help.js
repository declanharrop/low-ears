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
      desc="A- Z resources of charities and organisations that can provide support and advise during times of crisis."
      url="https://lowears.co.uk/Services/Help"
    >
      <ImageHeader img="/img/headers/help1.jpg" height="60vh" text="Help" />
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
          ]}
          website="www.anxietyuk.org.uk"
        />
        <CircleImageSection
          subtitle="Bipolar UK"
          texts={[
            'A charity helping people living with manic depression or bipolar disorder.',
          ]}
          website="www.bipolaruk.org.uk"
        />
        <CircleImageSection
          subtitle="CALM"
          texts={[
            'CALM is the Campaign Against Living Miserably. A charity providing a mental health helpline and webchat.',
            'Phone: 0800 58 58 58 (daily, 5pm to midnight)',
          ]}
          website="www.thecalmzone.net"
        />
        <CircleImageSection
          subtitle="HULLO"
          texts={[
            'Here to chat, volunteer service that allows you to chat to someone - no one should ever be alone, if you feel isolated, need to unwind and get some guidance, we are here to say hullo.',
            'Phone: 0800 001 4455 (9am -9pm)',
          ]}
          website="www.hullo.org"
        />
        <CircleImageSection
          subtitle="Men's Health Forum"
          texts={['24/7 stress support for men by text, chat and email.']}
          website="www.menshealthforum.org.uk"
        />
        <CircleImageSection
          subtitle="Mental Health Foundation"
          texts={[
            'Provides information and support for anyone with mental health problems or learning disabilities.',
          ]}
          website="www.mentalhealth.org.uk"
        />
        <CircleImageSection
          subtitle="Mind"
          texts={[
            'Promotes the views and needs of people with mental health problems.',
            'Phone: 0300 123 3393 (Monday to Friday, 9am to 6pm)',
          ]}
          website="www.mind.org.uk"
        />
        <CircleImageSection
          subtitle="No Panic"
          texts={[
            'Voluntary charity offering support for sufferers of panic attacks and obsessive compulsive disorder (OCD). Offers a course to help overcome your phobia or OCD.',
            "Phone: 0844 967 4848 (daily, 10am to 10pm). Calls cost 5p per minute plus your phone provider's Access Charge",
          ]}
          website="www.nopanic.org.uk"
        />
        <CircleImageSection
          subtitle="OCD Action"
          texts={[
            'Support for people with OCD. Includes information on treatment and online resources.',
            "Phone: 0845 390 6232 (Monday to Friday, 9.30am to 5pm). Calls cost 5p per minute plus your phone provider's Access Charge",
          ]}
          website="www.ocdaction.org.uk"
        />
        <CircleImageSection
          subtitle="OCD UK"
          texts={[
            'A charity run by people with OCD, for people with OCD. Includes facts, news and treatments.',
            'Phone: 0333 212 7890 (Monday to Friday, 9am to 5pm)',
          ]}
          website="www.ocduk.org"
        />
        <CircleImageSection
          subtitle="PAPYRUS"
          texts={[
            'Young suicide prevention society.',
            'Phone: HOPElineUK 0800 068 4141 (9am to midnight, every day of the year)',
          ]}
          website="www.papyrus-uk.org"
        />
        <CircleImageSection
          subtitle="Rethink Mental Illness"
          texts={[
            'Support and advice for people living with mental illness.',
            'Phone: 0300 5000 927 (Monday to Friday, 9.30am to 4pm)',
          ]}
          website="www.rethink.org"
        />
        <CircleImageSection
          subtitle="Samaritans"
          texts={[
            'Confidential support for people experiencing feelings of distress or despair.',
            'Phone: 116 123 (free 24-hour helpline)',
          ]}
          website="www.samaritans.org.uk"
        />
        <CircleImageSection
          subtitle="SANE"
          texts={[
            'Emotional support, information and guidance for people affected by mental illness, their families and carers.',
            'Textcare: comfort and care via text message, sent when the person needs it most: www.sane.org.uk/textcare',
            'Peer support forum: www.sane.org.uk/supportforum',
          ]}
          website="www.sane.org.uk/support"
        />
        <CircleImageSection
          subtitle="YoungMinds"
          texts={[
            'Information on child and adolescent mental health. Services for parents and professionals.',
            "Phone: Parents' helpline 0808 802 5544 (Monday to Friday, 9.30am to 4pm)",
          ]}
          website="www.youngminds.org.uk"
        />
        <CircleImageSection
          title="Abuse (child, sexual, domestic violence)"
          subtitle="NSPCC"
          texts={[
            "Children's charity dedicated to ending child abuse and child cruelty.",
            'Phone: 0800 1111 for Childline for children (24-hour helpline)',
            '0808 800 5000 for adults concerned about a child (24-hour helpline)',
          ]}
          website="www.nspcc.org.uk"
        />
        <CircleImageSection
          subtitle="Refuge"
          texts={[
            'Advice on dealing with domestic violence.',
            'Phone: 0808 2000 247 (24-hour helpline)',
          ]}
          website="www.refuge.org.uk"
        />
        <CircleImageSection
          title="Alcohol misuse"
          subtitle="Alcoholics Anonymous"
          texts={[
            " A free self-help group. Its '12 step' programme involves getting sober with the help of regular face-to-face and online support groups.",
            'Phone: 0800 917 7650 (24-hour helpline)',
          ]}
          website="www.alcoholics-anonymous.org.uk"
        />
        <CircleImageSection
          subtitle="Al-Anon"
          texts={[
            "Al-Anon is a free self-help “12 step” group for anyone whose life is or has been affected by someone else's drinking",
            'Phone: 0800 0086 811 (daily, 10am to 10pm)',
          ]}
          website="https://www.al-anonuk.org.uk/"
        />
        <CircleImageSection
          subtitle="Drinkline"
          texts={[
            "A free confidential helpline for people worried about their own or someone else's drinking.",
            'Phone: 0300 123 1110 (weekdays 9am to 8pm, weekends 11am to 4pm)',
          ]}
        />
        <CircleImageSection
          subtitle="National Association for Children of Alcoholics"
          texts={[
            'National Association for Children of Alcoholics offers free confidential advice and information to everyone affected by a parent’s drinking including children, adults and professionals.',
            'Phone: 0800 358 3456 (Friday, Saturday and Monday 12pm to 7pm and Tuesday, Wednesday and Thursday 12pm to 9pm)',
          ]}
          website="https://www.nacoa.org.uk/"
        />
        <CircleImageSection
          subtitle="SMART Recovery UK"
          texts={[
            ' SMART Recovery UK face-to-face and online groups help people decide whether they have a problem with alcohol and drugs, build up their motivation to change, and offer a set of proven tools and techniques to support recovery.',
            'Phone: 0330 053 6022 for general enquiries about SMART Recovery UK (9am to 5pm, Monday-Friday)',
          ]}
          website="https://smartrecovery.org.uk/"
        />
        <CircleImageSection
          title="Alzheimer's"
          subtitle="Alzheimer's Society"
          texts={[
            'Provides information on dementia, including factsheets and helplines.',
            'Phone: 0300 222 1122 (Monday to Friday, 9am to 5pm and 10am to 4pm on weekends)',
          ]}
          website="www.alzheimers.org.uk"
        />
        <CircleImageSection
          title="Bereavement"
          subtitle="Cruse Bereavement Care"
          texts={['Phone: 0808 808 1677 (Monday to Friday, 9am to 5pm)']}
          website="www.cruse.org.uk"
        />
        <CircleImageSection
          title="Crime victims"
          subtitle="Rape Crisis"
          texts={[
            'To find your local services phone: 0808 802 9999 (daily, 12pm to 2.30pm and 7pm to 9.30pm)',
          ]}
          website="www.rapecrisis.org.uk"
        />
        <CircleImageSection
          subtitle="Victim Support"
          texts={['Phone: 0808 168 9111 (24-hour helpline)']}
          website="www.victimsupport.org"
        />
        <CircleImageSection
          title="Drug misuse"
          subtitle="Cocaine Anonymous"
          texts={[
            'A free self-help group. Its "12 step" programme involves stopping using cocaine and all other mind-altering substances with the help of regular face-to-face and online support groups.',
            'Phone: 0800 612 0225 (daily, 10am to 10pm)',
          ]}
          website="https://cocaineanonymous.org.uk/"
        />
        <CircleImageSection
          subtitle="FRANK"
          texts={[
            "Free, confidential information and advice about drugs, their effects and the law. FRANK's live chat service runs daily from 2pm to 6pm.",
            'Phone: 0300 1236600 (24-hour helpline)',
            'Text a question to: 82111',
          ]}
          website="https://www.talktofrank.com/"
        />
        <CircleImageSection
          subtitle="Marijuana Anonymous"
          texts={[
            'A free self-help group. Its "12 step" programme involves stopping using marijuana with the help of regular face-to-face and online support groups.',
            'Phone: 0300 124 0373 (callback service)',
          ]}
          website="http://www.marijuana-anonymous.org.uk/"
        />
        <CircleImageSection
          subtitle="Narcotics Anonymous"
          texts={[
            'A free self-help group. Its "12 step" programme involves stopping using drugs with the help of regular face-to-face and online support groups.',
            'Phone: 0300 999 1212 (daily, 10am to midnight)',
          ]}
          website="www.ukna.org"
        />
        <CircleImageSection
          subtitle="SMART Recovery UK"
          texts={[
            'SMART Recovery UK face-to-face and online groups help people decide whether they have a problem with alcohol and drugs, build up their motivation to change, and offer a set of proven tools and techniques to support recovery.',
            'Phone: 0330 053 6022 for general enquiries about SMART Recovery UK (9am to 5pm, Monday-Friday)',
          ]}
          website="https://smartrecovery.org.uk/"
        />
        <CircleImageSection
          title="Eating disorders"
          subtitle="Beat"
          texts={[
            'Phone: 0808 801 0677 (adults) or 0808 801 0711 (for under-18s)',
          ]}
          website="www.b-eat.co.uk"
        />
        <CircleImageSection
          title="Gambling"
          subtitle="Gamblers Anonymous"
          texts={['', '']}
          website=""
        />
        <CircleImageSection
          subtitle=""
          texts={[
            'A free self-help group. Its "12 step" programme involves stopping gambling with the help of regular face-to-face and online support groups.',
            'Phone: 0330 094 0322 (24-hour)',
          ]}
          website="https://www.gamblersanonymous.org.uk/"
        />
        <CircleImageSection
          subtitle="Gam-Anon"
          texts={[
            'A free self-help group. Its "12 step" programme is for those affected by someone else’s gambling with the help of regular face-to-face and online support groups.',
            'Phone: 08700 50 88 80',
          ]}
          website="www.gamanon.org.uk"
        />
        <CircleImageSection
          subtitle="National Gambling Helpline"
          texts={['Phone: 0808 8020 133 (daily, 8am to midnight)']}
          website="www.begambleaware.org"
        />
        <CircleImageSection
          subtitle="National Problem Gambling Clinic"
          texts={[
            'A specialist NHS clinic for problem gamblers aged 13 and over.',
            'Phone: 020 7381 7722 (callback)',
          ]}
          website="https://www.cnwl.nhs.uk/services/mental-health-services/addictions-and-substance-misuse/national-problem-gambling-clinic"
        />
        <CircleImageSection
          title="Learning disabilities"
          subtitle="Mencap"
          texts={[
            'Charity working with people with a learning disability, their families and carers.',
            'Phone: 0808 808 1111 (Monday to Friday, 9am to 5pm)',
          ]}
          website="www.mencap.org.uk"
        />
        <CircleImageSection
          title="Parenting"
          subtitle="Family Lives"
          texts={[
            'Advice on all aspects of parenting, including dealing with bullying.',
            'Phone: 0808 800 2222 (Monday to Friday, 9am to 9pm and Saturday to Sunday, 10am to 3pm)',
          ]}
          website="www.familylives.org.uk"
        />
        <CircleImageSection
          title="Relationships"
          subtitle="Relate"
          texts={["The UK's largest provider of relationship support."]}
          website="www.relate.org.uk"
        />
      </Wrap>
    </Layout>
  );
}
