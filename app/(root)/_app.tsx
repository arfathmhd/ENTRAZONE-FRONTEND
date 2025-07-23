import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { AppProps } from 'next/app'
import { useAuthStore } from '@/stores/auth.store'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const isProfileComplete = useAuthStore((state) => state.isProfileComplete)
  const hasSelectedCourse = useAuthStore((state) => state.hasSelectedCourse)

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (isAuthenticated) {
        if (!isProfileComplete && !url.startsWith('/register')) {
          router.push('/register')
        } else if (isProfileComplete && !hasSelectedCourse && !url.startsWith('/courses')) {
          router.push('/courses')
        } else if (hasSelectedCourse && (url === '/login' || url === '/otp' || url === '/register' || url === '/courses')) {
          router.push('/')
        }
      }
    }

    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [isAuthenticated, isProfileComplete, hasSelectedCourse, router])

  return <Component {...pageProps} />
}

export default MyApp