import { Lock, Clock, FileText, Star, Play } from "lucide-react";
import { Button } from "../Button";

interface Assessment {
  id: string;
  title: string;
  description: string;
  duration: string;
  questions: number;
  isUnlocked: boolean;
  score?: string;
  attempts?: number;
  color: string;
  buttonColor: string;
}

export const AssessmentCard = ({ assessment }: { assessment: Assessment }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex justify-center mb-4">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${assessment.color}`}
        >
          {assessment.isUnlocked ? <FileText className="w-6 h-6" /> : <Lock className="w-5 h-5" />}
        </div>
      </div>

      <div className="text-center mb-4">
        <h3 className={`font-bold text-lg mb-2 ${assessment.isUnlocked ? "text-gray-900" : "text-gray-500"}`}>
          {assessment.title}
        </h3>
        <p className={`text-sm mb-4 ${assessment.isUnlocked ? "text-gray-600" : "text-gray-400"}`}>
          {assessment.description}
        </p>

        <div className="space-y-2 text-sm text-gray-600 mb-4">
          <div className="flex items-center justify-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{assessment.duration}</span>
          </div>
          <div className="flex items-center justify-center gap-1">
            <FileText className="w-4 h-4" />
            <span>{assessment.questions} questions</span>
          </div>
        </div>

        {assessment.score && (
          <div className="mb-4">
            <div className="text-center rounded-full justify-center text-[#10B981] font-semibold bg-[#10B98120] ">
              <span className="text-sm">Your Score: {assessment.score}</span>
            </div>

          </div>
        )}
      </div>

      <Button className={`w-full ${assessment.buttonColor} text-white`} disabled={!assessment.isUnlocked}>
        {assessment.isUnlocked ? (assessment.score ? "Retake Exam" : "Start Exam") : "Locked"}
      </Button>
     {assessment.attempts && (
              <p className="text-xs text-gray-500 mt-1 text-center">Attempts: {assessment.attempts}</p>
            )}
    </div>
  );
};
