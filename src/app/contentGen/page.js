import React from 'react'
import Dashboard from '../components/Dashboard'

const page = () => {
  const content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ex maxime odit ipsum, quod, sed obcaecati distinctio, aperiam doloremque quia doloribus voluptatibus ducimus. Vero est nam vitae quam, suscipit provident?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ex maxime odit ipsum, quod, sed obcaecati distinctio, aperiam doloremque quia doloribus voluptatibus ducimus. Vero est nam vitae quam, suscipit provident?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ex maxime odit ipsum, quod, sed obcaecati distinctio, aperiam doloremque quia doloribus voluptatibus ducimus. Vero est nam vitae quam, suscipit provident?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ex maxime odit ipsum, quod, sed obcaecati distinctio, aperiam doloremque quia doloribus voluptatibus ducimus. Vero est nam vitae quam, suscipit provident?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ex maxime odit ipsum, quod, sed obcaecati distinctio, aperiam doloremque quia doloribus voluptatibus ducimus. Vero est nam vitae quam, suscipit provident?"
  return (
    <>
    <Dashboard>
    <h1 className="font-bold text-[30px] pl-4 pt-4">Content Generation</h1>

    <div className=" p-4 space-y-4">

      <div >
      <div className=' w-full' >
      <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">

      <input type="text"  placeholder='Enter your prompt here ...' className="bg-[#2c2c2c]  border-2 shadow-custom-dark w-full   border-none  p-2 text-base rounded outline-none"  name="" id="" />
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

      {content?<div className='flex justify-center  gap-2 flex-wrap  '>
      <div className=' md:w-[450px] w-[350px]  ' >
      <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
<p className='  shadow-custom-dark bg-[#2c2c2c]  text-[#d3d3d3] p-4 rounded'>
          {content}
        </p>
</div>
        
      </div>
      <div className=' ' >
      <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
      <img
                src='https://via.placeholder.com/150'
                alt="User"
                className=" w-72 h-72 object-cover"
              />
</div>
        
       
      </div>
      </div>:null}

    </div>


    </Dashboard>
    </>
  )
}

export default page
