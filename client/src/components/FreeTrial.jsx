import React from "react";

const FreeTrial = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Start your free trial
        </h2>
        <p className="mt-2 text-gray-600">
          Join over 4,000+ startups already growing with Untitled.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <button className="px-6 py-2 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg shadow-sm hover:bg-gray-100">
            Learn more
          </button>
          <button className="px-6 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreeTrial;
