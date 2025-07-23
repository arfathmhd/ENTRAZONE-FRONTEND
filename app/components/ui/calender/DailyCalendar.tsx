import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "../Button"
import Link from "next/link"

export function DailyCalendar() {
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const dates = Array.from({ length: 30 }, (_, i) => i + 1) 

  return (
<>
        <div className="rounded-lg bg-white ">
          <div className="flex items-center bg-gradient-to-r from-[#F3E8FF] to-[#FDF2F8] py-16 px-14 justify-between mb-6">
                          <Link href="/" className="p-2 bg-white rounded-full transition-colors shrink-0">
                <ArrowLeft className="w-5 h-5" />
              </Link>

            <h2 className="text-2xl  font-bold">June 2025</h2>
            <div className="space-x-2">

            <Button variant="ghost" size="icon" className="rounded-full bg-white">
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous month</span>
            </Button>
                        <Button variant="ghost" size="icon" className="rounded-full bg-white">
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next month</span>
            </Button>
            </div>
          </div>
          <div className="p-6">

          <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium text-gray-600 mb-4">
            {daysOfWeek.map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2 text-center">
            {dates.map((date) => (
              <Link
                href="#"
                key={date}
                className={`flex items-center justify-center p-2 rounded-lg font-semibold text-lg transition-colors ${
                  date === 30
                    ? "bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white shadow-md"
                    : "hover:bg-gray-100"
                }`}
              >
                {date}
              </Link>
            ))}
          </div>
          </div>
        </div>
</>
  )
}