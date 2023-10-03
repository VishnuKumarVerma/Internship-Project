import React from 'react';

// Header component
export default function Header() {
  return (
    <div className='mx-auto m-10 w-[90%] text-black'>
      <div className="text-center">
        {/* Main title */}
        <h1 className='text-[45px] font-bold text-sky-950'>Featured Listed Property</h1>
        
        {/* Subtitle */}
        <p className='mx-auto w-[48%] pt-5 justify-content'>
          Real Estate can be bought, sold, leased, or rented, and can be a valuable investment opportunity. The value of real estate can be...
        </p>
      </div>
    </div>
  );
}
