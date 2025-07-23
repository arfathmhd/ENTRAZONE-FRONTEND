import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { PerformanceOverviewCard } from "@/app/components/ui/exams/PerformanceOverviewCard"
import { SubjectPerformanceCard } from "@/app/components/ui/exams/SubjectPerformanceCard"
import { ExamAssessmentCard } from "@/app/components/ui/exams/ExamAssessmentCard"

interface SubjectPerformance {
  name: string
  score: number
}

interface ExamAssessment {
  title: string
  date: string
  duration: string
  subject: string
  correct: number
  wrong: number
  unanswered: number
  score: number
  total: number
}

const mockSubjectPerformance: SubjectPerformance[] = [
  { name: "Mathematics", score: 92 },
  { name: "Physics", score: 85 },
  { name: "Chemistry", score: 78 },
  { name: "Biology", score: 88 },
  { name: "English", score: 82 },
]

const mockExamAssessments: ExamAssessment[] = [
  {
    title: "Final Term Examination",
    date: "May 15, 2023",
    duration: "2 hours 30 mins",
    subject: "Mathematics",
    correct: 38,
    wrong: 2,
    unanswered: 0,
    score: 38,
    total: 40,
  },
  {
    title: "Mid Term Examination",
    date: "March 10, 2023",
    duration: "2 hours",
    subject: "Physics",
    correct: 32,
    wrong: 5,
    unanswered: 3,
    score: 32,
    total: 40,
  },
  {
    title: "Quarterly Assessment",
    date: "January 25, 2023",
    duration: "1 hour 30 mins",
    subject: "Chemistry",
    correct: 28,
    wrong: 7,
    unanswered: 5,
    score: 28,
    total: 40,
  },
]

export default function ExamResultsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-[#F3E8FF] to-[#FDF2F8] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <Link href="/" className="p-2 bg-white rounded-full transition-colors shrink-0 hover:bg-gray-100">
            <ArrowLeft className="w-5 h-5 text-gray-700" />
            <span className="sr-only">Go back</span>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Exam Results</h1>
            <p className="text-gray-600">Track your academic performance and progress</p>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <PerformanceOverviewCard overallPerformance={85} attemptExamCount={272} totalExamCount={51} />
          <SubjectPerformanceCard subjects={mockSubjectPerformance} />
        </div>
        <div className="lg:col-span-2 space-y-6">
          {mockExamAssessments.map((assessment, index) => (
            <ExamAssessmentCard key={index} assessment={assessment} />
          ))}
        </div>
      </main>
    </div>
  )
}
