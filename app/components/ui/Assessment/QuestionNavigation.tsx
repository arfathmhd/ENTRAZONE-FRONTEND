"use client"

import { Button } from "@/app/components/ui/Button"
import { Card, CardContent } from "@/app/components/ui/card"
import { cn } from "@/lib/utils"
import { LuFlag } from "react-icons/lu"

interface Question {
  id: number
  question: string
  options: { id: string; text: string }[]
  correctAnswerId: string
}

interface QuestionNavigationProps {
  questions: Question[]
  currentQuestionIndex: number
  selectedAnswers: Record<number, string>
  showResults: boolean
  setCurrentQuestionIndex: (index: number) => void
}

export default function QuestionNavigation({
  questions,
  currentQuestionIndex,
  selectedAnswers,
  showResults,
  setCurrentQuestionIndex
}: QuestionNavigationProps) {
  return (
    <Card className="p-3 sm:p-4">
      <CardContent className="p-0">
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <LuFlag className="w-4 h-4 sm:w-5 sm:h-5" />
          <h3 className="font-semibold text-base sm:text-lg">Questions</h3>
        </div>

        <div className="grid grid-cols-5 xs:grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-4 gap-1 sm:gap-2">
          {questions.map((q, index) => {
            const isCurrent = index === currentQuestionIndex
            const isAnswered = selectedAnswers[q.id] !== undefined
            const isCorrect = selectedAnswers[q.id] === q.correctAnswerId

            return (
              <Button
                key={q.id}
                variant="outline"
                size="icon"
                className={cn(
                  "w-8 h-8 sm:w-10 sm:h-10 rounded-md text-sm sm:text-base",
                  isCurrent && "bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white",
                  showResults && isAnswered && isCorrect && "bg-[#41D53E] border-green-500 text-white",
                  showResults && isAnswered && !isCorrect && "bg-[#ED4545] border-red-500 text-white",
                )}
                onClick={() => setCurrentQuestionIndex(index)}
              >
                {index + 1}
              </Button>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}