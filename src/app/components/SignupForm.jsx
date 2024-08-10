"use client"
import React, { useEffect, useState } from 'react'
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"
import { useRouter } from 'next/navigation'
import {app} from '../../../firebase/credentials'
import Swal from 'sweetalert2'

import Link from 'next/link'
import Loader from './Loder'



const SignupForm = () => {
  const [checkuser,setCheckuser]=useState('notfound')
  const [username,setusername]=useState()
  const [useremail,setuseremail]=useState()
  const [userpassword,setuserpassword]=useState()
  const [SignUpWeakPassword,setSignUpWeakPassword]=useState(null)
  const [SignUpUserAlready,setSignUpUserAlready]=useState(null)
  const router = useRouter()
  const myAuth=getAuth(app)
  

  
  

  const formsubmited=(e)=>{
e.preventDefault()
createUserWithEmailAndPassword(myAuth, useremail,userpassword)
.then((userCredential) => {

  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your are successfully  Signed Up",
    showConfirmButton: false,
    timer: 1500
  });
  router.push('/')
})
.catch((error) => {
  const errorMessage = error.message;
  
  if (errorMessage==="Firebase: Password should be at least 6 characters (auth/weak-password).") {
    setSignUpWeakPassword("Password should be at least 6 characters")
    setTimeout(()=>setSignUpWeakPassword(null), 5000);
    
    
  }else if (errorMessage==="Firebase: Error (auth/email-already-in-use)."){
    setSignUpUserAlready("Email already in use.")
    setTimeout(()=>setSignUpUserAlready(null), 5000);

  }
});
  }
  useEffect(() => {
    const checkAuth = onAuthStateChanged(myAuth, (user) => {
       
      if (user) {
        
        router.push("/")
      }
      if (!user) {
        setCheckuser('foounded')
      }
      
    });
  
    // Cleanup subscription on unmount
    return () => checkAuth();
  }, []);
  return (
    <>
      {checkuser==='notfound'?<Loader/>:<div class="lg:w-2/6 md:w-1/2 bg-[#2c2c2c] rounded-lg p-8 flex flex-col  w-full transform -translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 ">
      <h2 class=" text-2xl text-center uppercase  title-font mb-5">Sign Up</h2>
<form onSubmit={(e)=>formsubmited(e)}>
      <div class="relative mb-4">
        <label for="full-name" class="leading-7 text-sm ">Full Name</label>
        <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
  <input onChange={(e)=>setusername(e.target.value)} required type="text" id="full-name" name="full-name" class="w-full bg-[#3a3a3a]  rounded    text-base outline-none text-[#d3d3d3] py-1 px-3 leading-8  duration-200 ease-in-out" value={username}/>
      
           </div>
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm ">Email</label>
        <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
 <input required onChange={(e)=>setuseremail(e.target.value)} type="email" id="email" name="email" class="w-full bg-[#3a3a3a] text-[#d3d3d3] rounded    text-base outline-none  py-1 px-3 leading-8  duration-200 ease-in-out" value={useremail}/>
        
           </div>
       {SignUpUserAlready!==null?<p className='text-[12px] text-red-500 pl-[3px]'>{SignUpUserAlready}</p>:null}
        
      </div>
      <div class="relative mb-4">
        <label for="password" class="leading-7 text-sm ">Password</label>
        <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
          <input required onChange={(e)=>setuserpassword(e.target.value)} type="password" id="password " name="email" class="w-full bg-[#3a3a3a]  rounded    text-base outline-none text-[#d3d3d3] py-1 px-3 leading-8  duration-200 ease-in-out  " value={userpassword}/>
            
        </div>
       {SignUpWeakPassword!==null?<p className='text-[12px] text-red-500 pl-[3px]'>{SignUpWeakPassword}</p>:null}

      </div>
      <button type='submit' class="text-black w-full bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] hover:bg-gradient-to-bl hover:from-[#c9f3bf] hover:via-[#e59dd8] hover:to-[#01fefc]  py-2 px-8 focus:outline-none  rounded text-lg">Sign up</button>
      
   
      <p class="text-xs text-center  mt-3">Have an account? <Link  className='text-[#01fefc]' href='/login'>Login</Link> </p>


</form>
    </div>}
      


    </>
  )
}

export default SignupForm
