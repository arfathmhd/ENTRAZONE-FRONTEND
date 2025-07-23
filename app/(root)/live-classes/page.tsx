"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"

import Link from "next/link" 
import { Tabs } from "@radix-ui/react-tabs"
import { TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs"
import { VideoModal } from "@/app/components/ui/VideoModal"
import { ClassCard } from "@/app/components/ui/live-class/ClassCard"

interface VideoData {
  id: string
  title: string
  description: string
  date: string
  time: string
  duration: string
  chapter: string
  status: "live" | "scheduled" | "completed"
  thumbnail?: string
  youtubeId: string
  instructor?: string
  subject?: string
  rating?: number
}

const upcomingClasses: VideoData[] = [
  {
    id: "1",
    title: "Financial Statement Analysis",
    description: "Deep dive into financial statement analysis techniques and best practices",
    date: "Nov 25",
    time: "10:30 AM - 11:30",
    duration: "45 min",
    chapter: "Chapter E1",
    status: "live",
    thumbnail: "/images/live-class-thumbnail.jpg",
    youtubeId: "dQw4w9WgXcQ", // Rick Astley - Never Gonna Give You Up
    instructor: "Jane Doe",
    subject: "Finance",
    rating: 4.5,
  },
  {
    id: "2",
    title: "Capital Budgeting Process",
    description: "Understanding capital budgeting decisions and evaluation methods.",
    date: "Nov 23",
    time: "10:30 AM - 11:30",
    duration: "45 min",
    chapter: "Chapter E1",
    status: "scheduled",
    youtubeId: "dQw4w9WgXcQ", // Placeholder YouTube ID
    instructor: "John Smith",
    subject: "Finance",
    rating: 4.0,
  },
  {
    id: "3",
    title: "Advanced Derivatives Trading",
    description: "Explore complex derivative instruments and trading strategies.",
    date: "Dec 01",
    time: "09:00 AM - 10:00",
    duration: "60 min",
    chapter: "Chapter F2",
    status: "scheduled",
    youtubeId: "dQw4w9WgXcQ", // Placeholder YouTube ID
    instructor: "Alice Brown",
    subject: "Finance",
    rating: 4.8,
  },
  {
    id: "4",
    title: "Macroeconomics ",
    description: "Key concepts of macroeconomics and their impact on global markets.",
    date: "Dec 05",
    time: "11:00 AM - 12:00",
    duration: "60 min",
    chapter: "Chapter A3",
    status: "scheduled",
    youtubeId: "dQw4w9WgXcQ", // Placeholder YouTube ID
    instructor: "Bob White",
    subject: "Economics",
    rating: 4.2,
  },
]

const completedClasses: VideoData[] = [
  {
    id: "5",
    title: "Introduction to Accounting",
    description: "Basic principles of financial accounting and reporting.",
    date: "Oct 15",
    time: "09:00 AM - 10:00",
    duration: "60 min",
    chapter: "Chapter A1",
    status: "completed",
    youtubeId: "dQw4w9WgXcQ",
    instructor: "Charlie Green",
    subject: "Accounting",
    rating: 3.9,
  },
  {
    id: "6",
    title: "Business Ethics",
    description: "Understanding ethical frameworks and corporate governance.",
    date: "Oct 20",
    time: "14:00 PM - 15:00",
    duration: "60 min",
    chapter: "Chapter B2",
    status: "completed",
    youtubeId: "dQw4w9WgXcQ",
    instructor: "Diana Blue",
    subject: "Business",
    rating: 4.1,
  },
]

export default function LiveClassesDashboard() {
  const [activeTab, setActiveTab] = useState("upcoming")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null)

  const handleOpenModal = (video: VideoData) => {
    setSelectedVideo(video)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedVideo(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-[#F3E8FF] to-[#FDF2F8] px-4 py-6 md:py-8 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-2 bg-white rounded-full">
              <ArrowLeft className="w-5 h-5 text-black" />
            </Link>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-black">Live Classes</h1>
              <p className="text-sm md:text-base text-black">
                Join interactive sessions with expert instructors
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="sticky top-0 bg-gray-50 z-10 pb-4">
            <TabsList className="w-auto inline-flex gap-1 bg-gray-100 p-1 rounded-lg">
              <TabsTrigger 
                value="upcoming" 
                className="px-4 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                Upcoming ({upcomingClasses.length})
              </TabsTrigger>
              <TabsTrigger 
                value="completed" 
                className="px-4 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                Completed ({completedClasses.length})
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="upcoming">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {upcomingClasses.map((video) => (
                <ClassCard key={video.id} video={video} onOpenModal={handleOpenModal} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="completed">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {completedClasses.map((video) => (
                <ClassCard key={video.id} video={video} onOpenModal={handleOpenModal} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* {isModalOpen && selectedVideo && <VideoModal video={selectedVideo} onClose={handleCloseModal} />} */}
    </div>
  )
}