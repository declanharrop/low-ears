import React from 'react';
import styled from 'styled-components';
import CircleImageSection from '../../components/CircleImageSection';
import ColorSection from '../../components/ColorSection';
import ImageHeader from '../../components/ImageHeader';
import Layout from '../../elements/Layout';
import Quote from '../../elements/Quote';
import EducationReviews from '../../components/EducationReviews';

const Wrap = styled.div``;

export default function Education() {
  return (
    <>
      <Layout
        title="Education - Low Ears"
        desc="Welcome to Low Ears we ..."
        url="https://lowears.co.uk/services/education"
      >
        <Wrap>
          <ImageHeader
            img="/img/headers/education.jpg"
            height="60vh"
            text="Education"
          />
          <CircleImageSection
            texts={[
              "We are passionate about providing unrivalled training and learning experiences, our courses provide the foundations of knowledge and guide you to implement this learning into every area of your life.  I have created what wasn't ever available for me.",
              'Each potential student is interviewed (informally) for our unique onboarding service prior to undertaking any of our courses as a safeguarding process for all parties.',
              "We send you 'doggy bags' our emotional bundles to support you during your training.",
              'We limit the numbers of attendees due to the sensitive subject matter.',
            ]}
          />
          <Quote
            height="60vh"
            quote="'Education is the most powerful weapon you can use to change the world' - Nelson Mandela "
            img="/img/headers/education2.jpg"
          />
          <ColorSection
            title="Low Ears pre-recorded distance half day course in awareness of first aid for mental health"
            subtitle="£111/Person"
            contents={[
              {
                title: 'The course highlights include',
                texts: [
                  'Raising awareness of mental health first aid within the workplace. The course takes approximately 6 hours to complete.',
                  'This 6-hour introductory course has been created to provide you with knowledge and awareness to identify suspected mental health conditions in another.  We will guide you to learning the skills to start a conversation and be able to signpost the person towards the right professional help.  The course comprises of study materials and pre-recorded guided videos.  Everything you need will be sent via email and is password protected once you register.',
                  'This course is ideally suited for:- those who would like a basic overview of what first aid for mental health is, for businesses or organisations who already have a qualfied mental health first aider but would like additional staff members/colleagues to have a better understanding of the role & the ability to support this person if needed.',
                ],
              },
            ]}
          />
          <ColorSection
            title="Low Ears Mental Health Awareness 1 day course"
            subtitle="£275/person"
            subtext="Unrivalled industry-endorsed training combining over 23 years of multi-award-winning knowledge, conventional MHFAE & tailored techniques combining multiple training methods."
            contents={[
              {
                title: 'The course highlights include:-',
                texts: [
                  'Access to a fully qualified first aid for mental health trainer and assessor',
                  'Take part in the on-boarding process',
                  'A fully endorsed and accredited formal certificate',
                ],
              },
              {
                title: 'What you will learn',
                texts: [
                  'This course will inform, support you and build your confidence in someone who may be experiencing mental distress, not just in the work place but also in life, providing the skills to address this.  The course content will enhance your overall understanding of specific mental health behaviours and how this information can be utilised within your personal and professional life, it educates you on identifying the main mental health conditions and how to provide advice and how to start a conversation with someone.',
                ],
              },
              {
                title: 'Topics covered',
                texts: [
                  'Changing the language about mental health within the work place',
                  'Stress',
                  'Depressive conditions',
                  'Boundaries',
                  'Self-Harm',
                  'Eating disorders',
                  'Grief',
                  'Anxiety',
                  'The Impact of social media',
                  'How to implement change',
                  'Signposting',
                  'Safeguarding',
                  'Changing the narrative',
                  'Knowing how to implement a positive mental health culture in the workplace',
                  'Understand the mental health first aid plan and implementation',
                ],
              },
              {
                title: 'Group bookings POA',
                texts: ['These courses are run remotely via zoom'],
              },
              {
                title: 'Before you register, please make sure you:',
                texts: [
                  'Are over the age of 18',
                  'That you set aside a full day for the training, we would also recommend being mindful that the course content can impact on your levels of tiredness',
                  'Understand the subject matter can be triggering',
                  'Inform the course tutor of any issues you need to discuss prior to the training day',
                  'Have access to a computer with a working microphone, camera and stable internet connection.',
                  'If attending the live webinars, agree to having the webinars recorded and used for the ongoing learning of students attending our online distance programmes.',
                ],
              },
              {
                title: 'Once you have confirmed your place on the course',
                texts: [
                  'You will receive a comprehensive welcome email from us',
                  'Please let us know if you have any additional learning needs or if we can support your learning in relation to a disability you may have.',
                ],
              },
            ]}
          />
          <ColorSection
            title="Black Dog Remedy Training"
            contents={[
              {
                title: 'Flower Essence training - £99',
                texts: [
                  'pre-recorded 2 hour introduction to the benefits retailing our 5 hero ‘bark flower essence’ remedies - 1 of each product included in course fee + marketing support',
                ],
              },
              {
                title:
                  'Flower Essence training - 2 day practitioner course £550',
                texts: [
                  'Including 38 remedy kit - this 14 hour course, will require 6 case studies prior to completion - for further information please contact us',
                ],
              },
            ]}
          />
          <EducationReviews />
        </Wrap>
      </Layout>
    </>
  );
}
