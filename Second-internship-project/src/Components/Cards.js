import React from 'react'

export default function Cards() {
    return (

        <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-4 lg:grid-cols-3 w-[95%] mx-auto">

            {/* Card one */}
            <div className="bg-white rounded-lg shadow-xl p-3 relative hover:scale-105 transition duration-300">

                {/* Button group at the top */}
                <div className="flex justify-between">

                    {/* For Rent button */}
                    <button className="bg-blue-100 hover:bg-blue-700 hover:text-white text-blue-800 border border-blue-700 font-bold mt-3 py-2 px-4 ml-5 rounded-[20px] absolute">
                        For Rent
                    </button>

                    {/* Like button */}
                    <button className="bg-blue-100 hover:bg-blue-700 text-blue-800 hover:text-white font-bold mt-3 h-8 px-3 rounded-[50px] absolute right-[10%]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </button>
                </div>

                {/* Main card image */}
                <img src="/images/bOne.jpg" alt="" className='w-[400px] h-[240px] mx-auto rounded-xl' />

                {/* Address section */}
                <div className="flex mt-5">
                    <div>
                        {/* Red location icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </div>
                    <div className="pl-1">
                        <p>8558 Pecan St.</p>
                    </div>
                </div>

                {/* Location details */}
                <div className="pt-5 pl-2 text-[18px] font-bold">
                    <p>RCE Theaters - 907 S Beckford Dr, <br /> Henderson, NC 27536</p>
                </div>

                {/* Property details */}
                <div className="flex justify-around mt-5 mb-5">

                    <div>
                        {/* Room icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>
                        <p className='pt-[5px]'>3 Rooms</p>
                    </div>

                    <div>
                        {/* Bed icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                        <p className='pt-[5px]'>4 Bed</p>
                    </div>

                    <div>
                        {/* Bath icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                        </svg>
                        <p className='pt-[5px]'>1 Bath</p>
                    </div>

                    <div>
                        {/* Square footage icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>
                        <p className='pt-[5px]'>732 sft</p>
                    </div>
                </div>

                {/* Horizontal line separator */}
                <hr />

                {/* Price and "Read More" button */}
                <div className="flex justify-between">
                    <p className='mt-4'><span className='text-[20px] text-blue-700 text-bold'>$7,255</span>/month</p>
                    <img src="" alt="" />
                    <div>
                        {/* Read More button */}
                        <button className="border border-blue-700 hover:bg-blue-700 hover:text-white text-blue-700 font-bold mt-3 py-2 px-4 ml-5 rounded-[50px]">
                            Read More
                        </button>
                    </div>
                </div>
            </div>

            {/* Card two */}
            <div className="bg-white rounded-lg shadow-xl relative p-3  hover:scale-105 transition duration-300">

                {/* Popular tag for Card two */}
                <div className="Popular-tag">
                    <img src="/images/popularTag.png" alt="" className='absolute w-[120px] bottom-[47%] left-[-0.002%]' />
                </div>

                {/* Button group at the top */}
                <div className="flex justify-between">
                    {/* For Rent button */}
                    <button className="bg-blue-100 hover:bg-blue-700 hover:text-white text-blue-800 border border-blue-700 font-bold mt-3 py-2 px-4 ml-5 rounded-[20px] absolute">
                        For Rent
                    </button>
                    {/* Like button */}
                    <button className="bg-blue-100 hover:bg-blue-700 text-blue-800 hover:text-white font-bold mt-3 h-8 px-3 rounded-[50px] absolute right-[10%]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </button>
                </div>

                {/* Main card image */}
                <img src="/images/bTwo.jpg" alt="" className='w-[400px] h-[240px] mx-auto rounded-xl' />

                {/* Address section */}
                <div className="flex mt-5">
                    <div>
                        {/* Red location icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </div>
                    <div className="pl-1">
                        <p>8558 Pecan St.</p>
                    </div>
                </div>

                {/* Location details */}
                <div className="pt-5 pl-2 text-[18px] font-bold">
                    <p>Costco Wholesale - 1021 Oak Forest <br /> Ln, Myrtle Beach, SC</p>
                </div>

                {/* Property details */}
                <div className="flex justify-around mt-5 mb-5">
                    <div>
                        {/* Room icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>
                        <p className='pt-[5px]'>3 Rooms</p>
                    </div>
                    <div>
                        {/* Bed icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                        <p className='pt-[5px]'>4 Bed</p>
                    </div>
                    <div>
                        {/* Bath icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                        </svg>
                        <p className='pt-[5px]'>1 Bath</p>
                    </div>
                    <div>
                        {/* Square footage icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>
                        <p className='pt-[5px]'>732 sft</p>
                    </div>
                </div>

                {/* Horizontal line separator */}
                <hr />

                {/* Price and "Read More" button */}
                <div className="flex justify-between">
                    <p className='mt-4'><span className='text-[20px] text-blue-700 text-bold'>$7,255</span>/month</p>
                    <img src="" alt="" />
                    <div>
                        {/* Read More button */}
                        <button className="border border-blue-700 hover:bg-blue-700 hover:text-white text-blue-700 font-bold mt-3 py-2 px-4 ml-5 rounded-[50px]">
                            Read More
                        </button>
                    </div>
                </div>
            </div>


            {/* Card three */}
            <div className="bg-white rounded-lg shadow-xl relative p-3  hover:scale-105 transition duration-300">

                {/* Popular tag for Card three */}
                <div className="Popular-tag">
                    <img src="/images/popularTag.png" alt="" className='absolute w-[120px] bottom-[47%] left-[-0.002%]' />
                </div>

                {/* Button group at the top */}
                <div className="flex justify-between">
                    {/* For Sale button */}
                    <button className="bg-blue-100 hover:bg-blue-700 hover:text-white text-blue-800 border border-blue-700 font-bold mt-3 py-2 px-4 ml-5 rounded-[20px] absolute">
                        For Sale
                    </button>
                    {/* Like button */}
                    <button className="bg-blue-100 hover:bg-blue-700 text-blue-800 hover:text-white font-bold mt-3 h-8 px-3 rounded-[50px] absolute right-[10%]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </button>
                </div>

                {/* Main card image */}
                <img src="/images/bThree.jpg" alt="" className='w-[400px] h-[240px] mx-auto rounded-xl' />

                {/* Address section */}
                <div className="flex mt-5">
                    <div>
                        {/* Red location icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </div>
                    <div className="pl-1">
                        <p>3890 Poplar Dr.</p>
                    </div>
                </div>

                {/* Location details */}
                <div className="pt-5 pl-2 text-[18px] font-bold">
                    <p>Regal North Hills - 4150 Main at North <br /> Hills St, Releigh</p>
                </div>

                {/* Property details */}
                <div className="flex justify-around mt-5 mb-5">
                    <div>
                        {/* Room icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>
                        <p className='pt-[5px]'>3 Rooms</p>
                    </div>
                    <div>
                        {/* Bed icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                        <p className='pt-[5px]'>4 Bed</p>
                    </div>
                    <div>
                        {/* Bath icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                        </svg>
                        <p className='pt-[5px]'>1 Bath</p>
                    </div>
                    <div>
                        {/* Square footage icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>
                        <p className='pt-[5px]'>732 sft</p>
                    </div>
                </div>

                {/* Horizontal line separator */}
                <hr />

                {/* Price and "Read More" button */}
                <div className="flex justify-between">
                    <p className='mt-4'><span className='text-[20px] text-blue-700 text-bold'>$5,256</span>/month</p>
                    <img src="" alt="" />
                    <div>
                        {/* Read More button */}
                        <button className="border border-blue-700 hover:bg-blue-700 hover:text-white text-blue-700 font-bold mt-3 py-2 px-4 ml-5 rounded-[50px]">
                            Read More
                        </button>
                    </div>
                </div>
            </div>


            {/* Card four */}
            <div className="bg-white rounded-lg shadow-xl relative p-3  hover:scale-105 transition duration-300">

                {/* Button group at the top */}
                <div className="flex justify-between">
                    {/* For Rent button */}
                    <button className="bg-blue-100 hover:bg-blue-700 hover:text-white text-blue-800 border border-blue-700 font-bold mt-3 py-2 px-4 ml-5 rounded-[20px] absolute">
                        For Rent
                    </button>
                    {/* Like button */}
                    <button className="bg-blue-100 hover:bg-blue-700 text-blue-800 hover:text-white font-bold mt-3 h-8 px-3 rounded-[50px] absolute right-[10%]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </button>
                </div>

                {/* Main card image */}
                <img src="/images/bFour.jpg" alt="" className='w-[400px] h-[240px] mx-auto rounded-xl' />

                {/* Address section */}
                <div className="flex mt-5">
                    <div>
                        {/* Red location icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </div>
                    <div className="pl-1">
                        <p>8558 Pecan St.</p>
                    </div>
                </div>

                {/* Location details */}
                <div className="pt-5 pl-2 text-[18px] font-bold">
                    <p>Spring Lane Cinemas - 1351 Plaza <br /> Blvd, Sanford, NC 27330</p>
                </div>

                {/* Property details */}
                <div className="flex justify-around mt-5 mb-5">
                    <div>
                        {/* Room icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>
                        <p className='pt-[5px]'>3 Rooms</p>
                    </div>
                    <div>
                        {/* Bed icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                        <p className='pt-[5px]'>4 Bed</p>
                    </div>
                    <div>
                        {/* Bath icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                        </svg>
                        <p className='pt-[5px]'>1 Bath</p>
                    </div>
                    <div>
                        {/* Square footage icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>
                        <p className='pt-[5px]'>732 sft</p>
                    </div>
                </div>

                {/* Horizontal line separator */}
                <hr />

                {/* Section with price, image (empty), and "Read More" button */}
                <div className="flex justify-between">
                    <p className='mt-4'><span className='text-[20px] text-blue-700 text-bold'>$7,255</span>/month</p>
                    <img src="" alt="" />
                    <div>
                        {/* Read More button */}
                        <button className="border border-blue-700 hover:bg-blue-700 hover:text-white text-blue-700 font-bold mt-3 py-2 px-4 ml-5 rounded-[50px]">
                            Read More
                        </button>
                    </div>
                </div>
            </div>


            {/* Card five */}
            <div className="bg-white rounded-lg shadow-xl relative p-3  hover:scale-105 transition duration-300">

                {/* Popular tag */}
                <div className="Popular-tag">
                    <img src="/images/popularTag.png" alt="" className='absolute w-[120px] bottom-[47%] left-[-0.002%]' />
                </div>

                {/* Button group at the top */}
                <div className="flex justify-between">
                    {/* For Sale button */}
                    <button className="bg-blue-100 hover:bg-blue-700 hover:text-white text-blue-800 border border-blue-700 font-bold mt-3 py-2 px-4 ml-5 rounded-[20px] absolute">
                        For Sale
                    </button>
                    {/* Like button */}
                    <button className="bg-blue-100 hover:bg-blue-700 text-blue-800 hover:text-white font-bold mt-3 h-8 px-3 rounded-[50px] absolute right-[10%]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </button>
                </div>

                {/* Main card image */}
                <img src="/images/bFive.jpg" alt="" className='w-[400px] h-[240px] mx-auto rounded-xl' />

                {/* Address section */}
                <div className="flex mt-5">
                    <div>
                        {/* Red location icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </div>
                    <div className="pl-1">
                        <p>8558 Pecan St.</p>
                    </div>
                </div>

                {/* Location details */}
                <div className="pt-5 pl-2 text-[18px] font-bold">
                    <p>RCE Theaters - 907 S Beckford Dr, <br /> Henderson, NC 27536</p>
                </div>

                {/* Property details */}
                <div className="flex justify-around mt-5 mb-5">
                    <div>
                        {/* Room icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>
                        <p className='pt-[5px]'>3 Rooms</p>
                    </div>
                    <div>
                        {/* Bed icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                        <p className='pt-[5px]'>4 Bed</p>
                    </div>
                    <div>
                        {/* Bath icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                        </svg>
                        <p className='pt-[5px]'>1 Bath</p>
                    </div>
                    <div>
                        {/* Square footage icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>
                        <p className='pt-[5px]'>732 ft.</p>
                    </div>
                </div>

                {/* Horizontal line separator */}
                <hr />

                {/* Section with price, image (empty), and "Read More" button */}
                <div className="flex justify-between">
                    <p className='mt-4'><span className='text-[20px] text-blue-700 text-bold'>$7,255</span>/month</p>
                    <img src="" alt="" />
                    <div>
                        {/* Read More button */}
                        <button className="border border-blue-700 hover:bg-blue-700 hover:text-white text-blue-700 font-bold mt-3 py-2 px-4 ml-5 rounded-[50px]">
                            Read More
                        </button>
                    </div>
                </div>
            </div>


            {/* Card six */}
            <div className="bg-white rounded-lg shadow-xl relative p-3  hover:scale-105 transition duration-300">

                {/* Section for the "For rent tag" and the like tag at the top of the image */}
                <div className="flex justify-between">
                    {/* First button of the card which contains "For Rent" tag */}
                    <button className="bg-blue-100 hover:bg-blue-700 hover:text-white text-blue-800 border border-blue-700 font-bold mt-3 py-2 px-4 ml-5 rounded-[20px] absolute">
                        For Rent
                    </button>

                    {/* Second right button of the card that contains "Like" tag */}
                    <button className="bg-blue-100 hover:bg-blue-700 text-blue-800 hover:text-white font-bold mt-3 h-8 px-3 rounded-[50px] absolute right-[10%]">
                        {/* Heroicon JSX link */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </button>
                </div>

                {/* Main card image */}
                <img src="/images/bSix.jpg" alt="" className='w-[400px] h-[240px] mx-auto rounded-xl' />

                {/* Section that contains the address section just below the image */}
                <div className="flex mt-5">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </div>
                    <div className="pl-1">
                        <p>8558 Pecan St.</p>
                    </div>
                </div>

                {/* Section which contains the exact location just below the image address */}
                <div className="pt-5 pl-2 text-[18px] font-bold">
                    <p>Dollar General - 5416 Rock Quary Rd, <br /> Raleigh, NC 27</p>
                </div>

                <div className="flex justify-around mt-5 mb-5">
                    {/* Details about the property */}
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>
                        <p className='pt-[5px]'>3 Rooms</p>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                        <p className='pt-[5px]'>4 Bed</p>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                        </svg>
                        <p className='pt-[5px]'>1 Bath</p>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>
                        <p className='pt-[5px]'>732 ft.</p>
                    </div>
                </div>

                {/* Horizontal line separator */}
                <hr />

                {/* Section with price, image (empty), and "Read More" button */}
                <div className="flex justify-between">
                    <p className='mt-4'><span className='text-[20px] text-blue-700 text-bold'>$7,255</span>/month</p>
                    <img src="" alt="" />
                    <div>
                        <button className="border border-blue-700 hover:bg-blue-700 hover:text-white text-blue-700 font-bold mt-3 py-2 px-4 ml-5 rounded-[50px]">
                            Read More
                        </button>
                    </div>
                </div>
            </div>


        </div>
    )
}
