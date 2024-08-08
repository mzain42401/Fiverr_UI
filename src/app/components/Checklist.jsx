"use client"
import {  Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import Link from 'next/link'
import { useState } from 'react'

export default function Checklist() {
  let [isOpen, setIsOpen] = useState(false)
  let [isOpen2, setIsOpen2] = useState(false)


  function open() {
    setIsOpen(!isOpen)
  }

  function close() {
    setIsOpen(false)
  }
  function open2() {
    setIsOpen(!isOpen)

    setIsOpen2(!isOpen2)

  }

  function close2() {
    setIsOpen2(!open2)
  }

  return (
    <>
    <div onClick={open} className='px-4 mb-10 w-full  flex justify-end items-center' >
        <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">

      <button className='px-4 py-2  border-[#3a3a3a] border-solid border-2 rounded bg-[#2c2c2c]  text-[#d3d3d3]' >Upload</button>
</div>
      </div>
     

      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium text-white">
              Please check over your content before publishing:
              </DialogTitle>
              <div className=" p-6 rounded-lg ">
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
      <div className='flex justify-between items-center'>
        <Link href='/schedule'>
        <div className="mt-4">
              <div className='px-4  w-max' >
        <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">

      <button className='px-4 py-2  border-[#3a3a3a] border-solid border-2 rounded bg-[#2c2c2c]  text-[#d3d3d3]' >Scheduled</button>
</div>
      </div>
              </div>
        </Link>
              <div className="mt-4">
              <div className='px-4  w-max' >
        <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">

      <button onClick={open2} className='px-4 py-2  border-[#3a3a3a] border-solid border-2 rounded bg-[#2c2c2c]  text-[#d3d3d3]' >Publish  Now</button>
</div>
      </div>
              </div>
      </div>
              
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      <Dialog open={isOpen2} as="div" className="relative z-10 focus:outline-none" onClose={close2}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-[#3a3a3a] p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium text-white">
              Please check over your content before publishing:
              </DialogTitle>
              <div className=" p-6 rounded-lg ">

            
        <div className="space-y-2">
        <label className="flex items-center justify-between">
            <span className="mr-2 text-xl">Facebook</span>
            <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">

<input required placeholder='Account URL' type="text" id="email" name="email" class="w-full bg-[#3a3a3a]   rounded text-base outline-none text-[#d3d3d3]  px-3 leading-8 transition-colors duration-200 ease-in-out" />
</div>
           
          </label>
          
          <label className="flex items-center justify-between">
            <span className="mr-2 text-xl">LinkedIn</span>
            <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">

<input required placeholder='Account URL'  type="text" id="email" name="email" class="w-full bg-[#3a3a3a]   rounded text-base outline-none text-[#d3d3d3]   px-3 leading-8 transition-colors duration-200 ease-in-out" />
</div>
           
          </label>
          
          <label className="flex items-center justify-between  ">
            <span className="mr-2 text-xl">Instagram</span>
            <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">

<input required placeholder='Account URL' type="text" id="email" name="email" class="w-full bg-[#3a3a3a]   rounded text-base outline-none text-[#d3d3d3]  px-3 leading-8 transition-colors duration-200 ease-in-out" />
</div>
           
          </label>
          
          <label className="flex items-center justify-between">
            <span className="mr-2 text-xl">X</span>
            <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">

<input required placeholder='Account URL' type="text" id="email" name="email" class="w-full bg-[#3a3a3a]   rounded text-base outline-none text-[#d3d3d3]  px-3 leading-8 transition-colors duration-200 ease-in-out" />
</div>
           
          </label>
          
        </div>
        
      </div>
      <div className='flex justify-between items-center'>
        <Link href='/schedule'>
        <div className="mt-4">
              <div className='px-4  w-max' >
        <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">

      <button className='px-4 py-2  border-[#3a3a3a] border-solid border-2 rounded bg-[#2c2c2c]  text-[#d3d3d3]' >Scheduled</button>
</div>
      </div>
              </div>
        </Link>
              <div className="mt-4 " onClick={()=>alert("published")}>
              <div className='px-4  w-max' >
        <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">

      <button className='px-4 py-2  border-[#3a3a3a] border-solid border-2 rounded bg-[#2c2c2c]  text-[#d3d3d3]' >Publish  Now</button>
</div>
      </div>
              </div>
      </div>
              
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    
    </>
  )
}

