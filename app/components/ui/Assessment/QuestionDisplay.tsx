"use client"

import { Button } from "@/app/components/ui/Button"
import { Card, CardContent } from "@/app/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radio-group"
import { Label } from "@/app/components/ui/label"
import { CheckCircle, Flag, XCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { IoIosArrowForward } from "react-icons/io"
import { IoIosArrowBack } from "react-icons/io"
import { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "../popover"
import { Textarea } from "../textarea"

interface Question {
  id: number
  question: string
  options: { id: string; text: string }[]
  correctAnswerId: string
}

interface QuestionDisplayProps {
  currentQuestion: Question
  currentQuestionIndex: number
  totalQuestions: number
  selectedAnswers: Record<number, string>
  showResults: boolean
  handleSelectAnswer: (questionId: number, optionId: string) => void
  handlePrevious: () => void
  handleNext: () => void
  courseName: string
}

export default function QuestionDisplay({
  currentQuestion,
  currentQuestionIndex,
  totalQuestions,
  selectedAnswers,
  showResults,
  handleSelectAnswer,
  handlePrevious,
  handleNext,
  courseName
}: QuestionDisplayProps) {
  const [isReportPopoverOpen, setIsReportPopoverOpen] = useState(false)
  const [reportText, setReportText] = useState("")

  const handleSubmitReport = () => {
    console.log("Report submitted for question:", currentQuestion.id)
    console.log("Report content:", reportText)
    setIsReportPopoverOpen(false)
    setReportText("")
  }

  return (
    <Card className="p-4 sm:p-6">
      <CardContent className="p-0">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
          <span className="bg-gradient-to-r from-[#9333EA]/10 to-[#DB2777]/10 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </span>
          <span className="text-gray-500 text-sm">{courseName}</span>
        </div>

        <h2 className="text-lg sm:text-xl font-semibold mb-6">{currentQuestion.question}</h2>

        <RadioGroup
          value={selectedAnswers[currentQuestion.id] || ""}
          onValueChange={(value) => handleSelectAnswer(currentQuestion.id, value)}
          className="grid gap-3 sm:gap-4"
        >
          {currentQuestion.options.map((option) => {
            const isSelected = selectedAnswers[currentQuestion.id] === option.id
            const isCorrectOption = option.id === currentQuestion.correctAnswerId
            const isUserAnswerCorrect = isSelected && isCorrectOption
            const isUserAnswerIncorrect = isSelected && !isCorrectOption

            return (
              <div
                key={option.id}
                className={cn(
                  "flex items-center rounded-lg border-2 p-3 sm:p-4 transition-colors duration-200",
                  showResults && isCorrectOption && "border-[#41D53E]",
                  showResults && isUserAnswerIncorrect && "border-[#FF6868]",
                  !showResults && isSelected && "border-purple-500 bg-purple-50",
                )}
              >
                <RadioGroupItem
                  value={option.id}
                  id={`option-${option.id}`}
                  className="mr-2 sm:mr-3"
                  disabled={showResults}
                />
                <Label
                  htmlFor={`option-${option.id}`}
                  className="w-full cursor-pointer text-base sm:text-lg font-medium flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-0"
                >
                  <span>{option.text}</span>
                  {showResults && isCorrectOption && (
                    <span className="bg-[#41D53E] text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" /> Correct Answer
                    </span>
                  )}
                  {showResults && isUserAnswerIncorrect && (
                    <span className="bg-[#ED4545] text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <XCircle className="w-3 h-3 sm:w-4 sm:h-4" /> Your answer
                    </span>
                  )}
                </Label>
              </div>
            )
          })}
        </RadioGroup>

        {showResults && selectedAnswers[currentQuestion.id] !== currentQuestion.correctAnswerId && (
          <div className="mt-4 sm:mt-6 p-2 sm:p-3 bg-orange-50 border border-orange-200 text-orange-700 rounded-lg flex items-center gap-2 text-sm sm:text-base">
            <XCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Note quite right, but good try!</span>
          </div>
        )}

        <div className="flex flex-col-reverse sm:flex-row justify-between mt-6 sm:mt-8 gap-4 sm:gap-0">
          <div className="flex justify-start">
            <Popover open={isReportPopoverOpen} onOpenChange={setIsReportPopoverOpen}>
              <PopoverTrigger asChild>
                <Button 
                  className="bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white p-2 sm:p-0"
                  size="sm"
                >
                  <Flag className="w-4 h-4 sm:w-5 sm:h-5"/>
                </Button>
              </PopoverTrigger>
              <PopoverContent
                side="top"
                align="start"
                sideOffset={10}
                className="w-[300px] p-4 rounded-lg shadow-lg"
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-gray-900">Report Question</h3>
                  <Textarea
                    placeholder="Describe the issue "
                    className="min-h-[100px]"
                    value={reportText}
                    onChange={(e) => setReportText(e.target.value)}
                  />
                  <div className="flex justify-end gap-2">
                    <Button 
                      variant="outline" 
                      onClick={() => setIsReportPopoverOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      className="bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white"
                      onClick={handleSubmitReport}
                      disabled={!reportText.trim()}
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex justify-between sm:justify-end gap-2 sm:gap-3">
            <Button 
              onClick={handlePrevious} 
              disabled={currentQuestionIndex === 0} 
              className="text-black rounded-none text-sm sm:text-base" 
              variant='outline' 
              size="lg"
            >
              <IoIosArrowBack className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Previous</span>
            </Button>
            <Button 
              onClick={handleNext} 
              className="bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white rounded-none text-sm sm:text-base" 
              size="lg"
            >
              <span className="hidden sm:inline">Next</span>
              <IoIosArrowForward className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}