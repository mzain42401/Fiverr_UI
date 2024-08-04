"use client"
import { useState, useEffect, useRef } from 'react';
import Dashboard from './Dashboard';

const EditText = () => {
  const textareaRef = useRef(null);
  const [val, setVal] = useState("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ex maxime odit ipsum, quod, sed obcaecati distinctio, aperiam doloremque quia doloribus voluptatibus ducimus. Vero est nam vitae quam, suscipit provident?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ex maxime odit ipsum, quod, sed obcaecati distinctio, aperiam doloremque quia doloribus voluptatibus ducimus. Vero est nam vitae quam, suscipit provident?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ex maxime odit ipsum, quod, sed obcaecati distinctio, aperiam doloremque quia doloribus voluptatibus ducimus. Vero est nam vitae quam, suscipit provident?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ex maxime odit ipsum, quod, sed obcaecati distinctio, aperiam doloremque quia doloribus voluptatibus ducimus. Vero est nam vitae quam, suscipit provident?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ex maxime odit ipsum, quod, sed obcaecati distinctio, aperiam doloremque quia doloribus voluptatibus ducimus. Vero est nam vitae quam, suscipit provident?");

  

  const handle = (e) => {
    setVal(e.target.value)
  };
  const uploadData=()=>{
console.log(val)
  }
  useEffect(()=>{
textareaRef.current.style.height="auto"
textareaRef.current.style.height=textareaRef.current.scrollHeight + "px"

  },[val])

  return (
<Dashboard>

<div className="bg-gradient-to-tr  from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px] pb- m-4">
<div className="bg-[#2c2c2c]  ">
      <textarea
        
        className="w-full p-2 bg-transparent   outline-none rounded resize-none overflow-hidden"
        onChange={handle}
        value={val}
        placeholder="Type something..."
        rows="1"
        ref={textareaRef}
      ></textarea>
    </div>
           </div>


        <div className='px-4 mb-10 w-full  flex justify-end items-center' >
        <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">

      <button className='px-4 py-2  border-[#3a3a3a] border-solid border-2 rounded bg-[#2c2c2c]  text-[#d3d3d3]' onClick={uploadData}>Upload</button>
</div>
      </div>
      </Dashboard>

    
  );
};

export default EditText;
