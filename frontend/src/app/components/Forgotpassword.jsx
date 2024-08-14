"use client";
import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";
import { useRouter } from 'next/navigation';
import { app } from '../../../firebase/credentials';
import Swal from 'sweetalert2';
import Link from 'next/link';
import Loader from './Loder';

const ForgotPassword = () => {
  const [checkUser, setCheckUser] = useState('searching');
  const [userEmail, setUserEmail] = useState('');
  const [btnLoder,setbtnLoder]=useState(false)

  const router = useRouter();
  const auth = getAuth(app);

  const formSubmitted = async (e) => {
    e.preventDefault();
    setbtnLoder(true)
    if (!userEmail) {
    setbtnLoder(false)
      
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Please enter your email!",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }

    try {
      await sendPasswordResetEmail(auth, userEmail);
      router.push('/login');
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Check your email and reset the password!",
        showConfirmButton: false,
        timer: 3500
      });
    } catch (error) {
    setbtnLoder(false)

      console.log('Error sending password reset email:', error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed to send password reset email.",
        showConfirmButton: false,
        timer: 3500
      });
    }
  };

  useEffect(() => {
    const checkAuth = onAuthStateChanged(auth, (user) => {
      if (!user) {
        setCheckUser('found');
      }
      if (user) {
        router.push("/");
        
      } 
    });

    return () => checkAuth(); // Clean up subscription on unmount
  }); // Include auth and router in the dependency array

  return (
    <>
      {checkUser === 'searching' ? (
        <Loader />
      ) : (
        <div className="lg:w-2/6 md:w-1/2 bg-[#2c2c2c] rounded-lg p-8 flex flex-col w-[95%] transform -translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2">
          <h2 className="text-2xl text-center uppercase font-medium title-font mb-5">
            Forgot Password
          </h2>
          <form onSubmit={formSubmitted}>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-[#d3d3d3]">Email</label>
              <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
                <input
                  required
                  onChange={(e) => setUserEmail(e.target.value)}
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-[#3a3a3a] rounded text-base outline-none text-[#d3d3d3] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={userEmail}
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] hover:bg-gradient-to-bl hover:from-[#c9f3bf] hover:via-[#e59dd8] hover:to-[#01fefc] py-2 px-8 rounded text-lg text-black"
            >
              {btnLoder?<svg aria-hidden="true" class="inline w-6 h-6 text-[#d3d3d3] animate-spin  fill-[#01fefc]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>:"Forgot"}
      
              
            </button>
            <p className="text-xs text-center text-[#d3d3d3] mt-3">
              Have an account? <Link className='text-[#01fefc]' href='/login'>login</Link>
            </p>
          </form>
        </div>
      )}
    </>
  );
};

export default ForgotPassword;
