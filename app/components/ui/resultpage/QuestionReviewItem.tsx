"use client"

import { CheckCircle2, XCircle } from "lucide-react"
import { Card } from "../card";
import { cn } from "@/lib/utils";
import { Badge } from "../badge";

interface Question {
  id: number;
  question: string;
  options: { id: string; text: string }[];
  correctAnswerId: string;
  userAnswerId?: string;
}


interface QuestionReviewItemProps {
  question: Question
  questionNumber: number
  selectedAnswerId?: string
  correctAnswerId: string
}

export default function QuestionReviewItem({
  question,
  questionNumber,
  selectedAnswerId,
  correctAnswerId,
}: QuestionReviewItemProps) {
  const isCorrect = selectedAnswerId === correctAnswerId
  const isWrong = selectedAnswerId && selectedAnswerId !== correctAnswerId
  const isUnanswered = !selectedAnswerId

  return (
    <Card
      className={cn(
        "p-6 border-2",
        isCorrect && "border-green-500 bg-green-50",
        isWrong && "border-[#FF0000] bg-[#FF0000]/2",
        isUnanswered && "border-gray-300 bg-gray-50",
      )}
    >
      <div className="flex items-center gap-2 mb-4">
        {isCorrect && <CheckCircle2 className="w-6 h-6 text-green-500" />}
        {isWrong && <XCircle className="w-6 h-6 text-red-500" />}
        {isUnanswered && <span className="text-gray-500 text-xl font-bold">?</span>}
        <h3 className="text-lg font-semibold text-gray-900">Question {questionNumber}</h3>
        {isCorrect && (
          <Badge className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">Correct</Badge>
        )}
        {isWrong && <Badge className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">Wrong</Badge>}
      </div>
      <p className="text-black mb-1 text-2xl font-semibold">{question.question}</p>
      <div className="grid gap-3">
        {question.options.map((option) => {
          const isUserAnswer = selectedAnswerId === option.id
          const isCorrectAnswer = correctAnswerId === option.id

          return (
            <div
              key={option.id}
              className={cn(
                "flex items-center justify-between rounded-md p-3 text-gray-700",
                isCorrectAnswer && "bg-white text-black border-2 border-[#23FA39]",
                isUserAnswer && !isCorrectAnswer && "bg-white text-black border-2 border-[#FF0000]",
              )}
            >
              <span className="font-medium">
                {option.id.replace("option", "").toUpperCase()}. {option.text}
              </span>
              {isUserAnswer && !isCorrectAnswer && (
                <Badge className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">Your Answer</Badge>
              )}
              {isCorrectAnswer && (
                <Badge className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                  Correct Answer
                </Badge>
              )}
            </div>
          )
        })}
      </div>
    </Card>
  )
}
