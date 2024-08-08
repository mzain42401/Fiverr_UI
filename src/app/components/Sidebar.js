"use client"
import Link from "next/link";
import { HiLightBulb } from "react-icons/hi";
import { IoMdSettings,IoMdHelpCircle } from "react-icons/io";
import { MdSpaceDashboard,MdEdit,MdTextSnippet  } from "react-icons/md";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { FaSackDollar } from "react-icons/fa6";
import { usePathname,  } from 'next/navigation'
import Image from "next/image";
import image from "../image/logo.png"



const Sidebar = ({ isOpen}) => {

  const path = usePathname();

  console.log(path," zain");
  

  
  return (
    <div className={` fixed md:sticky inset-y-0 left-0 z-50  w-[226px] bg-[#2c2c2c] text-white transform  md:top-0 top-[56px]  ${isOpen ? 'translate-x-0 ' : '-translate-x-full'} transition-transform md:translate-x-0`}>
      <div className="flex flex-col h-full ">
        <div className='hidden md:block'>
          <div className=' h-16 flex justify-center items-center  gap-2'> <Link href="/"><Image
      src={image}
      className="h-14 w-28 "
      alt="Picture of the author"
    /></Link>  </div>
          
          </div>
        <div className="flex-1 p-4 space-y-1">
          <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">

         <Link href="/" className={`${path === "/" ? "text-[#e59dd8]" : "text-[#d3d3d3]"} p-2 bg-[#3a3a3a]  hover:bg-[#404040] hover:text-[#ffffff] rounded text-center flex justify-center items-center gap-2`}> <p>
         <svg width="16" height="18" className="inline-block">
      <defs>
        <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#c9f3bf" />
          <stop offset="50%" stopColor="#e59dd8" />

          <stop offset="100%" stopColor="#01fefc" />
        </linearGradient>
      </defs>
      <MdSpaceDashboard fill="url(#gradient)" />
    </svg>
          
          </p> <p className=" text-left w-[85%]">Dashboard</p></Link>
           </div>
           <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
             <Link href="/ideaGen" className={`${path === "/ideaGen" ? "text-[#e59dd8]" : "text-[#d3d3d3]"} p-2 bg-[#3a3a3a] text-[#d3d3d3]  hover:bg-[#404040] hover:text-[#ffffff] rounded text-center  flex justify-center items-center gap-2`}> <p>
             <svg width="16" height="18" className="inline-block">
      <defs>
        <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#c9f3bf" />
          <stop offset="50%" stopColor="#e59dd8" />

          <stop offset="100%" stopColor="#01fefc" />
        </linearGradient>
      </defs>
      <HiLightBulb fill="url(#gradient)" />
    </svg> 
             
              </p> <p className=" text-left w-[85%]">Idea Generation</p></Link>
          
           </div>
           <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
         <Link href="/contentGen" className={` ${path === "/contentGen" ? "text-[#e59dd8]" : "text-[#d3d3d3]"} p-2 bg-[#3a3a3a] text-[#d3d3d3]  hover:bg-[#404040] hover:text-[#ffffff] rounded text-center flex justify-center items-center gap-2`}> <p>
         <svg width="16" height="18" className="inline-block">
      <defs>
        <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#c9f3bf" />
          <stop offset="50%" stopColor="#e59dd8" />

          <stop offset="100%" stopColor="#01fefc" />
        </linearGradient>
      </defs>
      <MdTextSnippet fill="url(#gradient)" />
    </svg>
          
          </p> <p className=" text-left w-[85%]">Content Generation</p></Link>   
           </div>
           <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
            <Link href="/editing" className={`${path === "/editing" ? "text-[#e59dd8]" : "text-[#d3d3d3]"} p-2 bg-[#3a3a3a] text-[#d3d3d3]  hover:bg-[#404040] hover:text-[#ffffff] rounded text-center flex justify-center items-center gap-2`}> <p>
            <svg width="16" height="18" className="inline-block">
      <defs>
        <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#e59dd8" />
          <stop offset="50%" stopColor="#c9f3bf" />

          <stop offset="100%" stopColor="#01fefc" />
        </linearGradient>
      </defs>
      <MdEdit fill="url(#gradient)" />
    </svg>
             
              </p> <p className=" text-left w-[85%]">Editing</p></Link>
          
           </div>
           <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
            <Link href="/schedule" className={`${path === "/schedule" ? "text-[#e59dd8]" : "text-[#d3d3d3]"} p-2 bg-[#3a3a3a] text-[#d3d3d3]  hover:bg-[#404040] hover:text-[#ffffff] rounded text-center flex justify-center items-center gap-2`}> <p>
            <svg width="16" height="18" className="inline-block">
      <defs>
        <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#c9f3bf" />
          <stop offset="50%" stopColor="#e59dd8" />

          <stop offset="100%" stopColor="#01fefc" />
        </linearGradient>
      </defs>
      <RiCalendarScheduleFill fill="url(#gradient)" />
    </svg>
              
              </p> <p className=" text-left w-[85%]">Scheduling</p></Link>
            </div>
            <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
         <Link href="/subscription" className={`${path === "/subscription" ? "text-[#e59dd8]" : "text-[#d3d3d3]"} p-2 bg-[#3a3a3a] text-[#d3d3d3]  hover:bg-[#404040] hover:text-[#ffffff] rounded text-center flex justify-center items-center gap-2`}> <p >
          
         <svg width="16" height="18" className="inline-block">
      <defs>
        <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#c9f3bf" />
          <stop offset="50%" stopColor="#e59dd8" />

          <stop offset="100%" stopColor="#01fefc" />
        </linearGradient>
      </defs>
      <FaSackDollar fill="url(#gradient)" />
    </svg>
         </p><p className=" text-left w-[85%]">Subscription</p></Link>
   
            </div>
          
          
        </div>
        <div className="p-4 space-y-2 border-t border-gray-700">
        <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
          <Link href="/setting" className={`${path === "/setting" ? "text-[#e59dd8]" : "text-[#d3d3d3]"} p-2 bg-[#3a3a3a] text-[#d3d3d3]  hover:bg-[#404040] hover:text-[#ffffff] rounded text-center flex justify-center items-center gap-2`}><p>
          <svg width="16" height="18" className="inline-block">
      <defs>
        <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#c9f3bf" />
          <stop offset="50%" stopColor="#e59dd8" />

          <stop offset="100%" stopColor="#01fefc" />
        </linearGradient>
      </defs>
      <IoMdSettings fill="url(#gradient)" />
    </svg>
          </p><p className="bg-red-90 text-left w-[85%]">Settings</p></Link>  
            </div>
            <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
           <Link href="/help" className={`${path === "/help" ? "text-[#e59dd8]" : "text-[#d3d3d3]"} p-2 bg-[#3a3a3a] text-[#d3d3d3]  hover:bg-[#404040] hover:text-[#ffffff] rounded text-center flex justify-center items-center gap-2`}><p>
           <svg width="16" height="18" className="inline-block">
      <defs>
        <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#c9f3bf" />
          <stop offset="50%" stopColor="#e59dd8" />

          <stop offset="100%" stopColor="#01fefc" />
        </linearGradient>
      </defs>
      <IoMdHelpCircle fill="url(#gradient)" />
    </svg>
            </p><p className=" text-left w-[85%]">Help</p></Link>
           
            </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
