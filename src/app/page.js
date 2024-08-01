"use client"
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { useState } from 'react';

const Page = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
    
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col">
      <header className="sticky p-4 flex justify-between lg:justify-center items-center bg-gray-800 text-white ">
          <h1 className='lg:hidden block'>Logo</h1>
          <input className='flex-2' type="text" />
          
          <button onClick={toggleSidebar} className="focus:outline-none lg:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={sidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </header>
        <main className="flex-1 overflow-y-auto">
          <MainContent />
        </main>
      </div>
    </div>
    </>
  );
};

export default Page;
