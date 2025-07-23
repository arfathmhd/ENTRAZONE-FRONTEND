"use client"

import { CalendarDays, Video, FileText, Clock } from "lucide-react"
import { Button } from "@/app/components/ui/Button"
import { Card } from "@/app/components/ui/card"
import { FiBookOpen } from "react-icons/fi"

export function DailyTasks({ date }: { date: Date }) {
  return (
    <div className="rounded-lg bg-white">
      <div className="mb-6 flex items-center gap-4 bg-gradient-to-r from-[#F3E8FF] to-[#FDF2F8] py-16 px-14 max-md:px-6 max-md:py-10">
        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white max-md:h-12 max-md:w-12">
          <CalendarDays className="h-8 w-8 max-md:h-6 max-md:w-6" />
        </div>
        <div>
          <h3 className="text-2xl font-bold max-md:text-xl">
            {date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          </h3>
          <p className="text-sm text-gray-600">{date.getFullYear()}</p>
        </div>
      </div>
     <div className="p-6 max-md:p-4">

      <section className="mb-8">
        <h4 className="mb-4 flex items-center gap-2 text-lg font-semibold max-md:text-base">
          <Video className="h-5 w-5 text-gray-700" />
          Assessments&nbsp;&amp;&nbsp;Exams
        </h4>

        <Card className="rounded-lg bg-gradient-to-r from-[#F3E8FF]/40 to-[#FDF2F8]/20 p-4 shadow-sm">
        <div className="flex items-start justify-between max-md:flex-col max-md:gap-4">

          <div className="space-y-1">
            <h5 className="text-xl font-bold max-md:text-lg">Algebra Fundamentals</h5>
            <p className="text-sm text-gray-600">Accounting Introduction&nbsp;1</p>
            <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
              <Clock className="h-3 w-3" />
              <span>2&nbsp;hr</span>
              <span>•</span>
              <span>10&nbsp;questions</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 max-md:w-full">
            <span className="rounded-full bg-[#9333EA38]/22 text-center px-2 py-1 text-xs font-medium text-purple-700">
              available
            </span>
            <Button className="rounded-none bg-gradient-to-r from-[#9333EA] to-[#DB2777] px-6 py-2 text-white shadow-md transition-opacity hover:opacity-90 max-md:w-full max-md:py-1.5 max-md:text-sm">
              Start Exam
            </Button>
          </div>
        </div>
        </Card>
      </section>

      <section>
        <h4 className="mb-4 flex items-center gap-2 text-lg font-semibold max-md:text-base">
          <FiBookOpen className="h-5 w-5 text-gray-700" />
          Study&nbsp;Materials
        </h4>

        <div className="grid gap-4">
          <Card className="rounded-lg bg-white p-4 shadow-sm">
           <div className="flex items-start justify-between max-md:flex-col max-md:gap-4">
            <div className="flex gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-yellow-100 text-yellow-700 max-md:h-12 max-md:w-12">
                <FileText className="h-8 w-8 max-md:h-6 max-md:w-6" />
              </div>
              <div>
                <h5 className="text-base font-bold max-md:text-sm">Accounting Fundamentals&nbsp;Guide</h5>
                <p className="text-xs text-gray-500">Accounting</p>
              </div>
            </div>
              <Button className="rounded-none bg-gradient-to-r from-[#9333EA] to-[#DB2777] px-6 py-2 text-white shadow-md transition-opacity hover:opacity-90 max-md:w-full max-md:py-1.5 max-md:text-sm">
                Open&nbsp;Pdf
              </Button>
           </div>
          </Card>

          <Card className="rounded-lg bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between max-md:flex-col max-md:items-start max-md:gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-blue-100 text-blue-700 max-md:h-12 max-md:w-12">
                <Video className="h-8 w-8 max-md:h-6 max-md:w-6" />
              </div>
              <div>
                <h5 className="text-base font-bold max-md:text-sm">Balance Sheet&nbsp;Tutorial</h5>
                <p className="text-xs text-gray-500">Accounting</p>
              </div>
            </div>
            <Button className="rounded-none bg-gradient-to-r from-[#9333EA] to-[#DB2777] px-6 py-2 text-white shadow-md transition-opacity hover:opacity-90 max-md:w-full max-md:py-1.5 max-md:text-sm">
              Watch
            </Button>
            </div>
          </Card>
        </div>
      </section>
     </div>
    </div>
  )
}