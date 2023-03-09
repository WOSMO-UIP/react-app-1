import React from 'react'

import CardFooter from './CardFooter'
import SectionI from './SectionI'
import SectionII from './SectionII'

export default function MainCard() {
  return (
    <div className="MainCard">
      <SectionI name="Muhammad Wasif" jobtitle="Student" />
      <SectionII About="About" Intrests="Intrests" />
      <CardFooter  />
    </div>
  )
}


