"use client"
import Link from 'next/link';
import Sidebar from './Sidebar';
import { useEffect, useState } from 'react';
import image from '../image/logo.png'
import { IoPerson } from "react-icons/io5";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import {app} from '../../../firebase/credentials'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Loder  from './Loder';
import axios from 'axios';
const Dashboard = ({children}) => {
    
const [checkuser,setCheckuser]=useState("searching")
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  
  const auth = getAuth(app);
const router=useRouter()

  

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSignOut = () => {
    signOut(auth).then(() => {
      
    }).catch((error) => {
      console.log(error);
      
    });
  }
  useEffect(() => {
    const checkAuth = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login")
        setCheckuser("searching")
      } 
      if (user) {
        setCheckuser("found")
        const findUser = async (email) => {
          try {
            const response = await axios.get(`https://itoa-backend.onrender.com/api/users/${email}`);
            setImageUrl(response.data.imageUrl);
            
          } catch (error) {
            if (error.response && error.response.status === 404) {
              console.log('User not found');
            } else {
              console.log('Failed to find user:', error.message);
            }
          }
        }
        findUser(user.email)
      }
      
    });
  
    return () => checkAuth();
  }, []);
  return (
    <>
    {checkuser==="searching"?<Loder/>:<div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={sidebarOpen}  />
      <div className="flex-1 flex flex-col">
      <header className="sticky p-4 h-[64px] flex justify-between md:justify-end md:pr-6 items-center bg-[#2c2c2c]  text-white ">
          <div className='md:hidden flex justify-center items-center h-14   gap-2'> <Link href="/"><Image
      src={image}
      className="h-12 w-24 "
      alt="logo"
    /></Link>  </div>
    <div className='flex justify-center items-center gap-2'>
          <div className="relative  ">
          <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8]  to-[#01fefc] p-[2px] rounded-full">
            <div className="w-10 h-10 overflow-hidden  bg-[#3c3c3c] text-3xl flex justify-center items-center rounded-full cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)}>

{imageUrl?<Image src={imageUrl} width={40} height={40}/> :<svg aria-hidden="true" class="inline w-6 h-6 text-[#d3d3d3] animate-spin  fill-[#01fefc]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>}
          
          </div>
          </div>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-32 bg-[#2c2c2c] rounded-md shadow-lg py-2 z-20">
            <Link href="/setting">
              <p className="block px-4 py-2 text-[#d3d3d3] hover:bg-[#4f4f4f]">Profile</p>
            </Link>
            
            <button
            onClick={handleSignOut}
              className="block px-4 py-2 text-[#d3d3d3] hover:bg-[#4f4f4f] w-full text-left"
              >
              Logout
            </button>
             
          </div>
        )}
      </div>
          <button onClick={toggleSidebar} className="focus:outline-none  block md:hidden">
            <svg className="w-6 h-10" fill="none"  stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={sidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto bg-[#1e1e1e]">
        {children}
        </main>
      </div>
    </div>}
    
    </>
  );
};

export default Dashboard;
