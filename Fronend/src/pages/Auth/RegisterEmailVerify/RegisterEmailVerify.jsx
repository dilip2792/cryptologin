import React from 'react'
import { MdEmail } from "react-icons/md";

const RegisterEmailVerify = () => {
  return (
    <div className='flex  justify-center h-screen items-center  '>
       <div className="flex  justify-center flex-col gap-6 items-center bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <MdEmail className='text-5xl ' />

        <p className='text-2xl font-bold'>Email Verification</p>
        <p className='text-center'>We have sent you an email verification to 
               <span className='font-semibold'> jenny.wilson@gmail.com</span> . If you didn’t
                   receive it, click the button below.
        </p>
        <button className='py-2 bg-slate-300 text-black rounded-md w-full' >Re-send Email</button>
        </div>

    </div>
  )
}

export default RegisterEmailVerify