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
<div className="container mx-auto p-4">
      <textarea
        
        className="w-full p-2 bg-[#2c2c2c]  border-[#3a3a3a] border-solid border-2 outline-none rounded resize-none overflow-hidden"
        onChange={handle}
        value={val}
        placeholder="Type something..."
        rows="1"
        ref={textareaRef}
      ></textarea>
    </div>

        <div className='px-4 w-full  flex justify-end items-center' >
      <button className='px-4 py-2  border-[#3a3a3a] border-solid border-2 rounded bg-[#2c2c2c]  text-[#d3d3d3]' onClick={uploadData}>Upload</button>
      </div>
      </Dashboard>

    
  );
};

export default EditText;
