import React from 'react'
import { Button } from '@/app/components/ui/Button'
import { CreditCard } from 'lucide-react';
import { BiCreditCard } from 'react-icons/bi';

function Otp() {
  return (
        <div className="w-full lg:w-1/2 max-w-sm flex justify-center">
          <div className="w-full bg-white rounded-3xl shadow-2xl p-6 sm:p-8">
            <div className="text-center">
              <div className="mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Enter Your mobile Number    
                </h2>
                <BiCreditCard className="text-6xl mx-auto mb-9 " />

              </div>


              <div className="space-y-12">
                <div className="flex justify-center gap-2 sm:gap-3">
                  {[0, 1, 2, 3].map((index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength={1}
                      className="w-10 h-10 sm:w-12 sm:h-12 text-center text-lg sm:text-xl font-bold border-1 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                    />
                  ))}
                </div>


                <Button className="w-full bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white py-6 rounded-lg font-semibold text-sm sm:text-base">
                  Submit
                </Button>

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

  )
}

export default Otp