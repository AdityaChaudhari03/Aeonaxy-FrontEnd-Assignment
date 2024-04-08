import React, { useState } from 'react';

function Page4({ onNext }) {
  const [selectedLevel, setSelectedLevel] = useState('');

  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
  };

  const handleContinue = () => {
    if (selectedLevel !== '') {
      onNext(selectedLevel);
    } else {
      alert('Please select a math comfort level before continuing.');
    }
  };

  const levels = [
    { title: 'Arithmetic',level: "Introductory", formula: '5 * 1/2 = ? ' },
    { title: 'basic Algebra',level: "Foundational", formula: '3x + 5 = 4' },
    { title: 'Intermediate Algebra', level: "Intermediate", formula: 'ax^2 + bx + c = 0' },
    { title: 'Calculus', level: "Advanced", formula: '∫(0 to ∞) e^(-x^2) dx = √π/2' },
  ];

  return (
    <div className="w-[70%] mx-auto mt-10 p-4 rounded-md">
      <h2 className="text-2xl font-semibold mb-4">What is your math comfort level?</h2>
      <p className="text-gray-600 mb-6">Choose the highest level you feel confident in - you can always adjust later.</p>
      <div className="mt-16 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {levels.map((level, index) => (
          <div key={index} className={`border border-gray-300 p-4 rounded-md cursor-pointer ${selectedLevel === level.title ? 'bg-gray-200' : ''}`} onClick={() => handleLevelSelect(level.title)}>
            <h3 className="text-lg font-semibold mb-2">{level.formula}</h3>
            <p className="mb-2">{level.title}</p>
            <p className="text-gray-500">{level.level}</p>
          </div>
        ))}
      </div>
      <button
        className="mt-6  bg-black text-white font-semibold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
        onClick={handleContinue}
      >
        Continue
      </button>
    </div>
  );
}

export default Page4;
