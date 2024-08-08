import React from 'react'
import Dashboard from '../components/Dashboard'

const page = () => {
  
  return (
    <>
    <Dashboard>
    <h1 className="font-bold text-[30px] pl-4 pt-4">Idea Generation</h1>

    <div className=" p-4 space-y-4">

      <div >
      <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
<div className=' w-full' >
      <input type="text"  placeholder='Enter your business, brand voice, goals, target audience and mission here ...' className="bg-[#2c2c2c]  border-2 shadow-custom-dark w-full  border-none   p-2 text-base rounded outline-none"  name="" id="" />
      </div>
</div>
      
      </div>

      <div > 
      <div className=' w-full  flex justify-center items-center' >
      <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">

      <button className='px-4 py-2 rounded bg-[#3a3a3a]  text-[#d3d3d3]'>Submit</button>
</div>
      </div>
      </div>

      <div>
      <div className=' w-full  ' >
      <div className=" bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
<p className='  h-[300px] overflow-y-auto shadow-custom-dark bg-[#2c2c2c]  text-[#d3d3d3] p-4 rounded'>
Take data from above box to generate topics for content calendar...... 
        </p>
</div>
        
      </div>
      </div>

    </div>


    </Dashboard>
    </>
  )
}

export default page
