import React from "react";
import { MdEmail } from "react-icons/md";

const SupportCard = () => {
  return (
    <div className="flex flex-col lg:flex-row max-w-7xl mx-auto my-8 bg-gray-50 shadow-lg rounded-lg">
      {/* Left Section */}
      <div className="lg:w-1/2 w-full p-8 space-y-4 bg-blue-100 rounded-t-lg lg:rounded-t-none lg:rounded-l-lg">
        <div className="flex items-center gap-3 text-blue-600">
          <MdEmail className="text-4xl" />
          <h1 className="text-2xl font-bold">Contact Us</h1>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
          molestias repudiandae excepturi perferendis voluptas facere sed,
          culpa, officia praesentium aperiam sit ipsa hic nesciunt aspernatur
          eveniet alias assumenda voluptates ut sunt accusantium nihil ullam.
        </p>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 w-full bg-white rounded-b-lg lg:rounded-b-none lg:rounded-r-lg p-8">
        <p className="text-gray-600 text-sm mb-4">
          You will receive a response within 24 hours of submission.
        </p>
        <form className="space-y-4">
          {/* Name and Surname */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Surname
              </label>
              <input
                type="text"
                placeholder="Surname"
                className="input input-bordered w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Message
            </label>
            <textarea
              placeholder="Write your message here"
              className="textarea textarea-bordered w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              rows="4"
            ></textarea>
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="terms"
              className="checkbox border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              htmlFor="terms"
              className="text-sm text-gray-600 leading-tight"
            >
              I agree with the terms and conditions
            </label>
          </div>

          {/* Buttons */}
          <div className="flex flex-col lg:flex-row gap-4">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
              Send a Message
            </button>
            <button
              type="button"
              className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition"
            >
              Book a Meeting
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SupportCard;
