import { ArrowLeft, Home, Ruler, Globe, Dna, TestTube, Lock, Clock, FileText, Star, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { AssessmentCard } from "@/app/components/ui/CoursePage/AssessmentCard";
import ClientCardComponent from "@/app/components/ui/CoursePage/ClientCardComponent";

interface Chapter {
  id: number;
  title: string;
  description: string;
  isUnlocked: boolean;
  hasVideo?: boolean;
  duration?: string;
  videoId?: string;
  rating?: number;
}

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

const subjectData: Record<string, any> = {
  mathematics: {
    name: "Mathematics",
    description: "Mathematical concepts for business and academic applications",
    icon: <Ruler className="w-6 h-6 text-white" />,
    iconBg: "bg-gradient-to-br from-blue-400 to-blue-600",
  },
  "social-science": {
    name: "Social Science",
    description: "Understanding society, culture, and human behavior",
    icon: <Globe className="w-6 h-6 text-white" />,
    iconBg: "bg-gradient-to-br from-green-400 to-green-600",
  },
  biology: {
    name: "Biology",
    description: "Study of living organisms and life processes",
    icon: <Dna className="w-6 h-6 text-white" />,
    iconBg: "bg-gradient-to-br from-purple-400 to-pink-500",
  },
  chemistry: {
    name: "Chemistry",
    description: "Understanding matter, atoms, and chemical reactions",
    icon: <TestTube className="w-6 h-6 text-white" />,
    iconBg: "bg-gradient-to-br from-orange-400 to-red-500",
  },
};

const getChapters = (): Chapter[] => [
  {
    id: 1,
    title: "Algebra Fundamentals",
    description: "Basic algebraic operations and equation solving",
    isUnlocked: true,
  },
  {
    id: 2,
    title: "Geometry & Trigonometry",
    description: "Geometric shapes, angles, and trigonometric functions",
    isUnlocked: true,
  },
  {
    id: 3,
    title: "Statistics & Probability",
    description: "Statistical analysis and probability calculations",
    isUnlocked: false,
  },
  {
    id: 4,
    title: "Calculus Basics",
    description: "Introduction to differential and integral calculus",
    isUnlocked: false,
  },
  {
    id: 5,
    title: "Advanced Problem Solving",
    description: "Master complex mathematical problem-solving techniques",
    isUnlocked: true,
    hasVideo: true,
    duration: "45 min",
    videoId: "tTb3d5cjSFI",
    rating: 4.8
  },
  {
    id: 6,
    title: "Real-World Applications",
    description: "See how mathematics applies to everyday situations",
    isUnlocked: true,
    hasVideo: true,
    duration: "42 min",
    videoId: "dQw4w9WgXcQ",
    rating: 4.9
  },
  {
    id: 7,
    title: "Mathematical Proofs",
    description: "Learn the art of mathematical reasoning and proofs",
    hasVideo: true,
    isUnlocked: false,
    duration: "38 min",
    videoId: "dQw4w9WgXcQ",
    rating: 4.6
  },
  {
    id: 8,
    title: "Exam Preparation",
    description: "Comprehensive review for mathematics examinations",
    hasVideo: true,
    isUnlocked: false,
    duration: "55 min",
    videoId: "dQw4w9WgXcQ",
    rating: 4.5
  },
];

const getAssessments = (): Assessment[] => [
  {
    id: "1",
    title: "Algebra Assessment",
    description: "Test your understanding of algebraic concepts",
    duration: "60 mins",
    questions: 25,
    isUnlocked: true,
    score: "85%",
    attempts: 3,
    color: "bg-gradient-to-r from-[#10B981] to-[#059669]",
    buttonColor: "bg-gradient-to-r from-[#10B981] to-[#059669]",
  },
  {
    id: "2",
    title: "Geometry Quiz",
    description: "Evaluate your geometry and trigonometry skills",
    duration: "40 mins",
    questions: 15,
    isUnlocked: true,
    color: "bg-gradient-to-r from-[#F59E0B] to-[#D97706]",
    buttonColor: "bg-gradient-to-r from-[#F59E0B] to-[#D97706]",
  },
  {
    id: "3",
    title: "Statistics Test",
    description: "Evaluate your geometry and trigonometry skills",
    duration: "40 mins",
    questions: 15,
    isUnlocked: false,
    color: "bg-gray-400",
    buttonColor: "bg-gray-400",
  },
  {
    id: "4",
    title: "Final Exam",
    description: "Complete mathematics course assessment",
    duration: "120 mins",
    questions: 50,
    isUnlocked: false,
    color: "bg-gray-400",
    buttonColor: "bg-gray-400",
  },
];




export default async function CoursePage({ params }: { params: { slug: string } }) {
  const { slug } = await params; 
  const subject = subjectData[slug];

  if (!subject) {
    return <div>Subject not found</div>;
  }

  const chapters = getChapters();
  const assessments = getAssessments();




  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-[#F3E8FF] to-[#FDF2F8] border-b border-gray-200 px-4 sm:px-6 py-6 sm:py-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Link href="/" className="p-2 bg-white rounded-full transition-colors shrink-0">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div className="flex items-center gap-3">
                <div className='w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#9333EA] to-[#DB2777] rounded-xl flex items-center justify-center shrink-0'>
                  {subject.icon}
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900">{subject.name}</h1>
                  <p className="text-sm sm:text-base text-gray-600">{subject.description}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto justify-center  sm:justify-normal">
              <div className="flex items-center gap-2 bg-white p-2 rounded-4xl text-sm sm:text-base">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-[#9333EA]" />
                <span className="font-medium">8 Chapters</span>
              </div>
              <Link href="/" className="bg-white p-2 sm:p-3 rounded-full shrink-0">
                <Home className="w-4 h-4 text-gray-600" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="mb-10 sm:mb-12">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">Course Chapters</h2>
            <p className="text-sm sm:text-base text-gray-600">Complete chapters in sequence to unlock the next level</p>
          </div>

            <ClientCardComponent chapters={chapters}/>
        </div>

        <div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Assessments & Exams</h2>
              <p className="text-sm sm:text-base text-gray-600">Complete chapters in sequence to unlock the next level</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {assessments.map((assessment) => (
              <AssessmentCard key={assessment.id} assessment={assessment} />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}