import React, { useState } from "react";
import ResultImage from "../Images/img14.png";

function Page6() {
  const [selected, setSelected] = useState(null);

  const handleSelect = (index) => {
    setSelected(index);
  };

  return (
    <div className="w-full px-4 md:w-[70%] mx-auto mt-10 p-4">
      <h2 className="text-3xl font-semibold mb-4">
        Learning paths based on your answers.
      </h2>
      <p>Choose one to get started. You can switch anytime.</p>
      <div className="flex flex-col md:flex-row mt-6 ">
        <div
          className={`md:w-1/2 mb-4 md:mb-0 mr-0 md:mr-4 border rounded-md p-6 relative ${
            selected === 1 ? 'border-blue-500' : 'border-gray-400'
          }`}
          onClick={() => handleSelect(1)}
        >
          <div className="flex items-center cursor-pointer">
            <div className="md:w-[60%]">
              <p className="text-left">
                <span className="font-bold">Foundation Math</span> Build your foundational skills in algebra,
                geometry, and probability.
              </p>
            </div>
            <div className="md:w-[40%]">
              <img src={ResultImage} alt="" className="w-full" />
            </div>
          </div>
          {selected === 1 && (
            <div className="absolute top-[-15px] right-[160px] bg-yellow-500 text-white py-1 px-3 rounded-full">
              Most Popular
            </div>
          )}
        </div>
        <div
          className={`md:w-1/2 border rounded-md p-6 relative ${
            selected === 2 ? 'border-blue-500' : 'border-gray-400'
          }`}
          onClick={() => handleSelect(2)}
        >
          <div className="flex items-center cursor-pointer">
            <div className="md:w-[60%]">
              <p className="text-left">
                <span className="font-bold">Mathematical thinking</span><br /> Build your foundational skills in algebra,
                geometry, and probability.
              </p>
            </div>
            <div className="md:w-[40%]">
              <img src={ResultImage} alt="" className="w-full" />
            </div>
          </div>
          {selected === 2 && (
            <div className="absolute top-[-15px] right-[160px] bg-yellow-500 text-white py-1 px-3 rounded-full">
              Most Popular
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page6;
