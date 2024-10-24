import React from "react";
import Image from "next/image";

const JoinOurProgramPage = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg flex flex-col lg:flex-row items-center">
      <div className="w-full lg:w-2/3 mb-6 lg:mb-0">
        <h1 className="text-4xl font-extrabold mb-6 text-center lg:text-left text-black">
          Attend an event
        </h1>
        <p className="mb-6 text-lg text-[#404040] text-justify lg:text-left">
          Sign up for our events and learning programs. We look forward to
          seeing you there!
        </p>
        <div className="flex justify-center lg:justify-start mb-6">
          <button className="bg-black hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300">
            Upcoming events
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
        <Image
          src="images/placeholder.png"
          alt="Placeholder"
          width={150}
          height={150}
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default JoinOurProgramPage;
