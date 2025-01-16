import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from "react-toastify";

// Import toastify css file
import "react-toastify/dist/ReactToastify.css"; 
import { useAuth } from '../../../context/AuthProvider';
const Signup = () => {
    const[authUser,setAuthUser]=useAuth();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
  
  const password = watch("password","");
  const repeatPassword = watch("repeat_password","");
  const validatePasswordMatch=(value)=>{
    return value===password || "password dont match"
}
const onSubmit = async (data) => {
  const userInfo = {
    name: data.name.trim(),
    surname: data.surname.trim(),
    email: data.email.trim(),
    password: data.password,
    repeat_password: data.repeat_password,
  };

  try {
    const response = await axios.post("/signup", userInfo);
    toast.success("Signup successful");
    console.log("Signup response:", response.data);
  } catch (error) {
    console.error("Signup error:", error.response?.data || error.message);
    toast.error(error.response?.data?.error || "Something went wrong.");
  }
};
  return (
   <div className='flex h-screen items-center justify-center w-full border'>
   
     <form className=" space-y-4" onSubmit={handleSubmit(onSubmit)}>
     <h1>Welcome to Crypto App</h1>
    {/* Name and Surname */}
    <div className="flex gap-4 ">
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Name
        </label>
        <input
          type="text"
          placeholder="Name" {...register("name", { required: true })}
          className="input input-bordered w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Surname
        </label>
        <input
          type="text"
          placeholder="Surname" {...register("surname", { required: true })}
          className="input input-bordered w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
    {errors.name && <span className='text-red-600 pr-24'>This field is required</span>}
    {errors.surname && <span className='text-red-600'>This field is required</span>}
    {/* Email */}
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-1">
        Email
      </label>
      <input
        type="email"
        placeholder="Email" {...register("email", { required: true })}
        className="input input-bordered w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
    {errors.email && <span className='text-red-600'>This field is required</span>}
    {/* Message */}
    <div>
    <label className="block text-sm font-medium text-gray-600 mb-1">
        Password
      </label>
      <input
        type="password"
        placeholder="Password" {...register("password", { required: true })}
        className="input input-bordered w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
    {errors.password && <span className='text-red-600'>This field is required</span>}
    <div>
    <label className="block text-sm font-medium text-gray-600 mb-1">
       Repeat Password
      </label>
      <input
        type="password"
        placeholder="Repeat Password" {...register("repeat_password", { required: true,validate:validatePasswordMatch  })}
        className="input input-bordered w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
    {errors.repeat_password && <span className='text-red-600'>This field is required</span>}
    {/* Terms and Conditions */}
   
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        id="terms" {...register("check_box", { required: true })}
        className="checkbox border-gray-300 rounded focus:ring-blue-500"
      />
       <label
          htmlFor="terms"
          className={`text-sm leading-tight ${
            errors.check_box ? "text-red-500" : "text-gray-600"
          }`}
        >
          I agree with the terms and conditions
        </label>
    </div>
    <p className="text-sm text-gray-600 text-center mt-4">
              Already Have an account?{" "}
              <Link to="/signin"
                className="text-blue-500 hover:underline focus:outline-none"
              >
                Sign in
              </Link>
            </p>
    {/* Buttons */}
    <div className="flex flex-col lg:flex-row gap-4">
      <input
        type="submit" value=" Signup"
        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"/>
      
      
      <button
        type="button"
        className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition"
      >
       Cancel
      </button>
    </div>
  </form>
   </div>
  )
}

export default Signup