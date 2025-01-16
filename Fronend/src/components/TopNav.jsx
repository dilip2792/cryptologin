import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import Cookies from "js-cookie";
import axios from 'axios';
import { useState } from 'react';
const TopNav = ({title,children}) => {
  const [loading,setLoading]=useState(false)
  const handleLogout=async()=>{
    setLoading(true)
   try{
   const res= await axios.post("/logout");
   localStorage.removeItem("Auth");
   Cookies.remove("jwt")     
   
   setLoading(false)
   window.location.reload();
   }catch(error){
    console.log("Error in Logout",error)
   
   }
}
    return (
        
        <div className="flex shadow-xl sticky top-0 max-w-[70rem] h-16 items-center   bg-gray-100">
        {/* Dashboard Title */}
        <div className='mx-6'>{children}</div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{title}</h1>
         
        </div>
      
        {/* Dropdown Menu */}
        <div className="relative">
        <div className="dropdown dropdown-end">
        
  <div tabIndex={0} role="button" className="btn m-1"><FaRegUserCircle className='text-2xl'/></div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a  onClick={handleLogout}>Logout</a></li>
    <li><a>Support</a></li>
  </ul>
</div>
</div>
      </div>
    )
}

export default TopNav