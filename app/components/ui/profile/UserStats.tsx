interface UserStatsProps {
  stats: {
    label: string
    value: number
  }[]
}

export default function UserStats({ stats }: UserStatsProps) {
  // Function to determine color based on label
  const getValueColor = (label: string) => {
    switch(label) {
      case 'Courses Enrolled':
        return 'text-[#9333EA]'
      case 'Certificates Earned':
        return 'text-[#1FE500]' 
      case 'Lessons Completed':
        return 'text-[#F3A200]' 
      default:
        return 'text-gray-900' 
    }
  }

  return (
    <div className="mt-8 flex items-center justify-center md:gap-40 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <span className={`md:text-2xl text-md font-bold ${getValueColor(stat.label)}`}>
            {stat.value}
          </span>
          <h1 className="text-md md:text-sm font-bold text-gray-700">{stat.label}</h1>
        </div>
      ))}
    </div>
  )
}