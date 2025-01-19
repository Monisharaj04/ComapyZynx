import React from "react";
import { assets } from "../assets/assets";

const Testimonial = () => {
  return (
    <div className="w-full px-4 py-16 text-center bg-gray-50">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <img
          src={assets.Testimonial_img}
          alt="Sisyphus logo"
          className="h-10"
        />
      </div>

      {/* Quote */}
      <p className="text-3xl font-medium text-gray-900 md:text-5xl mb-6">
        We’ve been using Untitled to kick start every new
        <br/> project and can’t
        imagine working without it.
      </p>

      {/* Author */}
      <div className="flex flex-col items-center space-y-3">
        <div className="h-12 w-12 rounded-full overflow-hidden">
          <img
            src={assets.user_img}
            alt="Candice Wu"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Candice Wu</h4>
          <p className="text-sm text-gray-500">Product Manager, Sisyphus</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
