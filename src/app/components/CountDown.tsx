"use client"
import Countdown from "react-countdown"

import React from 'react'

const endingDate = new Date("2024-09-28")

const CountDown = () => {

  return (
   
<Countdown className="font-bold text-yellow-300 text-5xl" date={endingDate}/>

   
  )
}

export default CountDown