import { DailyCalendar } from "@/app/components/ui/calender/DailyCalendar"
import { DailyTasks } from "@/app/components/ui/calender/DailyTasks"


export default function DailyTasksPage() {
  const date = new Date(2025, 5, 30) 

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <DailyCalendar />
        <DailyTasks date={date} />
    </div>
  )
}