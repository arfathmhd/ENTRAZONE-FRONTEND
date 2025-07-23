"use client"
import { Button } from '@/app/components/ui/Button'
import { VideoModal } from '@/app/components/ui/VideoModal';
import { ArrowLeft, CheckCircle, Clock, FileText, PlayCircle } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

function ChapterPage() {
  const [selectedVideo, setSelectedVideo] = useState<{
    id: string;
    title: string;
    instructor: string;
    subject: string;
    duration: string;
    rating: number;
    youtubeId: string;
  } | null>(null);

  const modules = [
    {
      id: 1,
      title: "Concept of co-operation",
      lessons: [
        {
          id: 101,
          title: "Concept of co-operation Part 1",
          type: "video",
          videoId: "tTb3d5cjSFI",
          duration: "58 mins",
          completed: true,
        },
        {
          id: 102,
          title: "Concept of co-operation Part 2",
          type: "video",
          videoId: "tTb3d5cjSFI",
          duration: "38 mins",
          completed: true,
        },
        {
          id: 103,
          title: "Concept of co-operation",
          type: "document",
          videoId: "tTb3d5cjSFI",
          completed: false,
        },
      ],
    },
    {
      id: 2,
      title: "Features, Objectives ",
      lessons: [
        {
          id: 201,
          title: "Features, Objectives ",
          type: "video",
          duration: "58 mins",
          videoId: "tTb3d5cjSFI",
          completed: true,
        },
        {
          id: 202,
          title: "Concept of co-operation Part 2",
          type: "video",
          duration: "58 mins",
          videoId: "tTb3d5cjSFI",
          completed: true,
        },
      ],
    },
  ]

  const handleVideoClick = (lesson: any) => {
    if (lesson.type === "video") {
      setSelectedVideo({
        id: lesson.id.toString(),
        title: lesson.title,
        instructor: "Course Instructor",
        subject: "Algebra Fundamentals",
        duration: lesson.duration,
        rating: 0,
        youtubeId: lesson.videoId
      });
    }
  }

  const closeModal = () => {
    setSelectedVideo(null);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {selectedVideo && (
        <VideoModal video={selectedVideo} onClose={closeModal} />
      )}
      
      <div className="relative bg-gradient-to-r from-[#F3E8FF] to-[#FDF2F8] pb-20 pt-6">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center mb-8">
              <Link href="/" className="p-2 bg-white rounded-full transition-colors shrink-0">
                <ArrowLeft className="w-5 h-5" />
              </Link>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Algebra Fundamentals</h1>
            <p className="text-lg text-gray-600 mb-6">2 Modules </p>
            <Button
              className="px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white"
            >
              Start Learning
            </Button>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-4 md:px-6 lg:px-8 mt-7  pb-16">
        <div className="max-w-4xl mx-auto space-y-8">
          {modules.map((module) => (
            <div key={module.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <span
                    className="md:px-4 md:py-2 px-2 py-1 rounded-full bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white text-xs font-medium"
                  >
                    Module {module.id}
                  </span>
                  <h2 className="text-md md:text-xl font-bold text-gray-900">{module.title}</h2>
                </div>
              </div>
              <div className="divide-y divide-gray-100">
                {module.lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className="flex items-center p-4 hover:bg-gray-50 transition-colors cursor-pointer"
                    onClick={() => handleVideoClick(lesson)}
                  >
                    <div className="flex-shrink-0 mr-4">
                      {lesson.type === "video" ? (
                        <div className="bg-red-50 text-red-500 p-2.5 rounded-lg">
                          <PlayCircle className="h-5 w-5" />
                        </div>
                      ) : (
                        <div className="bg-yellow-50 text-yellow-500 p-2.5 rounded-lg">
                          <FileText className="h-5 w-5" />
                        </div>
                      )}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-base font-medium text-gray-900">{lesson.title}</h3>
                      {lesson.type === "video" && (
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{lesson.duration}</span>
                          <span className="mx-1">•</span>
                          <span>Video</span>
                        </div>
                      )}
                      {lesson.type === "document" && (
                        <p className="text-sm text-gray-500 mt-1">Reading Material</p>
                      )}
                    </div>
                    {lesson.completed ? (
                      <div className="flex-shrink-0 ml-4 text-green-500">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                    ) : (
                       <>
                       </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ChapterPage