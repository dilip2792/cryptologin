import React from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../../../context/AuthProvider';

import { toast } from "react-toastify";

// Import toastify css file
import "react-toastify/dist/ReactToastify.css"; 
const Signin = () => {
  const[authUser,setAuthUser]=useAuth();
  const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        const userInfo={
            
            email:data.email,
            password:data.password,
           
        };
        axios.post("/login",userInfo)
        .then((response)=>{
            console.log(response.data);
            if(response.data){
              
              console.log("Login successful:", response.data);
              setAuthUser(response.data.user); // Update authentication state
              toast.success("Navigating to dashboard...");
                navigate("/");
            }
            localStorage.setItem("Auth",JSON.stringify(response.data));
            setAuthUser(response.data);
        })
        .catch((error)=>{
           if(error.response){
            toast.error("Error:"+error.response.data.error)
           }
        });
        
      };
    
      return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
              Sign In
            </h2>
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
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  {...register("password", { required: "Password is required" })}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.password
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                  placeholder="Enter your password"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className='flex justify-between'>
              <div >
                <label>
                  <input type="checkbox" /> Remember Me
                </label>
              </div>
              <div>
             
              </div>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Sign In
              </button>
            </form>
    
            {/* Footer */}
            <p className="text-sm text-gray-600 text-center mt-4">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-blue-500 hover:underline focus:outline-none"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      );
    };

export default Signin