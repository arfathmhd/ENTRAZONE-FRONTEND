"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/app/components/ui/Button";
import { BiCreditCard } from "react-icons/bi";
import { FaSpinner } from "react-icons/fa";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuthStore } from "@/stores/auth.store";
import OtpSkeleton from "@/app/components/LoadingSkeleton/OtpSkeleton";

function OtpVerificationPage() {
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const [localError, setLocalError] = useState<string>('');
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const verifyOtp = useAuthStore((state) => state.verifyOtp);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isProfileComplete = useAuthStore((state) => state.isProfileComplete);
  const { tempPhone, tempRequestId, isRegisterPageVisible,route } = useAuthStore.getState(); 

    useEffect(() => {
        if (isAuthenticated) {
          if (isProfileComplete) {
                router.push('/');
          } else if (!isRegisterPageVisible) {            
                router.push('/register');
          } else if (isRegisterPageVisible) {
                router.push("/profile"); 
          }
        }
        setPageLoading(false);
    }, [isAuthenticated, isProfileComplete, router,isRegisterPageVisible]);



  useEffect(() => {
    if (!pageLoading && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [pageLoading]);






  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const setInputRef = (index: number) => (el: HTMLInputElement | null) => {
    inputRefs.current[index] = el;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (otp.some(digit => digit === '')) {
      setLocalError('Please enter the complete OTP');
      return;
    }
    
    const code = otp.join('');
    
    if (!tempPhone || !tempRequestId) {
      setError('Missing phone number or request ID');
      return;
    }

    setIsSubmitting(true);
    setError('');
    setLocalError('');
    
    try {
      await verifyOtp(tempPhone, code, tempRequestId);
        if (route === 'signup') {
          if (!isRegisterPageVisible) {
            router.push('/register');
          } else {
            console.log("ithanoooooo");
            
            router.push('/profile');
          }
        } else if (route === 'login') {
          router.push('/');
        }

    } catch (err) {
      setError('Invalid OTP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (pageLoading || (!tempPhone || !tempRequestId)) {
    return <OtpSkeleton />;
  }

  return (
    <div className="w-full lg:w-1/2 max-w-sm flex justify-center">
      <div className="w-full bg-white rounded-3xl shadow-2xl p-6 sm:p-8">
        <div className="text-center">
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Enter OTP Verification Code
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              We've sent a 4-digit code to +91 {tempPhone}
            </p>
            <BiCreditCard className="text-6xl mx-auto mb-9" />
          </div>

          <div className="space-y-12">
            <form onSubmit={handleSubmit} className="space-y-9">
              <div className="flex justify-center gap-2 sm:gap-3">
                {[0, 1, 2, 3].map((index) => (
                  <input
                    key={index}
                    ref={setInputRef(index)}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={1}
                    value={otp[index]}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-10 h-10 sm:w-12 sm:h-12 text-center text-lg sm:text-xl font-bold border-1 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                    disabled={isSubmitting}
                  />
                ))}
              </div>

              {(error || localError) && (
                <p className="text-red-500 text-sm text-center">
                  {error || localError}
                </p>
              )}

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white py-6 rounded-lg font-semibold text-sm sm:text-base flex justify-center items-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    Verifying...
                  </>
                ) : (
                  "Verify OTP"
                )}
              </Button>
            </form>

            <p className="text-xs text-gray-500 leading-relaxed">
              By creating or logging into an account you're agreeing with our{" "}
              <span className="text-purple-600 underline">
                Terms and conditions
              </span>{" "}
              and{" "}
              <span className="text-purple-600 underline">Privacy policy</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtpVerificationPage;