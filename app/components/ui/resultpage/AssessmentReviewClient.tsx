"use client";

import { ArrowLeft, CheckCircle2, XCircle, BarChart3 } from "lucide-react";
import Link from "next/link";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { LiaTrophySolid } from "react-icons/lia";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import QuestionReviewItem from "@/app/components/ui/resultpage/QuestionReviewItem";
import { useState } from "react";

interface Question {
  id: number;
  question: string;
  options: {
    id: string;
    text: string;
  }[];
  correctAnswerId: string;
  userAnswerId?: string;
}

interface AssessmentReviewProps {
  initialData: {
    questions: Question[];
    correctAnswersCount: number;
    wrongAnswersCount: number;
    unansweredCount: number;
    finalScore: number;
  };
}

export default function AssessmentReviewClient({ initialData }: AssessmentReviewProps) {
  const [questions] = useState<Question[]>(initialData.questions);
  const [correctAnswersCount] = useState(initialData.correctAnswersCount);
  const [wrongAnswersCount] = useState(initialData.wrongAnswersCount);
  const [unansweredCount] = useState(initialData.unansweredCount);
  const [finalScore] = useState(initialData.finalScore);

  const [activeTab, setActiveTab] = useState("all");

  const filteredQuestions = questions.filter((q) => {
    const status = 
      !q.userAnswerId ? "unanswered" : 
      q.userAnswerId === q.correctAnswerId ? "correct" : "wrong";
    
    if (activeTab === "all") return true;
    if (activeTab === "correct") return status === "correct";
    if (activeTab === "wrong") return status === "wrong";
    if (activeTab === "unanswered") return status === "unanswered";
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-[#F3E8FF] to-[#FDF2F8] border-b border-gray-200 px-4 sm:px-6 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex md:flex-row flex-col items-center justify-between gap-4">
            <div className="flex items-start ">     
              <Link
                href="/"
                className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-700" />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-12">
              <Card className="bg-gradient-to-br from-[#9E78F5] to-[#662FC5] text-white p-4">
                <div className="flex gap-20 items-center">
                  <div>
                    <h3 className="text-sm font-medium text-[#BDBBBB]">
                      Final Score
                    </h3>
                    <p className="text-3xl font-bold my-1">{finalScore}%</p>
                    <Badge className="bg-[#41D53E] text-white px-2 text-xs font-medium">
                      {finalScore >= 70 ? "Passed" : "Failed"}
                    </Badge>
                  </div>
                  <LiaTrophySolid className="text-5xl mb-2" />
                </div>
              </Card>
              <Card className="p-4 py-8">
                <div className="flex gap-20 items-center">
                  <div>
                    <h3 className="text-sm font-medium text-gray-700">
                      Correct Answers
                    </h3>
                    <p className="text-3xl font-bold text-gray-900">
                      {correctAnswersCount}
                    </p>
                  </div>
                  <CheckCircle2 className="w-8 h-8 text-green-500 mb-2" />
                </div>
              </Card>
              <Card className="p-4 py-8">
                <div className="flex gap-20 items-center">
                  <div>
                    <h3 className="text-sm font-medium text-gray-700">
                      Wrong Answers
                    </h3>
                    <p className="text-3xl font-bold text-gray-900">
                      {wrongAnswersCount}
                    </p>
                  </div>
                  <XCircle className="w-8 h-8 text-red-500 mb-2" />
                </div>
              </Card>
              <Card className="p-4 py-8">
                <div className="flex gap-20 items-center">
                  <div>
                    <h3 className="text-sm font-medium text-gray-700">
                      Unanswered
                    </h3>
                    <p className="text-3xl font-bold text-gray-900">
                      {unansweredCount}
                    </p>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold text-gray-500">?</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 md:py-8">
        <Card className="p-6 shadow-sm border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 className="w-6 h-6 text-gray-700" />
            <h2 className="text-2xl font-semibold text-gray-900">
              Question Review
            </h2>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid gap-1 w-full grid-cols-2 md:grid-cols-4 mb-9 md:mb-6">
              <TabsTrigger value="all">All ({questions.length})</TabsTrigger>
              <TabsTrigger value="correct">Correct ({correctAnswersCount})</TabsTrigger>
              <TabsTrigger value="wrong">Wrong ({wrongAnswersCount})</TabsTrigger>
              <TabsTrigger value="unanswered">Unanswered ({unansweredCount})</TabsTrigger>
            </TabsList>
            {['all', 'correct', 'wrong', 'unanswered'].map((tab) => (
              <TabsContent key={tab} value={tab} className="space-y-6">
                {filteredQuestions.map((q, index) => (
                  <QuestionReviewItem
                    key={q.id}
                    question={q}
                    questionNumber={index + 1}
                    selectedAnswerId={q.userAnswerId}
                    correctAnswerId={q.correctAnswerId}
                  />
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </Card>
      </div>
    </div>
  );
}