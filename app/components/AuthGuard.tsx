"use client"
import { useAuthStore } from '@/stores/auth.store'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function AuthGuard({ 
  children, 
  requireProfileComplete = false,
  requireCourseSelection = false 
}: {
  children: React.ReactNode
  requireProfileComplete?: boolean
  requireCourseSelection?: boolean
}) {
  const router = useRouter()
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const isProfileComplete = useAuthStore((state) => state.isProfileComplete)
  const hasSelectedCourse = useAuthStore((state) => state.hasSelectedCourse)
  const checkProfileCompletion = useAuthStore((state) => state.checkProfileCompletion)

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login')
    } else if (requireProfileComplete && !isProfileComplete && !checkProfileCompletion()) {
      router.push('/register')
    } else if (requireCourseSelection && !hasSelectedCourse) {
      router.push('/courses')
    }
  }, [
    isAuthenticated, 
    isProfileComplete, 
    requireProfileComplete, 
    requireCourseSelection,
    hasSelectedCourse,
    router, 
    checkProfileCompletion
  ])

  if (!isAuthenticated || 
      (requireProfileComplete && !isProfileComplete && !checkProfileCompletion()) ||
      (requireCourseSelection && !hasSelectedCourse)) {
    return null
  }

  return <>{children}</>
}