import React from "react";
import { assets } from "../../../assets/assets";

const UploadJobs = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center px-6 sm:px-10 md:px-16 bg-white text-gray-900 max-w-full overflow-hidden">

      {/* Left Section */}
      <div className="flex flex-col w-full md:w-[45%] gap-6 text-center md:text-left">

        <h1 className="text-center font-bold mb-10 text-4xl">
          Upload <span className="text-orange-500">Jobs</span>
        </h1>
		{/* <div className="w-[26rem] sm:hidden md:w-[36rem] lg:w-[38rem]">
          <img
            src={assets.uploadAvatar}
            alt="Upload Job Avatar"
            className="w-full h-full  object-contain"
          />
        </div> */}

        <form className="space-y-4">

          {/* Row 1 */}
          <div className="flex flex-row gap-4">
            
            <div className="w-full ">
              <label className="block sm:text-left  text-sm font-medium text-gray-700 mb-1">
                Job Title
              </label>
              <input
                required
                type="text"
                placeholder="Software Engineer"
                className="w-full border border-orange-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div className="w-full">
              <label className="block sm:text-left text-sm font-medium text-gray-700 mb-1">
                Job Location
              </label>
              <input
                required
                type="text"
                placeholder="Kolkata"
                className="w-full border border-orange-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-row gap-4">
            
            <div className="w-full">
              <label className="block sm:text-left text-sm font-medium text-gray-700 mb-1">
                Company Name
              </label>
              <input
                required
                type="text"
                placeholder="TCS"
                className="w-full border border-orange-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div className="w-full">
              <label className="block sm:text-left text-sm font-medium text-gray-700 mb-1">
                Job Type
              </label>
              <select
                className="w-full p-2 rounded-md border border-orange-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option>Internship</option>
                <option>Full Time</option>
                <option>Part Time</option>
              </select>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-row gap-4">
            
            <div className="w-full">
              <label className="block sm:text-left text-sm font-medium text-gray-700 mb-1">
                Salary Range(INR)
              </label>
              <input
                required
                type="number"
                placeholder="INR 335000 - 425000"
                className="w-full border border-orange-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div className="w-full">
              <label className="block sm:text-left text-sm font-medium text-gray-700 mb-1">
                Experience
              </label>
              <input
                required
                type="number"
                placeholder="0-1y"
                className="w-full border border-orange-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block sm:text-left text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              rows={5}
              placeholder="Write job description here..."
              className="w-full border border-orange-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
          </div>
        </form>

        {/* Submit Button */}
        <button className="mt-4 py-3 px-4 text-lg sm:mb-5 rounded-xl w-full bg-orange-400 hover:bg-orange-500 text-gray-900 font-semibold">
          Post Job
        </button>

      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center w-full md:w-[55%] sm:mt-10 md:mt-20 md:mb-0 overflow-hidden">
        <div className="w-[26rem] md:block sm:hidden md:w-[36rem] lg:w-[38rem]">
          <img
            src={assets.uploadAvatar}
            alt="Upload Job Avatar"
            className="w-full h-full  object-contain"
          />
        </div>
      </div>

    </div>
  );
};

export default UploadJobs;
