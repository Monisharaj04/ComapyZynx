import React, { useState } from 'react';
import { PlayIcon } from "@heroicons/react/24/solid";
import { assets } from '../assets/assets';

const Hearder = () => {

  const [progress, setProgress] = useState(20);

  const handleContinue = () => {
    setProgress((prev) => Math.min(prev + 20, 100));
  };

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <div className="flex flex-col items-center text-center p-4">
        {/* New Feature Section */}
        <div className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium mb-4 border border-red-600">
          <span className="border border-red-600 rounded-full px-2 mr-1">New feature:</span>
          Check out the team dashboard →
        </div>

        {/* Heading */}
        <h1 className="font-extrabold text-gray-900 mb-4 text-4xl sm:text-6xl text-center sm:text-left">
          Beautiful analytics to grow smarter
        </h1>

        {/* Description */}
        <p className="m-10 text-lg text-gray-600 text-center max-w-2xl mx-auto mb-6">
          Powerful, self-serve product and growth analytics to help you convert, engage,
          and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>

      {/* Button Section */}
      <div className="flex justify-center my-10">
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 w-full">
          {/* Demo Button */}
          <button className="w-full md:w-auto flex items-center justify-center px-4 py-2 border rounded-full text-gray-700 border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">
            <PlayIcon className="w-5 h-5 mr-2 text-gray-700" />
            Demo
          </button>

          {/* Sign Up Button */}
          <button className="w-50 md:w-100 px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400">
            Sign up
          </button>
        </div>
      </div>

      {/* Responsive Card Section */}
      <div className="flex justify-center mt-5 p-5 mb-7 w-full max-w-screen-md min-[320px]:text-center max-[600px]:bg-gray-300">
        <div className="mt-12 w-full max-w-4xl mx-auto bg-black rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2">
          {/* Left Section */}
          <div className="bg-gray-900 text-white p-8 rounded-l-lg">
            <div className="text-sm uppercase tracking-wide font-medium mb-2">
              testmyskills
            </div>
            <h2 className="text-2xl font-bold mb-4">Who are you?</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full mb-4">
                  <img src={assets.Books_img} alt="Student Icon" className="h-full" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Student</h3>
                <p className="text-sm text-gray-500">Who is still studying</p>
              </div>

              <div className="bg-black text-white p-6 rounded-lg flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 bg-black flex items-center justify-center rounded-full mb-4">
                  <img src={assets.Professional_img} alt="Professional Icon" className="h-full" />
                </div>
                <h3 className="text-lg font-semibold">Professional</h3>
                <p className="text-sm text-gray-400">One who is working</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center p-4 lg:hidden">
              {/* Progress Bar and Continue Button */}
              <div className="flex items-center gap-8 w-full max-w-4xl">
                <div className="w-full">
                  <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="absolute left-0 top-0 h-full bg-purple-600 transition-all duration-500 ease-out"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
                <button
                  onClick={handleContinue}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2 rounded-lg text-lg font-medium"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div
            className="p-8 bg-gray-100 rounded-r-lg flex flex-col justify-start relative  lg:block"
            style={{
              backgroundImage: `url(${assets.background_img})`, 
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative z-10 w-full max-w-xl mx-auto p-4 space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-full">
                  🦉
                </div>
                <div className="bg-white p-3 rounded-lg shadow-md">
                  <p className="text-sm text-gray-800">
                    Welcome Conor! 🎉 It’s great to have you here
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="bg-purple-600 text-white p-3 rounded-lg shadow-md">
                <p className="text-sm">I’m a student</p>
              </div>
            </div>

            <div className="flex items-end space-x-3 mt-4">
              <div className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-full">
                🦉
              </div>
              <div className="bg-gray-200 p-3 rounded-lg shadow-md">
                <p className="text-sm text-gray-600">...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hearder;
