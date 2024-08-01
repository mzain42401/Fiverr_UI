import { useState } from 'react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={` fixed md:sticky inset-y-0 left-0 z-50  w-56 bg-gray-800 text-white transform  md:top-0 top-[56px]  ${isOpen ? 'translate-x-0 ' : '-translate-x-full'} transition-transform lg:translate-x-0`}>
      <div className="flex flex-col h-full ">
        <div className='hidden lg:block'><h1 className=' h-16 flex justify-center items-center'>LOGO</h1></div>
        <div className="flex-1 p-4 space-y-1">
          
          <a href="#" className="block p-2 bg-gray-700 rounded text-center ">Dashboard</a>
          <a href="#" className="block p-2 bg-gray-700 rounded text-center">Idea Generation</a>
          <a href="#" className="block p-2 bg-gray-700 rounded text-center">Content Generation</a>
          <a href="#" className="block p-2 bg-gray-700 rounded text-center">Editing</a>
          <a href="#" className="block p-2 bg-gray-700 rounded text-center">Scheduling</a>
          <a href="#" className="block p-2 bg-gray-700 rounded text-center">Subscription</a>

          
        </div>
        <div className="p-4 space-y-2 border-t border-gray-700">
          <a href="#" className="block p-2 bg-gray-700 rounded text-center">Settings</a>
          <a href="#" className="block p-2 bg-gray-700 rounded text-center">Help</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
