import React from 'react'
import { RiCheckboxCircleFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
const RegisterSuccess = () => {
  return (
    <div className='flex  justify-center h-screen items-center  '>
          <div className="flex  justify-center flex-col gap-6 items-center bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
           <RiCheckboxCircleFill className='text-5xl text-green-500 ' />
   
           <p className='text-2xl font-bold'>Successfully Registration</p>
           <p className='text-center'>We have sent you an email verification to 
                  <span className='font-semibold'> jenny.wilson@gmail.com</span> . If you didn’t
                      receive it, click the button below.
           </p>
         <div className="w-full">
         <Link to="/Signin">
           <button className='py-2 bg-slate-300 text-black rounded-md w-full' >Enter The App
          </button>
           </Link>
         </div>
           </div>
   
       </div>
  )
}

export default RegisterSuccess