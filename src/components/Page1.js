import React, { useState } from 'react';
import StudentImage from '../Images/img1.png';
import ProfessionalImage from '../Images/img2.png';
import ParentImage from '../Images/img3.png';
import LifelongLearnerImage from '../Images/img4.png';
import TeacherImage from '../Images/img5.png';
import OtherImage from '../Images/img6.png';

function Page1({ onNext }) {
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
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Which describes you best?</h2>
      <p className="text-gray-600 mb-6">This will help us personalize your experience.</p>
      <div className="p-2 rounded-md">
        <div className="flex flex-col gap-2">
          <button
            className={`text-left border border-gray-300 p-3 rounded-md ${selectedOption === 'Student' ? 'bg-gray-200' : ''}`}
            onClick={() => handleOptionSelect('Student')}
          >
            <img src={StudentImage} alt="Student" className="w-6 h-6 mr-2 inline" /> Student <span className='text-gray-500'>or soon to be enrolled</span>
          </button>
          <button
            className={`text-left border border-gray-300 p-3 rounded-md ${selectedOption === 'Professional' ? 'bg-gray-200' : ''}`}
            onClick={() => handleOptionSelect('Professional')}
          >
            <img src={ProfessionalImage} alt="Professional" className="w-6 h-6 mr-2 inline" /> Professional <span className='text-gray-500'>pursuing a career</span>
          </button>
          <button
            className={`text-left border border-gray-300 p-2 rounded-md ${selectedOption === 'Parent' ? 'bg-gray-200' : ''}`}
            onClick={() => handleOptionSelect('Parent')}
          >
            <img src={ParentImage} alt="Parent" className="w-6 h-6 mr-2 inline" /> Parent <span className='text-gray-500'>of a school-age child</span>
          </button>
          <button
            className={`text-left border border-gray-300 p-2 rounded-md ${selectedOption === 'Lifelong Learner' ? 'bg-gray-200' : ''}`}
            onClick={() => handleOptionSelect('Lifelong Learner')}
          >
            <img src={LifelongLearnerImage} alt="Lifelong Learner" className="w-6 h-6 mr-2 inline" /> Lifelong learner
          </button>
          <button
            className={`text-left border border-gray-300 p-2 rounded-md ${selectedOption === 'Teacher' ? 'bg-gray-200' : ''}`}
            onClick={() => handleOptionSelect('Teacher')}
          >
            <img src={TeacherImage} alt="Teacher" className="w-6 h-6 mr-2 inline" /> Teacher
          </button>
          <button
            className={`text-left border border-gray-300 p-2 rounded-md ${selectedOption === 'Other' ? 'bg-gray-200' : ''}`}
            onClick={() => handleOptionSelect('Other')}
          >
            <img src={OtherImage} alt="Other" className="w-6 h-6 mr-2 inline" /> Other
          </button>
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

export default Page1;
