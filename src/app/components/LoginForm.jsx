"use client"
import React, { useEffect, useState } from 'react'
import {getAuth,onAuthStateChanged,signInWithEmailAndPassword} from "firebase/auth"
import { useRouter } from 'next/navigation'
import {app} from '../../../firebase/credentials'
import Swal from 'sweetalert2'
import Link from 'next/link'
import Loader from './Loder'
const myAuth=getAuth(app)




const LoginForm = () => {
  const [checkuser,setCheckuser]=useState('notfound')
  const [useremail,setuseremail]=useState()
  const [userpassword,setuserpassword]=useState()
  const [LoginError,setLoginError]=useState(null)
  const router = useRouter()
  const auth = getAuth(app);

  
  

  const formsubmited=(e)=>{
e.preventDefault()

  signInWithEmailAndPassword(myAuth, useremail, userpassword)
  .then((userCredential) => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your are successfully  Logged In",
      showConfirmButton: false,
      timer: 1500
    });
  router.push('/')

    // ...
  })
  .catch((error) => {
    const errorMessage = error.message;
    if (errorMessage==="Firebase: Error (auth/invalid-credential)."){
setLoginError("Invalid email or password")
setTimeout(()=>setLoginError(null), 5000);

    }
  });
  }
  useEffect(() => {
    const checkAuth = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login")
        setCheckuser('found')
      } 
      if (user) {
        
        router.push("/")
      }
      
    });
  
    // Cleanup subscription on unmount
    return () => checkAuth();
  }, []);
  
  return (
    <>
      {checkuser==='notfound'?<Loader/>: <div class="lg:w-2/6  md:w-1/2 bg-[#2c2c2c] rounded-lg p-8 flex flex-col w-[95%] transform -translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2   ">
      <h2 class=" text-2xl text-center uppercase font-medium title-font mb-5">
      Login</h2>
<form onSubmit={(e)=>formsubmited(e)}>
    
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-[#d3d3d3]">Email</label>
        <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">

        <input required onChange={(e)=>setuseremail(e.target.value)} type="email" id="email" name="email" class="w-full bg-[#3a3a3a]   rounded text-base outline-none text-[#d3d3d3] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={useremail}/>
        </div>
        
        
      </div>
      <div class="relative mb-4">
        <label for="password" class="leading-7 text-sm text-[#d3d3d3]">Password</label>
        <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
          <input required onChange={(e)=>setuserpassword(e.target.value)} type="password" id="password " name="email" class="w-full bg-[#3a3a3a]   rounded text-base outline-none text-[#d3d3d3] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out  " value={userpassword}/>
        </div>
        
        
        {LoginError!==null?<p className='text-[12px] text-red-500 pl-[3px]'>{LoginError}</p>:null}


      </div>
      <button type='submit' class="w-full bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] hover:bg-gradient-to-bl hover:from-[#c9f3bf] hover:via-[#e59dd8] hover:to-[#01fefc]  py-2 px-8  rounded text-lg  text-black">Login</button>
      
      <p class="text-xs text-center text-[#d3d3d3] mt-3">Have an account? <Link  className='text-[#01fefc]' href='/signup'>Signup</Link> </p>
</form>
    </div>}
     


    </>
  )
}

export default LoginForm
