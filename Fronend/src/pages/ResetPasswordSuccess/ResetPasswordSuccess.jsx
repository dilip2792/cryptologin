import React from 'react'
import { Link } from 'react-router-dom'
import { RiCheckboxCircleFill } from "react-icons/ri";

const ResetPasswordSuccess = () => {
  return (
     <div className='flex  justify-center h-screen items-center  '>
        <div className="flex  justify-center flex-col gap-6 items-center bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
         <RiCheckboxCircleFill className='text-5xl text-green-500 ' />
    
         <p className='text-2xl font-bold'>Password Reset Done</p>
         <p className='text-center'>Now you can aceess your account</p>
       <div className="w-full">
       <Link to="/Signin">
         <button className='py-2 bg-purple-700 text-white rounded-md w-full' >Sign In
        </button>
         </Link>
       </div>
         </div>
    
     </div>
  )
}

export default ResetPasswordSuccess