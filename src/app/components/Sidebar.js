import { useState } from 'react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={` fixed md:relative inset-y-0 left-0 z-50  w-56 bg-gray-800 text-white transform md:top-0 top-[62px] ${isOpen ? 'translate-x-0 ' : '-translate-x-full'} transition-transform lg:translate-x-0`}>
      <div className="flex flex-col h-full">
        <div className="flex-1 p-4 space-y-2">
          
          <a href="#" className="block p-2 bg-gray-700 rounded text-center ">Dashboard</a>
          <a href="#" className="block p-2 bg-gray-700 rounded text-center">Sales</a>
          <a href="#" className="block p-2 bg-gray-700 rounded text-center">Analytics</a>
          <a href="#" className="block p-2 bg-gray-700 rounded text-center">Messages</a>
          <a href="#" className="block p-2 bg-gray-700 rounded text-center">Settings</a>
        </div>
        <div className="p-4 space-y-2 border-t border-gray-700">
          <a href="#" className="block p-2 bg-gray-700 rounded text-center">Account</a>
          <a href="#" className="block p-2 bg-gray-700 rounded text-center">Settings</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
