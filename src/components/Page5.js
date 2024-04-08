import React, { useState } from "react";
import AlienImage from "../Images/img13.png";
import { AiFillStar } from "react-icons/ai";
import Loading from './Loading';

function Page5({ onNext }) {
  const [loading, setLoading] = useState(false);

  const handleContinue = () => {
    setLoading(true);
    setTimeout(() => {
      onNext();
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="w-full">
      {loading ? (
        <Loading />
      ) : (
        <div className="mx-auto mt-10 p-4 sm:w-[80%] md:w-[70%] lg:w-[60%]">
          <div className="flex flex-col items-center justify-center">
            <img
              className="h-40 sm:h-48 md:h-56 lg:h-64 w-full md:w-auto mb-6"
              src={AlienImage}
              alt="Sample"
            />
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4">You are on the way</h2>
              <div className="flex items-center justify-center space-x-2 mb-4">
                {Array.from({ length: 5 }, (_, index) => (
                  <AiFillStar
                    key={index}
                    className="h-6 w-6 text-yellow-500 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                "Through its engaging and well-structured courses, Brilliant has
                taught me mathematical concepts that I previously struggled to
                understand. I now feel confident approaching both technical job
                interviews and real-world problem-solving situations."
              </p>
              <p>- Jacob S.</p>
            </div>
          </div>
          <button
            className="mt-8 bg-black text-white font-semibold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
}

export default Page5;
