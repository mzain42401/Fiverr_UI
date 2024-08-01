import Link from "next/link";


const Sidebar = ({ isOpen}) => {
  return (
    <div className={` fixed md:sticky inset-y-0 left-0 z-50  w-56 bg-[#2c2c2c] text-white transform  md:top-0 top-[56px]  ${isOpen ? 'translate-x-0 ' : '-translate-x-full'} transition-transform md:translate-x-0`}>
      <div className="flex flex-col h-full ">
        <div className='hidden md:block'>
          <div className=' h-16 flex justify-center items-center'> <Link href="/">LOGO</Link>  </div>
          </div>
        <div className="flex-1 p-4 space-y-1">
          
          <Link href="/" className="block p-2 bg-[#3a3a3a] text-[#d3d3d3]  hover:bg-[#404040] hover:text-[#ffffff] rounded text-center ">Dashboard</Link>
          <Link href="/ideaGen" className="block p-2 bg-[#3a3a3a] text-[#d3d3d3]  hover:bg-[#404040] hover:text-[#ffffff] rounded text-center">Idea Generation</Link>
          <Link href="/contentGen" className="block p-2 bg-[#3a3a3a] text-[#d3d3d3]  hover:bg-[#404040] hover:text-[#ffffff] rounded text-center">Content Generation</Link>
          <Link href="/editing" className="block p-2 bg-[#3a3a3a] text-[#d3d3d3]  hover:bg-[#404040] hover:text-[#ffffff] rounded text-center">Editing</Link>
          <Link href="/schedule" className="block p-2 bg-[#3a3a3a] text-[#d3d3d3]  hover:bg-[#404040] hover:text-[#ffffff] rounded text-center">Scheduling</Link>
          <Link href="/subscription" className="block p-2 bg-[#3a3a3a] text-[#d3d3d3]  hover:bg-[#404040] hover:text-[#ffffff] rounded text-center">Subscription</Link>

          
        </div>
        <div className="p-4 space-y-2 border-t border-gray-700">
          <Link href="/setting" className="block p-2 bg-[#3a3a3a] text-[#d3d3d3]  hover:bg-[#404040] hover:text-[#ffffff] rounded text-center">Settings</Link>
          <Link href="/help" className="block p-2 bg-[#3a3a3a] text-[#d3d3d3]  hover:bg-[#404040] hover:text-[#ffffff] rounded text-center">Help</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
