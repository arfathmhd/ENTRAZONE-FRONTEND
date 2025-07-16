import React from 'react'
import { Button } from '@/app/components/ui/Button'
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import Link from 'next/link';

function AuthPage() {
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


              <div className="space-y-4">
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
                  />
                </div>
                                                <p className="text-xs sm:text-sm text-gray-500 ">
                <Link href="/register">
                  Don't have an account?
                </Link>
                </p>



                <Button className="w-full bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white py-6 rounded-lg font-semibold text-sm sm:text-base">
                  Get OTP
                </Button>

                <p className="text-xs text-gray-500 leading-relaxed mt-6">
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

  )
}

export default AuthPage