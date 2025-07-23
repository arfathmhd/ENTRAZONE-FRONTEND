"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Edit, LogOut, User, Award, BookOpen, Bell, Shield, HelpCircle, TrendingUp } from "lucide-react"
import { Button } from "@/app/components/ui/Button"
import { Progress } from "@/app/components/ui/progress"
import UserProfileHeader from "./UserProfileHeader"
import UserStats from "./UserStats"



interface NavItemProps {
  icon: React.ElementType
  label: string
  description: string
  isActive: boolean
  onClick: () => void
}

const NavItem = ({ icon: Icon, label, description, isActive, onClick }: NavItemProps) => (
  <button
    className={`flex items-center gap-3 p-3 rounded-lg text-left w-full transition-colors ${
      isActive ? "bg-purple-50 text-purple-700 border-[#6B21A88A]/54 border-r-3" : "text-gray-700 hover:bg-gray-50"
    }`}
    onClick={onClick}
  >
    <Icon className={`w-5 h-5 ${isActive ? "text-purple-600 border" : "text-gray-500"}`} />
    <div>
      <div className={`font-medium ${isActive ? "text-purple-700" : "text-gray-900"}`}>{label}</div>
      <div className="text-sm text-gray-500">{description}</div>
    </div>
  </button>
)

interface LearningProgressItemProps {
  subject: string
  progress: number
}

const LearningProgressItem = ({ subject, progress }: LearningProgressItemProps) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center">
      <span className="text-sm font-medium text-gray-900">{subject}</span>
      <span className="text-sm text-gray-600">{progress}%</span>
    </div>
    <Progress value={progress} className="h-2 bg-gray-200 [&>*]:bg-black" />
  </div>
)

interface ProfileDashboardProps {
  userData: {
    name: string
    email: string
    joinDate: string
    initials: string
    stats: {
      label: string
      value: number
    }[]
  }
}

export default function ProfileDashboard({ userData }: ProfileDashboardProps) {
  const [activeSection, setActiveSection] = useState("overview")

  const learningProgressData = [
    { subject: "Mathematics", progress: 85 },
    { subject: "Chemistry", progress: 65 },
    { subject: "Social Science", progress: 72 },
    { subject: "Physics", progress: 79 },
    { subject: "Biology", progress: 91 },
    { subject: "English", progress: 88 },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-[#F3E8FF] to-[#FDF2F8] border-b border-gray-200 px-4 sm:px-6 py-8 md:py-14 relative">
        <div className="absolute top-4 right-4">
          <Button
            variant="outline"
            className="border-red-400 text-red-600 hover:bg-red-50 hover:text-red-700 bg-white"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
        
        <UserProfileHeader userData={userData} />
        <UserStats stats={userData.stats} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 bg-white rounded-xl shadow-sm p-6 space-y-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Account</h2>
          <NavItem
            icon={User}
            label="Overview"
            description="Personal information and statistics"
            isActive={activeSection === "overview"}
            onClick={() => setActiveSection("overview")}
          />
          <NavItem
            icon={Award}
            label="Exam Results"
            description="View your test scores and performance"
            isActive={activeSection === "exam-results"}
            onClick={() => setActiveSection("examresults")}
          />
          <NavItem
            icon={BookOpen}
            label="My Courses"
            description="Enrolled courses and progress"
            isActive={activeSection === "my-courses"}
            onClick={() => setActiveSection("my-courses")}
          />
          <NavItem
            icon={Bell}
            label="Notifications"
            description="Manage your notification preferences"
            isActive={activeSection === "notifications"}
            onClick={() => setActiveSection("notifications")}
          />
          <NavItem
            icon={Shield}
            label="Security & Privacy"
            description="Account security settings"
            isActive={activeSection === "security-privacy"}
            onClick={() => setActiveSection("security-privacy")}
          />
          <NavItem
            icon={HelpCircle}
            label="Help & Support"
            description="Get help and contact support"
            isActive={activeSection === "help-support"}
            onClick={() => setActiveSection("help-support")}
          />
        </div>

        <div className="md:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-gray-600" />
            Learning Progress
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {learningProgressData.map((item, index) => (
              <LearningProgressItem key={index} subject={item.subject} progress={item.progress} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}