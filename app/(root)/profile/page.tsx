import ProfileDashboard from "@/app/components/ui/profile/ProfileDashboardClient"

// Static user data
const staticUserData = {
  name: "Ibrahim Bashir",
  email: "ibrahim@gmail.com",
  joinDate: "January 2025",
  initials: "IB",
  stats: [
    { label: "Courses Enrolled", value: 12 },
    { label: "Certificates Earned", value: 8 },
    { label: "Lessons Completed", value: 24 },
  ]
}

export default function ProfilePage() {
  return <ProfileDashboard userData={staticUserData} />
}