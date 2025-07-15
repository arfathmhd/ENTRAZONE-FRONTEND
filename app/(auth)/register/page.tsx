import React from 'react'
import { Button } from '@/app/components/ui/Button'
import { ChevronDown, CreditCard } from 'lucide-react';
import { FaWpforms } from "react-icons/fa";

function Register() {
  return (
    <div className="w-full lg:w-1/2 max-w-md flex justify-center">
      <div className="w-full bg-white rounded-3xl shadow-2xl p-6 sm:p-8">
        <div>
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Enter Your Details</h2>
            <FaWpforms className="text-6xl mx-auto mb-9 " />
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg  outline-none transition duration-200 text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <div className="flex gap-2">
                  <div className="flex items-center px-3 py-3 border rounded-lg">
                    <span className="text-gray-700 font-medium text-sm sm:text-base">
                      +91
                    </span>
                  </div>
                  <input
                    type="tel"
                    placeholder="Enter Mobile Number"
                    className="flex-1 rounded-lg border  text-sm sm:text-base px-4 py-3"
                  />
                </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg  outline-none transition duration-200 text-sm sm:text-base"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                <div className="relative">
                  <select
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg  appearance-none bg-white text-sm sm:text-base outline-none"
                  >
                    <option value="">Select Your State</option>
                    <option value="karnataka">Karnataka</option>
                    <option value="tamil-nadu">Tamil Nadu</option>
                    <option value="kerala">Kerala</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <div className="relative">
                  <select
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg  appearance-none bg-white text-sm sm:text-base outline-none"
                  >
                    <option value="">Select Your City</option>
                    <option value="bangalore">Bangalore</option>
                    <option value="chennai">Chennai</option>
                    <option value="kochi">Kochi</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <textarea
                placeholder="Enter your full address"
                rows={3}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg  resize-none outline-none transition duration-200 text-sm sm:text-base"
              />
            </div>

            <Button className="w-full bg-gradient-to-r from-[#9333EA] to-[#DB2777] text-white py-6 rounded-lg font-semibold text-sm sm:text-base">
                Register Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register