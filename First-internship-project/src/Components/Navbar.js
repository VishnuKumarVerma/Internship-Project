import React, { useState } from 'react';

export default function Navbar({ data, setData }) {
  // State for search input and visibility of search results
  const [searchText, setSearchText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle search
  const handleSearch = () => {
    setIsVisible(true);

    // Filter the data based on the search text
    const filteredData = data.filter((item) =>
      item.toLowerCase().includes(searchText.toLowerCase())
    );

    // Update the filtered data
    setData(filteredData);
  };

  return (
    <div>
      {/* Navbar Container */}
      <div className="w-[95%] m-5 mt-4 rounded-xl mx-auto shadow-xl">
        {/* Navbar Content */}
        <div className="flex bg-[#cbdcf2] h-[70px] rounded-[20px]">
          {/* Search Input */}
          <input
            type="search"
            placeholder="Search.."
            className="border-b-2 h-8 m-5 rounded-[10px] pl-5 mt-5"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          {/* Dropdowns */}
          <ul className='flex align-center h-full'>
            <li className='m-auto pr-5'>
              {/* Resources Dropdown */}
              <select name="resources" id="resources" className='bg-none w-27 border-none bg-[#cbdcf2]'>
                <option value="all">Resources</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </li>
            <li className='m-auto'>
              {/* Brands Dropdown */}
              <select name="brands" id="brands" className='border-none bg-[#cbdcf2]'>
                <option value="all">All brands</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
