import React, { Fragment, useState } from 'react'

import data from './utils/data'
import * as classNames from './utils/classNames'
import { Header } from './Header'

const { workExperience, education, skills, languages } = data;

export function Resume() {
  return (
    <Fragment>
      <Header />

      <main className="py-3">
        <div className={classNames.container}>
          <div className={classNames.grid}>
            <div className={classNames.column(9)}>
              <section className="md:w-11/12 print:w-11/12">
                <h2 className={classNames.title}>{workExperience.title}</h2>
                {workExperience.entries.map(({ role, employer, period, description, tasks }) => (
                  <div className="border-purple-300 border-solid border-l-4 pl-4 mt-6">
                    <p className="text-gray-700"><span className="text-purple-500">{employer}</span> | {period}</p>
                    <h3 className="text-xl font-medium font-display">{role} </h3>
                    {description && <p className="text-gray-700 mb-3" >{description}</p>}
                    <ul className="text-xs tasks">
                      {tasks && tasks.map(task => (
                        <li className="pl-3 mt-1 text-gray-600 relative" key={task}>
                          <span className="absolute left-0 text-purple-500">-</span>
                          <div dangerouslySetInnerHTML={{ __html: task }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>
            </div>

            <aside className={`${classNames.column(3)} mt-6 md:mt-0 print:mt-0`}>
              <p className={`${classNames.title} mb-4`}>{skills.title}</p>
              <h2>{skills.description}</h2>
              {skills.entries.map(({ title, fields }) => (
                <Fragment>
                  <p className="text-sm text-purple-500 font-bold text-vi mb-2 mt-4">{title}</p>
                  {fields.map((field, i) => (
                    <div key={field} className="">
                      {field}
                    </div>
                  ))}
                </Fragment>
              ))}

              <h2 className={`${classNames.title} mt-5`}>{languages.title}</h2>
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

              <h2 className={`${classNames.title} mt-5`}>{education.title}</h2>
              <ul>
                {education.entries.map(({ title, entity, period, description }) => (
                  <li className="mt-4" key={title}>
                    <p>{title} <span className="text-purple-500 text-xs">- {period}</span></p>
                    <p className="text-gray-500 mb-3" >{entity}</p>
                    <p className="text-xs text-gray-500">{description}</p>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </main>

      {/* <footer className="bg-gray-100 py-4 text-center md:text-left print:fixed print:bottom-0 print:left-0 print:right-0 print:text-left">
        <div className={classNames.container}>
          <div className="md:flex md:items-center print:flex print:items-center">
            <p className={`${classNames.title} md:w-2/12 print:w-2/12`}>{findMeOn.title}</p>
            {findMeOn.entries.map(({ name, value }) => (
              <div className="mt-3 md:w-3/12 md:mt-0 print:w-3/12 print:mt-0">
                <p>{name}</p>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </footer> */}
    </Fragment>
  );
}