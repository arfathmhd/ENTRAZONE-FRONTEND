import React from 'react'

function Courses() {
  return (
    <div className="w-full lg:w-1/2 max-w-md flex justify-center">
      <div className="w-full bg-white rounded-3xl shadow-2xl p-6 sm:p-8">
            <div>
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Select your Course to Continue</h2>
                <div className="w-12 h-1 bg-purple-600 mx-auto"></div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <button
                  className="w-full p-3 sm:p-4 bg-gray-800 hover:bg-gray-900 text-white rounded-xl transition-colors text-left"
                >
                  <div className="text-lg sm:text-xl font-bold">NEET</div>
                  <div className="text-xs sm:text-sm text-gray-300">National Eligibility cum Entrance Test</div>
                </button>

                <button
                  className="w-full p-3 sm:p-4 bg-gray-400 hover:bg-gray-500 text-white rounded-xl transition-colors text-left"
                >
                  <div className="text-lg sm:text-xl font-bold">JEE MAIN</div>
                  <div className="text-xs sm:text-sm text-gray-200">Joint Entrance Examination</div>
                </button>

                <button
                  className="w-full p-3 sm:p-4 bg-blue-800 hover:bg-blue-900 text-white rounded-xl transition-colors text-left"
                >
                  <div className="text-lg sm:text-xl font-bold">SSLC</div>
                  <div className="text-xs sm:text-sm text-blue-200">Secondary School Leaving Certificate</div>
                </button>
              </div>
            </div>
      </div>
    </div>  )
}

export default Courses