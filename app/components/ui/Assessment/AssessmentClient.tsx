"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/app/components/ui/Button"
import Timer from "./Timer"
import QuestionNavigation from "./QuestionNavigation"
import QuestionDisplay from "./QuestionDisplay"

interface Question {
  id: number
  question: string
  options: { id: string; text: string }[]
  correctAnswerId: string
}

interface AssessmentClientProps {
  questions: Question[]
  courseId: number
  courseName: string
}

export default function AssessmentClient({ 
  questions, 
  courseId, 
  courseName 
}: AssessmentClientProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  const currentQuestion = questions[currentQuestionIndex]
  const totalQuestions = questions.length

  const handleSelectAnswer = (questionId: number, optionId: string) => {
    if (!showResults) {
      setSelectedAnswers((prev) => ({
        ...prev,
        [questionId]: optionId,
      }))
    }
  }

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const handleSubmit = () => {
    setShowResults(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-[#F3E8FF] to-[#FDF2F8] border-b border-gray-200 px-4 sm:px-6 py-8 md:py-14">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-3 sm:gap-5">
              <Link href="/" className="p-2 bg-white rounded-full transition-colors shrink-0">
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              
              <div className="space-y-1 sm:space-y-2">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900">Review Questions</h1>
                <p className="text-xs sm:text-sm md:text-base text-gray-600">{courseName}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto justify-between sm:justify-normal">
              <Timer showResults={showResults} />
              <Button
                className="bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white px-4 sm:px-7 py-2 sm:py-3 rounded-full text-sm sm:text-base"
                onClick={handleSubmit}
              >
                Finish
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 md:py-8 grid grid-cols-1 lg:grid-cols-[minmax(200px,250px)_1fr] gap-4 sm:gap-6">
        <QuestionNavigation
          questions={questions}
          currentQuestionIndex={currentQuestionIndex}
          selectedAnswers={selectedAnswers}
          showResults={showResults}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
        />

        <QuestionDisplay
          currentQuestion={currentQuestion}
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={totalQuestions}
          selectedAnswers={selectedAnswers}
          showResults={showResults}
          handleSelectAnswer={handleSelectAnswer}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          courseName={courseName}
        />
      </div>
    </div>
  )
}