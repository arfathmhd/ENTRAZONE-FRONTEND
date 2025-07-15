"use client";
import { Button } from "./Button";
import { FiFileText } from "react-icons/fi";
import { PiExam } from "react-icons/pi";
import { AiOutlineYoutube } from "react-icons/ai";
import React from 'react'
import { useRouter } from "next/navigation";

interface Subject {
  subjectname: string;
  imageUrl: string;
  iconBg: string;
  pdfcount: number;
  videocount: number;
  examcount: number;
  slug: string;
}

function SubjectCard({ subject }: { subject: Subject }) {
  const router = useRouter()
  const handleExploreClick = (slug: string) => {
    router.push(`/course/${slug}`)
  }

  return (
    <div>
      <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow">
        <div
          className={`${subject.iconBg} rounded-2xl w-20 h-20 flex items-center justify-center mb-4 overflow-hidden`}
        >
          <img
            src={subject.imageUrl}
            alt={subject.subjectname}
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-lg font-bold text-gray-900 mb-4 tracking-wide">
          {subject.subjectname}
        </h2>

        <div className="space-x-2 mb-6 flex justify-between">
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <FiFileText className="w-4 h-4" />
            <span>{subject.pdfcount} Pdf</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <AiOutlineYoutube className="w-4 h-4" />
            <span>{subject.videocount} Videos</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <PiExam className="w-4 h-4" />
            <span>{subject.examcount} Exams</span>
          </div>
        </div>

        <Button 
          onClick={() => handleExploreClick(subject.slug)} 
          className="w-full cursor-pointer bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white font-semibold py-3 rounded-sm transition-all duration-200"
        >
          EXPLORE
        </Button>
      </div>
    </div>
  )
}

export default SubjectCard