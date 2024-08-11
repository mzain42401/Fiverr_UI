"use client"
import React, { useEffect, useState } from 'react'
import {getAuth,onAuthStateChanged, sendPasswordResetEmail} from "firebase/auth"
import { useRouter } from 'next/navigation'
import {app} from '../../../firebase/credentials'
import Swal from 'sweetalert2'
import Link from 'next/link'
import Loader from './Loder'

const Forgotpassword = () => {
  
  const [checkuser,setCheckuser]=useState('searching')
  const [useremail,setuseremail]=useState()
  const router = useRouter()
  const auth = getAuth(app);

  
const formsubmited= async (e)=>{
e.preventDefault()

    try {
        await sendPasswordResetEmail(auth, useremail);
        Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Check your email and reset the password!",
      showConfirmButton: false,
      timer: 3500
    });
    router.push('/login')
      } catch (error) {
        console.log('Error sending password reset email:', error);
      }


  }
  useEffect(() => {
    const checkAuth = onAuthStateChanged(auth, (user) => {
      if (!user) {
        setCheckuser('found')
      } 
      if (user) {
        
        router.push("/")
      }
      
    });
  
    return () => checkAuth();
  }, []);
  
  return (
    <>
      {checkuser==='searching'?<Loader/>:<div class="lg:w-2/6  md:w-1/2 bg-[#2c2c2c] rounded-lg p-8 flex flex-col w-[95%] transform -translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2   ">
      <h2 class=" text-2xl text-center uppercase font-medium title-font mb-5">
      Forgot Password</h2>
<form onSubmit={(e)=>formsubmited(e)}>
    
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-[#d3d3d3]">Email</label>
        <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">

        <input required onChange={(e)=>setuseremail(e.target.value)} type="email" id="email" name="email" class="w-full bg-[#3a3a3a]   rounded text-base outline-none text-[#d3d3d3] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={useremail}/>
        </div>
        
        
      </div>
      
      <button type='submit' class="w-full bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] hover:bg-gradient-to-bl hover:from-[#c9f3bf] hover:via-[#e59dd8] hover:to-[#01fefc]  py-2 px-8  rounded text-lg  text-black">Forgot</button>
      
      <p class="text-xs text-center text-[#d3d3d3] mt-3">Have an account? <Link  className='text-[#01fefc]' href='/login'>login</Link> </p>
</form>
    </div> }
      


    </>
  )
}

export default Forgotpassword
