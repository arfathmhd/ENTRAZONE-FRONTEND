"use client"

import React from 'react'
import { Button } from '@/app/components/ui/Button'
import { BiCreditCard } from 'react-icons/bi';
import { authApi } from '@/lib/api/auth';
import { useRouter } from 'next/navigation';

function Otp() {
  const router = useRouter();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await authApi.verifyOtp({ "phone": "9876543210","code": "5555","request_id":"123456"});
      console.log(response,"this is response");
    
      localStorage.setItem('token', response.token);
      router.push('/');
    } catch (err) {
      console.log('Invalid credentials. Please try again.');
    } 
  };




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
      <form onSubmit={handleSubmit} className="space-y-9" >
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


                <Button className="w-full bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white py-6 rounded-lg font-semibold text-sm sm:text-base" >
                  Submit
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

  )
}

export default Otp