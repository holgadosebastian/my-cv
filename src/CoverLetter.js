import React, { Fragment, useState } from 'react'

import data from './utils/data'
import * as classNames from './utils/classNames'

import { Header } from './Header'

const { personal, contactInfo, workExperience, education, skills, languages, involvement, findMeOn } = data;

const paragraphs = [
  {
    id: 1,
    content: 'I\'m Sebastián Holgado, native from Argentina, but have been living in Berlin, Germany for close to 7 years.'
  },
  {
    id: 2,
    content: 'I\'ve been passionate about Software development since my early college years and can honestly said that this passion and hunger for knowledge hasn\'t subsided.'
  },
  {
    id: 3,
    content: 'Right now, I have accumulated over a decade worth of knowledge and also experience in projects, which has given me the tools to be able to be a very efficient communicator as well as knowledge sharer. It is also one of my passions to be able to share my knowledge as well as learn from my peers.'
  },
  {
    id: 4,
    content: 'I\'ve participated in projects in different capacities. Both on the UI as well as the functional end. In the Front End, as well as the Back End. As a lead, as well as following someone elses lead. Through good team work, I\'ve been able to accomplish complex tasks and meet deadlines, as well as troubleshoot impromptu issues and offer guidance when needed.'
  },
  {
    id: 5,
    content: 'I also think it\'s important to mention that even though my journey as a Front End developer hasn\'t led me to learn every tool, language or framework, I can say that I\'m not afraid to learn something new. The Web Development landscape is far and wide and I\'m eager to learn or even put to practice, some of the things that I haven\'t been able to properly use thus far.'
  },
  {
    id: 6,
    content: 'I\'m looking forward to seeing if my skills would be a good match with people in the team.'
  },
];

export function CoverLetter() {
  return (
    <Fragment>
      <Header />

      <main className="py-3">
        <div className={classNames.container}>
          <p className={classNames.title}>Cover Letter</p>

          {paragraphs.map(({ id, content }) => (
            <p id={id} className='mt-5'>{content}</p>
          ))}
        </div>
      </main>
    </Fragment>
  );
}