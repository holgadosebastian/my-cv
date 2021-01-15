import React, { Fragment } from 'react'
import './tailwind.output.css';

import data from './utils/data'
import * as classNames from './utils/classNames'

const { personal, contactInfo, workExperience, education, skills, languages, involvement, findMeOn } = data;

function App() {
  return (
    <Fragment>
      <header className="bg-gray-100 border-purple-300 border-solid border-t-8 py-6 px-8 ">
        <div className="md:flex md:-mx-2 print:flex print:-mx-2">
          <div className="flex justify-center px-2 md:w-2/12 print:w-2/12">
            <div className="relative">
              <span className="absolute top-0 left-0 rounded-full text-white bg-purple-300 w-8 h-8 z-20 text-center font-bold text-xl" style={{ lineHeight: '2rem' }}>S</span>
              <div className="w-32 h-32 overflow-hidden rounded-full">
                <img className="relative object-cover object-center" style={{ height: '100%', width: '100%' }} src={personal.image} alt="Sebastian Holgado" />
              </div>
            </div>
          </div>

          <div className="text-center mt-4 md:w-7/12 md:px-2 print:w-7/12 print:px-2 md:text-left print:text-left md:mt-0 print:mt-0">
            <div style={{ maxWidth: '400px' }}>
              <p className="font-display text-purple-400 text-3xl font-extralight">{personal.name}</p>
              <p className="text-gray-800 text-xl font-thin">{personal.title}</p>
              <p className="text-sm mt-4">{personal.extract}</p>
            </div>
          </div>
          
          <div className="text-center mt-6 md:w-3/12 md:px-2 md:text-left md:mt-0 print:w-3/12 print:px-2 print:text-left print:mt-0">
            <p className={`${classNames.title} mb-4`}>{contactInfo.title}</p>
            <ul className="text-sm">
              {contactInfo.entries.map(({title, value, id}) => (
                <li className="mt-1" key={id}>
                  <p className="text-xs uppercase text-gray-500">{title}</p>
                  <p>{value}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      <main className="py-6 px-4 md:flex md:px-8 md:-mx-2 print:flex print:px-8 print:-mx-2">
        <div className="md:w-9/12 md:px-2 print:w-9/12 print:px-2">
          <p className={classNames.title}>{workExperience.title}</p>
          {workExperience.entries.map(({role, employer, period, description, tasks }) => (
            <div className="border-purple-300 border-solid border-l-4 pl-4 mt-6">
              <p className="text-gray-700 text-xs">{period}</p>
              <p className="text-xl font-display">{role} <span className="text-purple-500 text-lg">- {employer}</span></p>
              { description && <p className="text-gray-700 mb-3" >{description}</p> }
              <ul className="text-xs">
                {tasks && tasks.map(task => (
                  <li className="pl-3 mt-1 text-gray-600 relative" key={task}>
                    <span className="absolute left-0 text-purple-500">-</span>
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <p className={`${classNames.title} mt-8 mb-4`}>{education.title}</p>
          <ul>
            {education.entries.map(({ title, entity, period, description }) => (
              <li key={title}>
                <p className="text-xl font-display">{title} <span className="text-purple-500 text-lg">- {entity}</span></p>
                <p className="text-gray-700 mb-3" >{period}</p>
                <p className="mt-4">{description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 md:w-3/12 md:px-2 md:mt-0 print:w-3/12 print:px-2 print:mt-0">
          <p className={`${classNames.title} mb-4`}>{skills.title}</p>
          <p>{skills.description}</p>
          {skills.entries.map(({ title, fields }) => (
            <Fragment>
              <p className="text-xs mb-2 mt-4">{title}</p>
              {fields.map((field, i) => (
                <span key={field} className="">
                  {i !== 0 && <span className="text-purple-500 font-bold"> - </span>}{/** */}
                  {field}
                </span>
              ))}
            </Fragment>
          ))}

          <p className={`${classNames.title} mt-5`}>{languages.title}</p>
          <ul>
            {languages.entries.map(({ name, level, description }) => (
              <li className="mt-4" key={name}>
                <p>{name} <span className="text-purple-500 text-xs">- {level}</span></p>
                {description && (
                  <p className="text-xs text-gray-500">{description}</p>
                )}
              </li>
            ))}
          </ul>

          <p className={`${classNames.title} mt-5`}>{involvement.title}</p>
          <p className="mt-4">{involvement.description}</p>
        </div>
      </main>

      <footer className="bg-gray-100 py-4 px-8 text-center md:text-left print:fixed print:bottom-0 print:left-0 print:right-0 print:text-left">
        <div className="md:flex md:items-center print:flex print:items-center">
          <p className={`${classNames.title} md:w-2/12 print:w-2/12`}>{findMeOn.title}</p>
          {findMeOn.entries.map(({ name, value }) => (
            <div className="mt-3 md:w-3/12 md:mt-0 print:w-3/12 print:mt-0">
              <p>{name}</p>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </footer>
    </Fragment>
  );
}

export default App;
