"use client"

import React, { useEffect, useState } from 'react'
import { useAuthStore } from '@/stores/auth.store'
import { useRouter } from 'next/navigation'
import { authApi } from '@/lib/api/auth'

interface Course {
  id: number
  course_name: string
  description: string
}

function Courses() {
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const router = useRouter()

  const {
    isAuthenticated,
    isProfileComplete,
    hasSelectedCourse,
    selectCourse
  } = useAuthStore()

  // Check authentication and redirects
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login')
      return
    }

    if (!isProfileComplete) {
      router.push('/register')
      return
    }

    if (hasSelectedCourse) {
      router.push('/')
      return
    }
  }, [isAuthenticated, isProfileComplete, hasSelectedCourse, router])

  useEffect(() => {
    // Only fetch courses if all checks pass
    if (!isAuthenticated || !isProfileComplete || hasSelectedCourse) {
      return
    }

    const fetchCourses = async () => {
      try {
        const response = await authApi.getCourses()
        const courseList = Array.isArray(response.courses) ? response.courses : []
        
        setCourses(courseList)
      } catch (err) {
        console.error('Failed to fetch courses:', err)
        setError('Failed to load courses. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    fetchCourses()
  }, [isAuthenticated, isProfileComplete, hasSelectedCourse])

  const handleCourseSelect = async (courseId: number) => {
    try {
      await selectCourse(courseId)
      router.push('/')
    } catch (err) {
      console.error('Course selection failed:', err)
      setError('Failed to select course. Please try again.')
    }
  }

  if (loading) {
    return (
      <div className="w-full lg:w-1/2 max-w-md flex justify-center">
        <div className="w-full bg-white rounded-3xl shadow-2xl p-6 sm:p-8">
          <div className="text-center py-10">
            <p>Loading courses...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="w-full lg:w-1/2 max-w-md flex justify-center">
        <div className="w-full bg-white rounded-3xl shadow-2xl p-6 sm:p-8">
          <div className="text-center py-10 text-red-500">
            <p>{error}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full lg:w-1/2 max-w-md flex justify-center">
      <div className="w-full bg-white rounded-3xl shadow-2xl p-6 sm:p-8">
        <div>
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Select your Course to Continue</h2>
            <div className="w-12 h-1 bg-purple-600 mx-auto"></div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {courses.map((course) => (
              <button
                key={course.id}
                onClick={() => handleCourseSelect(course.id)}
                className="w-full p-3 sm:p-4 bg-gray-800 hover:bg-gray-900 text-white rounded-xl transition-colors text-left"
              >
                <div className="text-lg sm:text-xl font-bold">{course.course_name}</div>
                <div className="text-xs sm:text-sm text-gray-300">{course.description}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses