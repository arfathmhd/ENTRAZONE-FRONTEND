"use client"

import { CalendarDays, Clock, Play, Bell } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "../card"
import { Button } from "../Button"
import { HiOutlineVideoCamera } from "react-icons/hi2"

interface ClassCardProps {
  video: {
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
  onOpenModal: (video: ClassCardProps["video"]) => void
}

export function ClassCard({ video, onOpenModal }: ClassCardProps) {
  const isLive = video.status === "live"
  const isScheduled = video.status === "scheduled"

  return (
      <div
        className="rounded-2xl border-1 transition-all duration-200 relative bg-white shadow-sm hover:shadow-md  border-gray-200"
      >
          <div className="rounded-t-lg overflow-hidden bg-gray-100 aspect-video relative">
          <Image
            src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
            alt={video.title}
            fill
            className="object-cover"
          />
          
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all">
              <Play className="w-5 h-5 text-black" />
            </div>
          </div>
          
          {isLive && (
            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              🔴 Live Now
            </span>
          )}
          {isScheduled && (
            <span className="absolute top-3 left-3 bg-[#9333EA] text-white text-xs font-bold px-2 py-1 rounded-full">
              Scheduled
            </span>
          )}
          
          {/* Duration */}
          <div className="absolute flex items-center gap-1 bottom-3 right-3 bg-[#3C3B3B85]/52 text-white text-xs px-2 py-1 rounded-full">
             <Clock className="w-3 h-3"/>
            {video.duration}
          </div>
        </div>
        
        {/* Content Section */}
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-semibold bg-gradient-to-r from-[#9333EA]/20 to-[#DB2777]/20 text-[#9333EA] px-2 py-1 rounded-full">
              {video.chapter}
            </span>
          </div>
          
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
            {video.title}
          </h3>
          
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {video.description}
          </p>
          
          <div className="flex items-center justify-between gap-3 text-xs text-gray-600 mb-4">
            <div className="flex items-center gap-1">
              <CalendarDays className="w-4 h-4 text-gray-500" />
              <span>{video.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-gray-500" />
              <span>{video.time}</span>
            </div>
          </div>
          
          {/* Action Button */}
          <Button
            onClick={() => onOpenModal(video)}
            className="w-full bg-gradient-to-r from-[#9333EA] to-[#DB2777]"
          >
            {isLive ? (
              <>
                <HiOutlineVideoCamera className="w-4 h-4 mr-2" />
                Join Now
              </>
            ) : isScheduled ? (
              <>
                <Bell className="w-4 h-4 mr-2" />
                Set Reminder
              </>
            ) : (
              <>
                <Play className="w-4 h-4 mr-2" />
                Watch Recording
              </>
            )}
          </Button>
        </div>
        </div>

  )
}