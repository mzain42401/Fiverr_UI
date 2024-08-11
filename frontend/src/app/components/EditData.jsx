"use client"
import Link from 'next/link';
import React, { useState } from 'react'

const EditData = () => {
    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: '********',
        image: 'https://via.placeholder.com/150',
      });
  return (
    <>
      
       <div className="flex justify-center items-center m-auto mt-4  ">
        <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8]  to-[#01fefc] p-[2px] w-[90%] lg:w-[40%] rounded">
          <div className="bg-[#2c2c2c]  p-6 rounded-lg shadow-lg ">
            <div className="flex justify-center mb-4">
              <img
                src={user.image}
                alt="User"
                className="rounded-full w-32 h-32 object-cover"
              />
            </div>
            <div className="mb-4">
              <label className="block text-[#d3d3d3] text-sm font-bold mb-2">
                Name
              </label>
              
              <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
          <input required  type="text" id="text " name="email" class="w-full bg-[#3a3a3a]   rounded text-base outline-none text-[#d3d3d3] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out  " />
        </div>
            </div>
            <div className="mb-4">
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
            </div>
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
    <Link href='/setting'>
      <div className=" mt-3 mb-10 w-max p-[2px] rounded bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc]">

<div className='px-4 py-2 rounded bg-[#3a3a3a]  text-[#d3d3d3]'>Save 
    </div>
</div>
    </Link>
      </div>
      
    </>
  )
}

export default EditData
