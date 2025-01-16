import React from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../../context/AuthProvider';
import { FaArrowLeft } from "react-icons/fa";
import { toast } from "react-toastify";

// Import toastify css file
import "react-toastify/dist/ReactToastify.css"; 
const ForgotPassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm(); 

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:4001/request-reset-password", data);
      toast.success("Password reset link sent to your email.");
    } catch (error) {
      toast.error(error.response?.data?.error || "Something went wrong.");
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
             <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
             <Link to="/signin">
             <FaArrowLeft />
             </Link>
               <h2 className="text-2xl font-bold  mb-6 text-gray-800">
                Forgot Password
               </h2>
               <p>
               Enter your email address for which account you want to reset your password.
               </p>
               <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                 {/* Email */}
                 <div>
                   <label
                     htmlFor="email"
                     className="block text-sm font-medium text-gray-600"
                   >
                     Email
                   </label>
                   <input
                     type="email"
                     id="email"
                     {...register("email", { required: "Email is required" })}
                     className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                       errors.email
                         ? "border-red-500 focus:ring-red-500"
                         : "border-gray-300 focus:ring-blue-500"
                     }`}
                     placeholder="Enter your email"
                   />
                   {errors.email && (
                     <p className="text-red-500 text-xs mt-1">
                       {errors.email.message}
                     </p>
                   )}
                 </div>
       
                 {/* Password */}
                
                
                 
                 {/* Submit Button */}
                 <button
                   type="submit"
                   className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                 >
                  Reset Password
                 </button>
               </form>
       
               {/* Footer */}
              
             </div>
           </div>
  )
}

export default ForgotPassword