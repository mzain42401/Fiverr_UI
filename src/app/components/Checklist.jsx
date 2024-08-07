import React from 'react';

const Checklist = () => {
  return (
    <div className='my-4'>
        
        <div className="flex items-center justify-end bg-[#1e1e1e]">
      <div className="bg-[#2c2c2c] p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Please check over your content before publishing:</h2>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-custom-pink" />
            <span className="ml-2">Brand Voice</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-custom-pink" />
            <span className="ml-2">Sentence Structure</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-custom-pink" />
            <span className="ml-2">Spelling (Americanised vs British)</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-custom-pink" />
            <span className="ml-2">Punctuation</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-custom-pink" />
            <span className="ml-2">Keywords</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-custom-pink" />
            <span className="ml-2">CTA</span>
          </label>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Checklist;
