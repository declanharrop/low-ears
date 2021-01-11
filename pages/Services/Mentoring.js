import React from 'react';
import styled from 'styled-components';
import CircleImageSection from '../../components/CircleImageSection';
import ColorSection from '../../components/ColorSection';
import ImageHeader from '../../components/ImageHeader';
import MentoringReviews from '../../components/MentoringReviews';
import NoneColorSection from '../../components/NoneColorSection';
import Layout from '../../elements/Layout';
import Quote from '../../elements/Quote';

const Wrap = styled.div``;

export default function Mentoring() {
  return (
    <Layout
      title="Mentoring - Low Ears"
      desc="Welcome to Low Ears we ..."
      url="https://lowears.co.uk/services/mentoring"
    >
      <Wrap>
        <ImageHeader
          height="60vh"
          text="Mentoring"
          img="/img/headers/mentoring.jpg"
        />
        <CircleImageSection
          texts={[
            'Having been there, done that and worn/own the entire wardrobe, I am ideally placed to be able to offer you a no nonsense, focussed, programme of works to not only support you and your business holistically.',
            'Working together to provide an emotional audit of your life, are you ready to be the best version of you?',
          ]}
        />
        <Quote
          quote="'I am not what happened to me, I am what I choose to become.' - Carl Jung"
          img="/img/headers/contact.jpg"
        />
        <NoneColorSection
          contents={[
            {
              title: "3 C's BRAND - CREATION, CONCEPT & CURATION",
              texts: [
                'Curate feasibility analysis',
                'Intuition coaching',
                'Create a targeted multi-faceted business plan',
                'Forecast market trends and compatibility',
                'Market challenges and comparison',
                'Create Unique Spa Concept',
                'Programmed & Menu Development',
                'Brand Development',
                'USP Exploration',
                'Customer journey',
                'Product Partnerships',
                'Evolve Retail Potential',
                'Exit strategy',
              ],
            },
          ]}
        />
        <ColorSection
          contents={[
            {
              title: 'PRODUCTIVITY COACH',
              texts: [
                'Preparation of SOPS Manual including all standard operating procedures',
                'Source and implement supporting booking software up booking software',
                'Busting energy blocks',
                'Staff Recruitment #groan',
                'Collaboration options',
                'Mind management',
                'Inhouse staff training pod',
                'Mental Health Training',
                'Trend led treatment curation and delivery',
                'Spa management coaching',
                'Staff assessment and development plan',
                'Business tool-kit',
                '12-month plan',
                'Marketing & PR Strategy',
                'Pre-Opening and Launch Strategy',
                'Industry profiling/positioning',
              ],
            },
          ]}
        />
        <NoneColorSection
          contents={[
            {
              title: 'MENTAL HEALTH',
              texts: [
                'Targeted training for customer facing roles',
                'Intention',
                'Peer to Peer training',
                'Tags',
                'Imposter syndrome',
                'Managing client mental health',
                "3 F's - Fear, Fobia, Foe",
                'Signposting',
                'Client disclosure',
                'Protection methods',
                'Curating treatment offering with mental health in mind',
                'Supporting professional and retail products',
                'Treatment performance',
                'Mental health first aid - levels 1-3',
                'Self - harm training module',
                'Grief module',
              ],
            },
          ]}
        />
        <ColorSection
          contents={[
            {
              title: 'OWN BRAND CREATION',
              texts: [
                'Who/what/why/when',
                'Signature touches and product development',
                'Integration',
                'Capsule streamlined collection',
                'Smart business',
                'Website curation',
                'Brand positioning',
                'Product Offering',
                'Treatment Development',
                'Design & Packaging',
                'Launch & Events',
                'IP',
              ],
            },
          ]}
        />
        <MentoringReviews />
      </Wrap>
    </Layout>
  );
}
