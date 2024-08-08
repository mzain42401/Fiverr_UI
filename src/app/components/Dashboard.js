"use client"
import Link from 'next/link';
import Sidebar from './Sidebar';
import { useState } from 'react';
import Image from 'next/image';
import image from '../image/logo.png'
const Dashboard = ({children}) => {
    

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
    
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={sidebarOpen}  />
      <div className="flex-1 flex flex-col">
      <header className="sticky p-4 h-[64px] flex justify-between md:justify-end md:pr-6 items-center bg-[#2c2c2c]  text-white ">
          <div className='md:hidden flex justify-center items-center h-14   gap-2'> <Link href="/"><Image
      src={image}
      className="h-12 w-24 "
      alt="Picture of the author"
    /></Link>  </div>
          <div className="relative ">
          <img
          src="https://via.placeholder.com/150" // Replace with your user image path
          alt="User"
          className="w-10 h-10 rounded-full cursor-pointer"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        />
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-32 bg-[#2c2c2c] rounded-md shadow-lg py-2 z-20">
            <Link href="/setting">
              <p className="block px-4 py-2 text-[#d3d3d3] hover:bg-[#4f4f4f]">Profile</p>
            </Link>
            <Link href="/login">
            <button
              // Replace with your logout logic
              className="block px-4 py-2 text-[#d3d3d3] hover:bg-[#4f4f4f] w-full text-left"
              >
              Logout
            </button>
              </Link>
          </div>
        )}
      </div>
          <button onClick={toggleSidebar} className="focus:outline-none  block md:hidden">
            <svg className="w-6 h-10" fill="none"  stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={sidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </header>
        <main className="flex-1 overflow-y-auto bg-[#1e1e1e]">
        {children}
        </main>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
