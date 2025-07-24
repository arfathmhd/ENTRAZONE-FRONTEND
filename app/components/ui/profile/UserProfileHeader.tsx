
import Link from "next/link"
import { ArrowLeft, Camera, Edit, Save, UserRound, X } from "lucide-react"
import { Button } from "@/app/components/ui/Button"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../dialog"
import { Label } from "../label"
import { Input } from "../input"
import { Textarea } from "../textarea"

interface UserProfileHeaderProps {
  userData: {
    name: string
    email: string
    joinDate: string
    initials: string
  }
}

export default function UserProfileHeader({ userData }: UserProfileHeaderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
        <div className="flex items-center gap-3 sm:gap-5">
          <Link href="/" className="p-2 bg-white rounded-full transition-colors shrink-0 hover:bg-gray-100">
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="sr-only">Go back</span>
          </Link>
          <div className="relative">
            <Button className="w-24 rounded-full h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white text-4xl sm:text-5xl font-bold flex items-center justify-center">
              <h1>{userData.initials}</h1>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute bottom-0 right-0 bg-gradient-to-r from-[#9333EA] to-[#DB2777] rounded-full shadow-md p-2 hover:opacity-90"
              aria-label="Edit profile picture"
              onClick={() => setIsModalOpen(true)}
            >
              <Edit className="w-4 h-4 text-white" />
            </Button>
          </div>
          <div className="space-y-1 sm:space-y-1.5">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">{userData.name}</h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">{userData.email}</p>
            <p className="text-xs text-gray-500">Member since {userData.joinDate}</p>
          </div>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-xl">Edit Profile</DialogTitle>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <Button className="w-24 h-24 rounded-full bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white flex items-center justify-center">
                  <Camera className="w-10 h-10" />
                </Button>
              </div>
              <p className="text-sm text-gray-500 text-center">
                Click the camera icon to change your profile picture
              </p>
            </div>

            <hr />
            
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                <UserRound className="w-5 h-5 text-[#9333EA]" />
                Basic Information
              </div>
              <div className="grid gap-7">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" defaultValue={userData.name} className="w-full" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea id="address" placeholder="Enter your Address" className="w-full" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-3 pt-2">
            <Button 
              variant="outline" 
              className=" border-gray-300 hover:bg-gray-50" 
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </Button>
            <Button className="bg-gradient-to-r from-[#9333EA] to-[#DB2777] hover:opacity-90">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}