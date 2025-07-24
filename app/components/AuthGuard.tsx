"use client"

import { useAuthStore } from '@/stores/auth.store'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { homeApi } from '@/lib/api/home'

export default function AuthGuard({ 
  children, 
  requireProfileComplete = false,
}: {
  children: React.ReactNode
  requireProfileComplete?: boolean
}) {
  const router = useRouter()
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const isProfileComplete = useAuthStore((state) => state.isProfileComplete)
  const hasSelectedCourse = useAuthStore((state) => state.hasSelectedCourse)
  const checkProfileCompletion = useAuthStore((state) => state.checkProfileCompletion)
  const setHasSelectedCourse = useAuthStore((state) => state.setHasSelectedCourse)
  
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        if (!isAuthenticated) {
          router.push('/login')
          return
        }

        if (requireProfileComplete && !isProfileComplete && !checkProfileCompletion()) {
          router.push('/profile')
          return
        }


        const data = await homeApi.fetchHomeData()
        const hasCourses = data?.subscribed_courses?.length > 0
        setHasSelectedCourse(hasCourses)

        if (!hasCourses) {
          router.push('/courses')
          return
        }

        // All checks passed
        setIsChecking(false)
      } catch (error) {
        console.error('Auth check failed:', error)
        router.push('/login')
      }
    }

    checkAuth()
  }, [
    isAuthenticated,
    isProfileComplete,
    hasSelectedCourse,
    requireProfileComplete,
    router,
    checkProfileCompletion,
    setHasSelectedCourse,
  ])

  if (isChecking) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div>Checking authentication...</div>
      </div>
    )
  }

  return <>{children}</>
}