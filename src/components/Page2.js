import React, { useState } from 'react';
import LearningSkillsImage from '../Images/img7.png';
import ExploringTopicsImage from '../Images/img8.png';
import RefreshingMathImage from '../Images/img9.png';
import ExercisingBrainImage from '../Images/img10.png';
import SomethingElseImage from '../Images/img11.png';

function Page2({ onNext }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    if (selectedOption !== '') {
      onNext(selectedOption);
    } else {
      alert('Please select an option before continuing.');
    }
  };

  return (
    <div>
      <h2 className='text-2xl font-semibold mb-4'>Which are you most interested in?</h2>
      <p>Choose just one.This will help us get you started (but won't limit your experience)</p>
      <div className="flex justify-center p-2 rounded-md">
        <div className="flex flex-col w-fit gap-2 mt-10">
          <button
            className={`flex gap-5 text-left border border-gray-300 p-3 px-10 rounded-md ${
              selectedOption === 'Learning specific skills to advance my career'
                ? 'bg-gray-200'
                : ''
            }`}
            onClick={() =>
              handleOptionSelect(
                'Learning specific skills to advance my career'
              )
            }
          >
            <img src={LearningSkillsImage} alt="Learning Skills" className="w-6 h-6 mr-2 inline" />
            Learning specific skills to advance my career
          </button>
          <button
            className={`flex gap-5 text-left border border-gray-300 p-3 px-10 rounded-md ${
              selectedOption === 'Exploring more topics' ? 'bg-gray-200' : ''
            }`}
            onClick={() => handleOptionSelect("Exploring more topics I'm interested in")}
          >
            <img src={ExploringTopicsImage} alt="Exploring Topics" className="w-6 h-6 mr-2 inline" />
            Exploring more topics I'm interested in
          </button>
          <button
            className={`flex gap-5 text-left border border-gray-300 p-3 px-10 rounded-md ${
              selectedOption === 'Refreshing my math foundation'
                ? 'bg-gray-200'
                : ''
            }`}
            onClick={() => handleOptionSelect('Refreshing my math foundation')}
          >
            <img src={RefreshingMathImage} alt="Refreshing Math" className="w-6 h-6 mr-2 inline" />
            Refreshing my math foundations
          </button>
          <button
            className={`flex gap-5 text-left border border-gray-300 p-3 px-10 rounded-md ${
              selectedOption === 'Exercising my brain to stay sharp'
                ? 'bg-gray-200'
                : ''
            }`}
            onClick={() => handleOptionSelect('Exercising my brain to stay sharp')}
          >
            <img src={ExercisingBrainImage} alt="Exercising Brain" className="w-6 h-6 mr-2 inline" />
            Exercising my brain to stay sharp
          </button>
          <button
            className={`flex gap-5 text-left border border-gray-300 p-3 px-10 rounded-md ${
              selectedOption === 'Something else' ? 'bg-gray-200' : ''
            }`}
            onClick={() => handleOptionSelect('Something else')}
          >
            <img src={SomethingElseImage} alt="Something Else" className="w-6 h-6 mr-2 inline" />
            Something else
          </button>
        </div>
      </div>
      <button className="mt-6 bg-black text-white font-semibold py-2 px-10 rounded focus:outline-none focus:shadow-outline" onClick={handleContinue}>Continue</button>
    </div>
  );
}

export default Page2;
