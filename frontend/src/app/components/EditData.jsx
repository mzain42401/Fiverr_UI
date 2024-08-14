"use client"
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import { useUser } from '../../../context/user';
import axios from 'axios';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { FaPencilAlt } from 'react-icons/fa';


const EditData = () => {
    
  const {email}=useUser()
  const [updateName,setUpdatededName]=useState()
   const [btnLoder,setbtnLoder]=useState(false)
   const [updateImageUrl,setUdatedImageUrl]=useState()
   const fileInputRef =useRef(null);

   const handleIconClick = () => {
     // Trigger the file input click
     fileInputRef.current.click();
   };
 
   const handleFileChange = (event) => {
     const file = event.target.files[0];
     
   };
 
   

  const router = useRouter()
  const updateData= async (e)=>{
    e.preventDefault()
    setbtnLoder(true)

    try {
     await axios.put(`http://localhost:5000/api/users/${email}`, {name:updateName})
 
         router.push('/setting')
    } catch (error) {
      console.log(error);

      
    }
    
  }


  useEffect(()=>{
    const findUser = async (email) => {
      try {
        const response = await axios.get(`https://itoa-backend.onrender.com/api/users/${email}`);
        setUpdatededName(response.data.name);
        setUdatedImageUrl(response.data.imageUrl);

      } catch (error) {
        if (error.response && error.response.status === 404) {
          console.log('User not found');
        } else {
          console.log('Failed to find user:', error.message);
        }
      }
    };

    return () =>  findUser(email);
  },[] )

  return (
    <>
    <form onSubmit={updateData} >

<div className="flex justify-center items-center m-auto mt-4  ">
 <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8]  to-[#01fefc] p-[2px] w-[90%] lg:w-[40%] rounded">
   <div className="bg-[#2c2c2c]  p-6 rounded-lg shadow-lg ">
     <div className="flex justify-center mb-4">
       <Image
         src={updateImageUrl}
         width={50}
         height={50}
         alt="User"
         className="rounded-full w-32 h-32 object-cover"
         />
         <div>
      {/* Pencil icon that behaves like a file input */}
      <FaPencilAlt
        style={{ cursor: 'pointer', fontSize: '18px' }}
        onClick={handleIconClick}
      />
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </div>
     </div>
     <div className="mb-4">
       <label className="block text-[#d3d3d3] text-sm font-bold mb-2">
         Name
       </label>
       
       <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
   <input value={updateName} required onChange={(e)=>setUpdatededName(e.target.value)} type="text" id="text " name="email" class="w-full bg-[#3a3a3a]   rounded text-base outline-none text-[#d3d3d3] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out  " />
 </div>
     </div>
     {/* <div className="mb-4">
       <label className="block text-[#d3d3d3] text-sm font-bold mb-2">
         Email
       </label>
       <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">

<input required  type="email" id="email" name="email" class="w-full bg-[#3a3a3a]   rounded text-base outline-none text-[#d3d3d3] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
</div>
     </div>
     <div className="mb-4">
       <label className="block text-[#d3d3d3] text-sm font-bold mb-2">
       Password
       </label>
       <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
   <input required type="password" id="password " name="email" class="w-full bg-[#3a3a3a]   rounded text-base outline-none text-[#d3d3d3] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out  " />
 </div>
     </div> */}
   </div>
 </div>
</div>
<div className='m-auto flex justify-center items-center gap-4'>
<Link href='/setting'>
<div className=" mt-3 mb-10 w-max p-[2px] rounded bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc]">

<div className='px-4 py-2 rounded bg-[#3a3a3a]  text-[#d3d3d3]'>cancle 
</div>
</div>
</Link>

<button type='submit' className=" mt-3 mb-10 w-max p-[2px] rounded bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc]">

<div className='px-4 py-2 rounded bg-[#3a3a3a]  text-[#d3d3d3]'>
{btnLoder?<svg aria-hidden="true" class="inline w-6 h-6 text-[#d3d3d3] animate-spin  fill-[#01fefc]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>:"Save"} 
</div>
</button>
</div>
       </form>
      
      
    </>
  )
}

export default EditData
