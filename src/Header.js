import React, { Fragment, useState } from 'react'

import data from './utils/data'
import * as classNames from './utils/classNames'

const { personal, contactInfo } = data;

export function Header() {
  return (
    <header className="bg-gray-100 border-purple-500 border-solid border-t-8 py-3">
      <div className={classNames.container}>
        <div className="md:flex md:-mx-2 print:flex print:-mx-2">
          <div className={`${classNames.column(2)} flex justify-center`}>
            <div className="relative">
              <span className="absolute top-0 left-0 rounded-full text-white bg-purple-500 w-8 h-8 z-20 text-center font-bold text-xl" style={{ lineHeight: '2rem' }}>S</span>
              <div className="w-32 h-32 overflow-hidden rounded-full">
                <img className="relative object-cover object-center" style={{ height: '100%', width: '100%' }} src={personal.image} alt="Sebastian Holgado" />
              </div>
            </div>
          </div>

          <div className={`${classNames.column(7)} text-center mt-4 md:text-left print:text-left md:mt-0 print:mt-0`}>
            <div style={{ maxWidth: '400px' }}>
              <h1 className="font-display text-purple-500 text-3xl font-bold leading-none">{personal.name}</h1>
              <p className="text-gray-800 text-xl font-thin">{personal.title}</p>
              <p className="text-sm mt-4">{personal.extract}</p>
            </div>
          </div>

          <div className={`${classNames.column(3)} text-center mt-6 md:text-left md:mt-0 print:text-left print:mt-0`}>
            <p className={`${classNames.title} mb-4`}>{contactInfo.title}</p>
            <ul className="text-sm">
              {contactInfo.entries.map(({ title, value, id }) => (
                <li className="mt-1" key={id}>
                  <p className="text-xs uppercase text-gray-500">{title}</p>
                  <p>{value}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}