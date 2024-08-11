"use client"
import { useState, useEffect, useRef } from 'react';
import Dashboard from './Dashboard';
import Checklist from './Checklist';

const EditText = () => {
  const [roll,setRoll]=useState('free')
  const [checklist,setChecklist]=useState(false)

  // const textareaRef = useRef(null);
  // const [val, setVal] = useState("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ex maxime odit ipsum, quod, sed obcaecati distinctio, aperiam doloremque quia doloribus voluptatibus ducimus. Vero est nam vitae quam, suscipit provident?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ex maxime odit ipsum, quod, sed obcaecati distinctio, aperiam doloremque quia doloribus voluptatibus ducimus. Vero est nam vitae quam, suscipit provident?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ex maxime odit ipsum, quod, sed obcaecati distinctio, aperiam doloremque quia doloribus voluptatibus ducimus. Vero est nam vitae quam, suscipit provident?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ex maxime odit ipsum, quod, sed obcaecati distinctio, aperiam doloremque quia doloribus voluptatibus ducimus. Vero est nam vitae quam, suscipit provident?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ex maxime odit ipsum, quod, sed obcaecati distinctio, aperiam doloremque quia doloribus voluptatibus ducimus. Vero est nam vitae quam, suscipit provident?");

  

//   const handle = (e) => {
//     setVal(e.target.value)
//   };
//   const uploadData=()=>{
// console.log(val)
//   }
//   useEffect(()=>{
// textareaRef.current.style.height="auto"
// textareaRef.current.style.height=textareaRef.current.scrollHeight + "px"

//   },[val])

  return (
<Dashboard>
<div className='p-4'>
<h1 className="font-bold text-[30px] pl-4 pt-4">Editing</h1>

<div className='flex justify-center items-center gap-6 '>
      <div className={`hover:cursor-pointer hover:text-[#c9f3bf] ${roll==='free'?"border-t":null}`} onClick={()=>setRoll('free')}>Free</div>
      <div className={`hover:cursor-pointer hover:text-[#c9f3bf] ${roll==='advance'?"border-t":null}`} onClick={()=>setRoll('advance')}>Advance</div>
      <div className={`hover:cursor-pointer hover:text-[#c9f3bf] ${roll==='pro'?"border-t":null}`} onClick={()=>setRoll('pro')}>Pro</div>
      <div className={`hover:cursor-pointer hover:text-[#c9f3bf] ${roll==='enterprise'?"border-t":null}`} onClick={()=>setRoll('enterprise')}>Enterprise</div>
    </div>

    <div className=" p-4 space-y-4">

      <div >
      <div className=' w-full' >
        <div className='flex justify-between items-center'>

      <div className="w-[90%] bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">

      <input type="text"  placeholder='Enter your topic here' className="bg-[#2c2c2c]   border-2 shadow-custom-dark w-full   border-none  p-2 text-base rounded outline-none"  name="" id="" />
</div>
<div className="  flex justify-between bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">

      <button className='px-4 py-2 rounded bg-[#3a3a3a]  text-[#d3d3d3]'>Submit</button>
</div>
        </div>
      </div>
      </div>
     
{roll==='free'?<div className='flex justify-center  gap-2 flex-wrap  '>
      <div className=' md:w-[450px] w-[320px]  ' >
      <div className=" bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
        <div className='bg-[#2c2c2c] '>
<textarea className='  h-[295px] w-full bg-transparent resize-none outline-none  overflow-y-auto shadow-custom-dark  text-[#d3d3d3] p-4 rounded'>
Chat GPT Generates Copy for Social Media
        </textarea>

        </div>
</div>
        
      </div>
      <div className='md:w-[450px] w-[320px]' >
      <div className="  bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
      <div className='h-[300px] shadow-custom-dark bg-[#2c2c2c]  text-[#d3d3d3] p-4 rounded'>
      Canva Generates Design 
        </div>
      
</div>
        
       
      </div>
      </div>:null
}

{roll==='advance'?
<div className='flex justify-center   gap-2 flex-wrap  '>
      
      <div className=' md:w-[450px] w-[320px] flex justify-center items-center flex-col gap-2' >
      <div className=' md:w-[450px] w-[320px]' >
      <div className=" bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
        <div className='bg-[#2c2c2c] '>
<textarea className='  h-[295px] w-full bg-transparent resize-none outline-none  overflow-y-auto shadow-custom-dark  text-[#d3d3d3] p-4 rounded'>
Chat GPT Generates Copy for Social Media
        </textarea>

        </div>
</div>
        
      </div>
      <div className=' md:w-[450px] w-[320px]' >
      <div className=" bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
        <div className='bg-[#2c2c2c] '>
<textarea className='  h-[295px] w-full bg-transparent resize-none outline-none  overflow-y-auto shadow-custom-dark  text-[#d3d3d3] p-4 rounded'>
Chat GPT Generates Copy for  Email Campaign
        </textarea>

        </div>
</div>
        
      </div>
     

      </div>
      <div className='md:w-[450px] w-[320px] ' >
      <div className="  bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
      <div className='h-[300px] shadow-custom-dark bg-[#2c2c2c]  text-[#d3d3d3] p-4 rounded'>
      Canva Generates 2x Design 
        </div>
      
</div>
        
       
      </div>
      </div>:null
}
      
{roll==='pro'?
<div className='flex justify-center   gap-2 flex-wrap  '>
      
      <div className=' md:w-[450px] w-[320px] flex justify-center items-center flex-col gap-2' >
      <div className=' md:w-[450px] w-[320px]' >
      <div className=" bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
        <div className='bg-[#2c2c2c] '>
<textarea className='  h-[295px] w-full bg-transparent resize-none outline-none  overflow-y-auto shadow-custom-dark  text-[#d3d3d3] p-4 rounded'>
Chat GPT Generates Copy for Social Media
        </textarea>

        </div>
</div>
        
      </div>
      <div className=' md:w-[450px] w-[320px]' >
      <div className=" bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
        <div className='bg-[#2c2c2c] '>
<textarea className='  h-[295px] w-full bg-transparent resize-none outline-none  overflow-y-auto shadow-custom-dark  text-[#d3d3d3] p-4 rounded'>
Chat GPT Generates Copy for  Email Campaign      
        </textarea>

        </div>
</div>
        
      </div>
      <div className=' md:w-[450px] w-[320px]' >
      <div className=" bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
        <div className='bg-[#2c2c2c] '>
<textarea className='  h-[295px] w-full bg-transparent resize-none outline-none  overflow-y-auto shadow-custom-dark  text-[#d3d3d3] p-4 rounded'>
Chat GPT Generates Copy for  Blog   
        </textarea>

        </div>
</div>
        
      </div>
     

      </div>
      <div className='md:w-[450px] w-[320px] ' >
      <div className="  bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
      <div className='h-[300px] shadow-custom-dark bg-[#2c2c2c]  text-[#d3d3d3] p-4 rounded'>
      Canva Generates 2x Design 
        </div>
      
</div>
        
       
      </div>
      </div>:null
}


{roll==='enterprise'?
<div className='flex justify-center   gap-2 flex-wrap  '>
      
      <div className=' md:w-[450px] w-[320px] flex justify-center items-center flex-col gap-2' >
      <div className=' md:w-[450px] w-[320px]' >
      <div className=" bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
        <div className='bg-[#2c2c2c] '>
<textarea className='  h-[295px] w-full bg-transparent resize-none outline-none  overflow-y-auto shadow-custom-dark  text-[#d3d3d3] p-4 rounded'>
Chat GPT Generates Copy for Social Media
        </textarea>

        </div>
</div>
        
      </div>
      <div className=' md:w-[450px] w-[320px]' >
      <div className=" bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
        <div className='bg-[#2c2c2c] '>
<textarea className='  h-[295px] w-full bg-transparent resize-none outline-none  overflow-y-auto shadow-custom-dark  text-[#d3d3d3] p-4 rounded'>
Chat GPT Generates Copy for  Email Campaign
        </textarea>

        </div>
</div>
        
      </div>
      <div className=' md:w-[450px] w-[320px]' >
      <div className=" bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
        <div className='bg-[#2c2c2c] '>
<textarea className='  h-[295px] w-full bg-transparent resize-none outline-none  overflow-y-auto shadow-custom-dark  text-[#d3d3d3] p-4 rounded'>
Chat GPT Generates Copy for Social Media
        </textarea>

        </div>
</div>
      </div>
     

      </div>
      <div className='md:w-[450px] w-[320px] ' >
      <div className="  bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
      <div className='h-[300px] shadow-custom-dark bg-[#2c2c2c]  text-[#d3d3d3] p-4 rounded'>
      Canva Generates Design 
        </div>
      
</div>
        
       
      </div>
      </div>:null
}

    </div>

        <Checklist/>

        
</div>
      </Dashboard>

    
  );
};

export default EditText;
