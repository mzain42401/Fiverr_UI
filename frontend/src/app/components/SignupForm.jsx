"use client"
import React, { useEffect, useState } from 'react'
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"
import { useRouter } from 'next/navigation'
import {app} from '../../../firebase/credentials'
import axios from 'axios';

import Link from 'next/link'
import Loader from './Loder'



const SignupForm = () => {
  const [checkuser,setCheckuser]=useState('searching')
  const [username,setusername]=useState()
  const [useremail,setuseremail]=useState()
  const [userpassword,setuserpassword]=useState()
  const [SignUpWeakPassword,setSignUpWeakPassword]=useState(null)
  const [SignUpUserAlready,setSignUpUserAlready]=useState(null)
  const [btnLoder,setbtnLoder]=useState(false)

  const router = useRouter()
  const myAuth=getAuth(app)
  

  


 const setUser=async()=>{
  const firstLetter = useremail.charAt(0).toUpperCase();
  const profileImage = `
  <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" fill="rgb(229, 157, 216,.2)"/>
    <text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle" font-size="50" fill="white" font-family="Arial">${firstLetter}</text>
  </svg>
`;
const profileImageDataUrl = `data:image/svg+xml;base64,${btoa(profileImage)}`;

  try {
     await axios.post('http://localhost:5000/api/users', {
      name:username,
      email:useremail,
      imageUrl:profileImageDataUrl});
     router.push('/')
    

  } catch (err) {
   
    console.error('Error:', err);
  }
 }






  

  const formsubmited=(e)=>{
e.preventDefault()
setbtnLoder(true)
createUserWithEmailAndPassword(myAuth, useremail,userpassword)
.then((userCredential) => {
  setUser()
  
})
.catch((error) => {
setbtnLoder(false)

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
  });
  return (
    <>
      {checkuser==='searching'?<Loader/>:<div class="lg:w-2/6 md:w-1/2 bg-[#2c2c2c] rounded-lg p-8 flex flex-col  w-full transform -translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 ">
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
      <button type='submit' class="text-black w-full bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] hover:bg-gradient-to-bl hover:from-[#c9f3bf] hover:via-[#e59dd8] hover:to-[#01fefc]  py-2 px-8 focus:outline-none  rounded text-lg">
      {btnLoder?<svg aria-hidden="true" class="inline w-6 h-6 text-[#d3d3d3] animate-spin  fill-[#01fefc]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>:"Sign up"}
      
        </button>
      
   
      <p class="text-xs text-center  mt-3">Have an account? <Link  className='text-[#01fefc]' href='/login'>Login</Link> </p>


</form>
    </div>}
      


    </>
  )
}

export default SignupForm
