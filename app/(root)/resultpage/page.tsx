// app/assessment-review/page.tsx

import AssessmentReviewClient from "@/app/components/ui/resultpage/AssessmentReviewClient";

const getAssessmentData = () => {
  return {
    questions: [
      {
        id: 1,
        question: "What is the capital of France?",
        options: [
          { id: "A", text: "London" },
          { id: "B", text: "Paris" },
          { id: "C", text: "Berlin" },
          { id: "D", text: "Madrid" }
        ],
        correctAnswerId: "B",
        userAnswerId: "B"
      },
      {
        id: 2,
        question: "Which planet is known as the Red Planet?",
        options: [
          { id: "A", text: "Venus" },
          { id: "B", text: "Mars" },
          { id: "C", text: "Jupiter" },
          { id: "D", text: "Saturn" }
        ],
        correctAnswerId: "B",
        userAnswerId: "A" 
      },
      {
        id: 3,
        question: "What is 2 + 2?",
        options: [
          { id: "A", text: "3" },
          { id: "B", text: "4" },
          { id: "C", text: "5" },
          { id: "D", text: "6" }
        ],
        correctAnswerId: "B",
        userAnswerId: undefined 
      }
    ],
    correctAnswersCount: 1,
    wrongAnswersCount: 1,
    unansweredCount: 1,
    finalScore: 33
  };
};

export default function AssessmentReviewPage() {
  const assessmentData = getAssessmentData(); 
  
  return (
    <AssessmentReviewClient
      initialData={assessmentData}
    />
  );
}