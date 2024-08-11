// components/ContactForm.js
import React from 'react';
import Dashboard from '../components/Dashboard';

const ContactForm = () => {
  return (
    <Dashboard>
<div className="max-w-2xl mx-auto mb-10 p-4">
      <h2 className="text-2xl font-semibold mb-4">Please fill out the form below to submit your problem:</h2>
      <form className="space-y-4">
         
    
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#d3d3d3] pb-2">Name:</label>
          <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
 <input type="text" id="name" className="bg-[#2c2c2c]   shadow-custom-dark w-full      p-2 text-base rounded outline-none" />
        
</div>
         </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#d3d3d3] pb-2">Email:</label>
          <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
 <input type="email" id="email" className="bg-[#2c2c2c]   shadow-custom-dark w-full      p-2 text-base rounded outline-none" />
        
</div>
         </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-[#d3d3d3] pb-2">Problem Category:</label>
          <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
<select id="category"className="bg-[#2c2c2c]   shadow-custom-dark w-full      p-2 text-base rounded outline-none text-gray-500">
            <option>Select a category</option>
            <option>Category 1</option>
            <option>Category 2</option>
            <option>Category 3</option>
          </select>
</div>
          
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-[#d3d3d3] pb-2">Description:</label>
          <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
            <div className='bg-[#2c2c2c] '>
          <textarea id="description" rows="4"className="   w-full bg-transparent      p-2 text-base rounded outline-none"></textarea>     
            </div>
         

          </div>
        </div>
        <div>
          <label htmlFor="file" className="block text-sm font-medium text-[#d3d3d3] pb-2">Attach File:</label>
          <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
            <input type="file" id="file" className=" block w-full text-sm bg-[#2c2c2c] text-gray-500     rounded-md shadow-sm " /> 
          </div>

         
        </div>
        <div className=' flex justify-center items-center'>
        <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">

          <button type="submit" className='   px-4 py-2 rounded bg-[#2c2c2c]  text-[#d3d3d3]'>Submit</button>
          </div>
        </div>
      </form>
    </div>
    </Dashboard>
    
  );
};

export default ContactForm;
