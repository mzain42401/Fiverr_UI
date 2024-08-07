"use client"
import Link from 'next/link';
import Sidebar from './Sidebar';
import { useState } from 'react';
import Image from 'next/image';
import image from '../image/logo.png'
const Dashboard = ({children}) => {
    console.log("zain",children);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
    
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={sidebarOpen}  />
      <div className="flex-1 flex flex-col">
      <header className="sticky p-4 h-[64px] flex justify-between md:justify-center items-center bg-[#2c2c2c]  text-white ">
          <div className='md:hidden flex justify-center items-center h-14   gap-2'> <Link href="/"><Image
      src={image}
      className="h-12 w-24 "
      alt="Picture of the author"
    /></Link>  </div>
          
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
