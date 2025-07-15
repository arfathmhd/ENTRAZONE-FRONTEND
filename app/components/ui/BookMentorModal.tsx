"use client"

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './dialog'
import { Button } from './Button'
import {
  X,
  Clock,
  Calendar,
  Timer,
} from "lucide-react"
import { Badge } from './badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select'
import { Textarea } from './textarea'
import { FiBookOpen } from 'react-icons/fi'
import { LuMessageSquare } from 'react-icons/lu'

function BookMentorModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
  const [selectedSubject, setSelectedSubject] = useState("Maths");

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md mx-auto p-0 gap-0 max-h-[90vh] overflow-y-auto w-[calc(100%-2rem)]">
          <DialogHeader className="p-4 sm:p-6 pb-4">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-lg sm:text-xl font-semibold">Book a Mentor</DialogTitle>
            </div>
            <Badge variant="secondary" className="bg-[#9333EA]/40 text-[#9333EA] w-fit mt-2">
              10/40 slots booked this week
            </Badge>
          </DialogHeader>

          <div className="px-4 sm:px-6 pb-6 space-y-4 sm:space-y-6">
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2">
                <FiBookOpen className="w-4 h-4"/>
                <label className="text-sm font-medium">Select Part</label>
              </div>
              <div className="flex gap-2 sm:gap-3">
                <Button
                  variant={selectedSubject === "Maths" ? "default" : "outline"}
                  className={`flex-1 py-4 sm:py-7 text-sm sm:text-md ${selectedSubject === "Maths" ? "bg-gradient-to-r from-[#9333EA] to-[#DB2777]" : ""}`}
                  onClick={() => setSelectedSubject("Maths")}
                >
                  Maths
                </Button>
                <Button
                  variant={selectedSubject === "Biology" ? "default" : "outline"}
                  className={`flex-1 py-4 sm:py-7 text-sm sm:text-md ${selectedSubject === "Biology" ? "bg-gradient-to-r from-[#9333EA] to-[#DB2777]" : ""}`}
                  onClick={() => setSelectedSubject("Biology")}
                >
                  Biology
                </Button>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <label className="text-sm font-medium">Select Topic</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                <Button
                  variant={selectedSubject === "Maths" ? "default" : "outline"}
                  className={`py-2 sm:py-1 text-xs whitespace-normal break-words h-auto ${selectedSubject === "Maths" ? "bg-gradient-to-r from-[#9333EA] to-[#DB2777]" : ""}`}
                  onClick={() => setSelectedSubject("Maths")}
                >
                  Concept of co-operation Part 1
                </Button>
                <Button
                  variant={selectedSubject === "Biology" ? "default" : "outline"}
                  className={`py-2 sm:py-1 text-xs whitespace-normal break-words h-auto ${selectedSubject === "Biology" ? "bg-gradient-to-r from-[#9333EA] to-[#DB2777]" : ""}`}
                  onClick={() => setSelectedSubject("Biology")}
                >
                  Concept of co-operation Part 2
                </Button>
                <Button
                  variant={selectedSubject === "Biology" ? "default" : "outline"}
                  className={`py-4 sm:py-7 text-xs whitespace-normal break-words h-auto col-span-2 sm:col-span-1 ${selectedSubject === "Biology" ? "bg-gradient-to-r from-[#9333EA] to-[#DB2777]" : ""}`}
                  onClick={() => setSelectedSubject("Biology")}
                >
                  Features, Objectives 
                </Button>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2">
                <Timer className="w-4 h-4 text-gray-600" />
                <label className="text-sm font-medium">Select Slot Duration</label>
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30min">30 minutes</SelectItem>
                  <SelectItem value="45min">45 minutes</SelectItem>
                  <SelectItem value="60min">60 minutes</SelectItem>
                  <SelectItem value="90min">90 minutes</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-600" />
                <label className="text-sm font-medium">Select Date</label>
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="tomorrow">Tomorrow</SelectItem>
                  <SelectItem value="day-after">Day After Tomorrow</SelectItem>
                  <SelectItem value="next-week">Next Week</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-600" />
                <label className="text-sm font-medium">Select Time Slot</label>
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="9am">9:00 AM - 10:00 AM</SelectItem>
                  <SelectItem value="10am">10:00 AM - 11:00 AM</SelectItem>
                  <SelectItem value="11am">11:00 AM - 12:00 PM</SelectItem>
                  <SelectItem value="2pm">2:00 PM - 3:00 PM</SelectItem>
                  <SelectItem value="3pm">3:00 PM - 4:00 PM</SelectItem>
                  <SelectItem value="4pm">4:00 PM - 5:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2">
                <LuMessageSquare className="w-4 h-4"/>
                <label className="text-sm font-medium">Enter Agenda of Session</label>
              </div>
              <Textarea
                placeholder="Describe what you'd like to discuss in this mentoring session..."
                className="min-h-[80px] resize-none"
              />
            </div>

            <Button className="w-full bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white py-4 sm:py-2">
              Book Mentor Session
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default BookMentorModal