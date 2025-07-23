"use client"

import { Clock } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { GoClockFill } from "react-icons/go";


function Timer({showResults}:{showResults:boolean}) {
  const [timeLeft, setTimeLeft] = useState(74) 

  useEffect(() => {
    if (!showResults && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1)
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [showResults, timeLeft])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  return (
    <div className="flex items-center gap-2 bg-white p-2 rounded-full text-sm sm:text-base">
      <GoClockFill className="w-4 h-4 sm:w-5 sm:h-5" />
      <span className="font-medium">{formatTime(timeLeft)}</span>
    </div>  
  )
}

export default Timer