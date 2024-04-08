import React, { useState } from 'react';
import PullyImage from '../Images/img12.png';

function Page3({ onNext }) {

  const handleContinue = () => {
      onNext();
  };

  return (
    <div className="w-full md:w-[65%] mx-auto mt-10 p-4">
      <div className="text-center md:text-left md:flex justify-center items-center">
        <div className="md:mr-20 mb-6 md:mb-0">
          <img
            className="h-64 w-full rounded-md md:mr-20"
            src={PullyImage}
            alt="Sample"
          />
        </div>
        <div className="md:ml-4">
          <h2 className="text-2xl font-semibold mb-4">You're in the right place</h2>
          <p className="text-gray-600 md:w-[67%]">
            Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science. 
          </p>
        </div>
      </div>
      <button
        className="mt-6 bg-black text-white font-semibold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
        onClick={handleContinue}
      >
        Continue
      </button>
    </div>
  );
}

export default Page3;
