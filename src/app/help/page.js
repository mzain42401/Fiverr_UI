// components/ContactForm.js
import React from 'react';
import Dashboard from '../components/Dashboard';

const ContactForm = () => {
  return (
    <Dashboard>
<div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Please fill out the form below to submit your problem:</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#d3d3d3] pb-2">Name:</label>
          <input type="text" id="name" className="bg-[#2c2c2c]  border-2 shadow-custom-dark w-full    border-[#3a3a3a] border-solid p-2 text-base rounded outline-none" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#d3d3d3] pb-2">Email:</label>
          <input type="email" id="email" className="bg-[#2c2c2c]  border-2 shadow-custom-dark w-full    border-[#3a3a3a] border-solid p-2 text-base rounded outline-none" />
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-[#d3d3d3] pb-2">Problem Category:</label>
          <select id="category"className="bg-[#2c2c2c]  border-2 shadow-custom-dark w-full    border-[#3a3a3a] border-solid p-2 text-base rounded outline-none text-gray-500">
            <option>Select a category</option>
            <option>Category 1</option>
            <option>Category 2</option>
            <option>Category 3</option>
          </select>
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-[#d3d3d3] pb-2">Description:</label>
          <textarea id="description" rows="4"className="bg-[#2c2c2c]  border-2 shadow-custom-dark w-full    border-[#3a3a3a] border-solid p-2 text-base rounded outline-none"></textarea>
        </div>
        <div>
          <label htmlFor="file" className="block text-sm font-medium text-[#d3d3d3] pb-2">Attach File:</label>
          <input type="file" id="file" className="mt-1 block w-full text-sm text-gray-500  border-[#3a3a3a] border-solid border-2 rounded-md shadow-sm " />
        </div>
        <div className=' flex justify-center items-center'>
          <button type="submit" className='border-[#3a3a3a] border-solid border-2 px-4 py-2 rounded bg-[#2c2c2c]  text-[#d3d3d3]'>Submit</button>
        </div>
      </form>
    </div>
    </Dashboard>
    
  );
};

export default ContactForm;
