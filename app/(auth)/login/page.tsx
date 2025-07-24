"use client"

import React, { useEffect, useState } from 'react'
import { Button } from '@/app/components/ui/Button'
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/auth.store';
import LoginSkeleton from '@/app/components/LoadingSkeleton/LoginSkeleton';
import { FaSpinner } from "react-icons/fa";

function AuthPage() {
  const [phone, setPhone] = useState('');
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [pageLoading, setPageLoading] = useState(true); 
  const router = useRouter();
  const login = useAuthStore((state) => state.login);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isProfileComplete = useAuthStore((state) => state.isProfileComplete);
  const [error, setError] = useState('');


  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isAuthenticated) {
        if (isProfileComplete) {
          router.push('/');
        } else {
          router.push('/register');
        }
      }
      setPageLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [isAuthenticated, isProfileComplete, router]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);
    setError('');
    
    try {
      const request_id = Math.floor(100000 + Math.random() * 900000).toString();
      await login(phone, request_id);
      router.push('/otp');
    } catch (err) {
      setError('Failed to send OTP. Please try again.');
    } finally {
      setFormSubmitting(false);
    }
  };

 if (pageLoading) {
    return <LoginSkeleton />;
  }


  return (
    <div className="w-full lg:w-1/2 max-w-sm flex justify-center">
      <div className="w-full bg-white rounded-3xl shadow-2xl p-6 sm:p-8">
        <div className="text-center">
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Enter Your mobile Number
            </h2>
            <HiOutlineDevicePhoneMobile className="text-6xl mx-auto mb-9 " />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-2">
              <div className="flex items-center px-3 py-3 border rounded-lg">
                <span className="text-gray-700 font-medium text-sm sm:text-base">
                  +91
                </span>
              </div>
              <input
                type="tel"
                placeholder="Enter Mobile Number"
                className="flex-1 rounded-lg border focus:ring-purple-500 focus:border-purple-500 text-sm sm:text-base px-4 py-3"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            
            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}
            
            <p className="text-xs sm:text-sm text-gray-500 ">
              <Link href="/register">
                Don't have an account?
              </Link>
            </p>

            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white py-6 rounded-lg font-semibold text-sm sm:text-base flex justify-center items-center gap-2"
              disabled={formSubmitting}
            >
              {formSubmitting ? (
                <>
                  <FaSpinner className="animate-spin" />
                  Processing...
                </>
              ) : (
                "Get OTP"
              )}
            </Button>
            <p className="text-xs text-gray-500 leading-relaxed mt-6">
              By creating or logging into an account you're agreeing with our{" "}
              <span className="text-purple-600 underline">
                Terms and conditions
              </span>{" "}
              and{" "}
              <span className="text-purple-600 underline">Privacy policy</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;