import React, { useState } from 'react';

// Navigation component
export default function Navigation() {
  const [activeButton, setActiveButton] = useState(null);

  // Function to handle button click and toggle active state
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName === activeButton ? null : buttonName);
  };

  const isButtonActive = (buttonName) => buttonName === activeButton;

  return (
    <div className='w-[90%] mx-auto'>
      <div className="flex justify-between">
        <div className="">
          {/* Buttons for different locations */}
          <button 
            className={`bg-[#c7d2f6] text-black font-bold mt-3 py-2 px-4 ml-5 rounded-[20px] hover:scale-110 transition duration-300 ${isButtonActive('New York') ? 'bg-blue-700  text-white' : ''}`}
            onClick={() => handleButtonClick('New York')}
          >
            New York
          </button>
          <button
            className={`bg-[#c7d2f6] text-black font-bold mt-3 py-2 px-4 ml-5 rounded-[20px] hover:scale-110 transition duration-300 ${isButtonActive('Mumbai') ? 'bg-blue-700  text-white' : ''}`}
            onClick={() => handleButtonClick('Mumbai')}
          >
            Mumbai
          </button>
          <button
            className={`bg-[#c7d2f6] text-black font-bold mt-3 py-2 px-4 ml-5 rounded-[20px] hover:scale-110 transition duration-300 ${isButtonActive('Paris') ? 'bg-blue-700  text-white' : ''}`}
            onClick={() => handleButtonClick('Paris')}
          >
            Paris
          </button>
          <button
            className={`bg-[#c7d2f6] text-black font-bold mt-3 py-2 px-4 ml-5 rounded-[20px] hover:scale-110 transition duration-300 ${isButtonActive('London') ? 'bg-blue-700  text-white' : ''}`}
            onClick={() => handleButtonClick('London')}
          >
            London
          </button>
        </div>
        <div className="">
          {/* Button to view all */}
          <button className="bg-[#c7d2f6] border border-blue-700 text-blue-700 font-bold mt-3 py-2 px-4 ml-5 rounded-[20px]">
            View All ➡️
          </button>
        </div>
      </div>
    </div>
  );
}
